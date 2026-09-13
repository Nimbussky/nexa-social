-- NEXA Social — Production Database Schema
-- Run in Supabase SQL Editor

create extension if not exists "uuid-ossp";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  full_name text,
  bio text,
  avatar_url text,
  website text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.posts (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  content text not null check (char_length(content) <= 2000),
  media_urls text[] not null default '{}',
  like_count int not null default 0,
  comment_count int not null default 0,
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.follows (
  follower_id uuid not null references public.profiles(id) on delete cascade,
  following_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  check (follower_id <> following_id)
);

create table public.likes (
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.posts(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, post_id)
);

create table public.comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references public.posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  content text not null check (char_length(content) <= 1000),
  created_at timestamptz not null default now()
);

create table public.bookmarks (
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.posts(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, post_id)
);

create table public.conversations (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now()
);

create table public.conversation_members (
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  primary key (conversation_id, user_id)
);

create table public.messages (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  content text,
  media_url text,
  created_at timestamptz not null default now()
);

create table public.trends (
  id uuid primary key default uuid_generate_v4(),
  tag text unique not null,
  score numeric not null default 0,
  is_forced boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index posts_author_idx on public.posts (author_id);
create index posts_created_idx on public.posts (created_at desc);
create index follows_follower_idx on public.follows (follower_id);
create index likes_post_idx on public.likes (post_id);
create index messages_conversation_idx on public.messages (conversation_id, created_at);

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.follows enable row level security;
alter table public.likes enable row level security;
alter table public.comments enable row level security;
alter table public.bookmarks enable row level security;
alter table public.messages enable row level security;

create policy "Profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Public posts are viewable by everyone" on public.posts for select using (is_public = true or author_id = auth.uid());
create policy "Users can create posts" on public.posts for insert with check (auth.uid() = author_id);
create policy "Users can like" on public.likes for insert with check (auth.uid() = user_id);
create policy "Users can unlike" on public.likes for delete using (auth.uid() = user_id);

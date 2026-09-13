import { PostCard } from "@/components/feed/PostCard";
import { FeedModeSwitcher } from "@/components/feed/FeedModeSwitcher";
import { Composer } from "@/components/feed/Composer";

const DEMO_POSTS = [
  {
    id: "1",
    author: "Aakash",
    handle: "aakash",
    time: "2h",
    content: "Building the next social platform with liquid-glass UI and real user control over the feed.\n\nChronological first. Platform owns the trends. Free forever.",
    likes: 128,
    comments: 2,
    initialComments: [
      { id: "c1", author: "Priya", content: "This looks amazing!", time: "1h" },
      { id: "c2", author: "Rohan", content: "Finally something transparent.", time: "45m" },
    ],
  },
  {
    id: "2",
    author: "NEXA Team",
    handle: "nexa",
    time: "5h",
    content: "Premium Apple-level glassmorphism meets Chrono-Kinetic liquid metal.\n\nThis is what a modern social experience should feel like.",
    likes: 342,
    comments: 1,
    media: true,
    initialComments: [
      { id: "c3", author: "Ananya", content: "The glass UI is next level.", time: "3h" },
    ],
  },
  {
    id: "3",
    author: "Glasswave",
    handle: "glasswave",
    time: "1d",
    content: "Finally a feed I can actually understand.\n\nToggle chronological ↔ interest ↔ curated.\nTransparency > manipulation.",
    likes: 89,
    comments: 0,
  },
  {
    id: "4",
    author: "Creator",
    handle: "pixel",
    time: "2d",
    content: "Connect with real people. Post your content. Comment. Chat. This is how social should work.",
    likes: 67,
    comments: 0,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[600px] px-3 sm:px-4 py-5">
      <FeedModeSwitcher />
      <Composer />
      <div className="space-y-0">
        {DEMO_POSTS.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <div className="mt-8 mb-6 text-center">
        <button className="btn-ghost text-[13px]">Load more</button>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-4 p-4 bg-gray-100">
      <Link href="/home" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <Link href="/posts" className="hover:underline">
        Posts
      </Link>
    </header>
  );
}
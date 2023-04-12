import Link from "next/link";
export default function Home() {
  return (
    <>
      <h2>Hello world</h2>
      <Link href="/about-us">About Us</Link>
    </>
  );
}

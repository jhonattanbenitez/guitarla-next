import Image from "next/image"
import Link from "next/link"
export default function Header() {
  return (
    <header>
        <div className="container">
            <Image src="/img/logo.svg" width={300} height={40} alt='Logo image'/>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/store">Store</Link>
                
            </nav>
        </div>
    </header>
  )
}

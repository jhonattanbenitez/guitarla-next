import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../src/styles/header.module.css'
export default function Header() {
    const router = useRouter()
  return (
    <header className={styles.header}>
        <div className={`container ${styles.nav_bar}`}>
            <Link href="/"><Image src="/img/logo.svg" width={300} height={40} alt='Logo image'/></Link>    
            <nav className={styles.nav}>
                <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
                    Home
                </Link>
                <Link href="/about-us" className={router.pathname === '/about-us' ? styles.active : ''}>About Us</Link>
                <Link href="/blog" className={router.pathname === '/blog' ? styles.active : ''}>Blog</Link>
                <Link href="/store" className={router.pathname === '/store' ? styles.active : ''}>Store</Link> 
                <Link href="/cart">
                    <Image width={30} height={25} src="/../public/img/carrito.png"/>
                </Link>
            </nav>
        </div>
    </header>
  )
}

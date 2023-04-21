import Link from 'next/link';
import styles from '../src/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Store</Link>
        </nav>
        <p>All rights reserved {new Date().getFullYear()}&copy;</p>
      </div>
    </footer>
  );
}

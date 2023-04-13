import Link from 'next/link';
import Layout from '../../components/layout';
export default function Home() {
  return (
    <>
      <Layout
        title={'Home'}
        description={'This the home for the GuitarLA Store'}
      >
        <h2>Hello world</h2>
        <Link href="/about-us">About Us</Link>
      </Layout>
    </>
  );
}

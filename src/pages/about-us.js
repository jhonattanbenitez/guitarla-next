import { Head } from 'next/document';
import Link from 'next/link';
import Layout from '../../components/layout';
export default function AboutUs() {
  return (
    <>
      <Layout title='About Us' description='About Us, Guitar La Music Store'>
        <h2>AboutUs</h2>
        <Link href="/">Home</Link>
      </Layout>
    </>
  );
}

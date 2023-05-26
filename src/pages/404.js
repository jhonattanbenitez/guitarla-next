import Link from 'next/link';
import Layout from '../../components/layout';

export default function page404() {
  return (
    <Layout title="Page Not Found">
      <p className="error">Page not found</p>
      <Link href="/" className="error-link">
        Back to home
      </Link>
    </Layout>
  );
}

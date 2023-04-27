import Layout from '../../components/layout';
import Post from '../../components/post';
import styles from '../../src/styles/grid.module.css'

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/posts?populate=image');
  const {data: posts} = await res.json();

  return {
    props: {
      posts,
    }
  }
}

export default function Blog({posts}) {
  return (
    <>
      <Layout title='Blog' description='Blog, Guitar LA Music Store'>
        <main className='container'>
          <h1 className='heading'>Blog</h1>
          <div className={styles.grid}>
          {posts?.map(post => (
            <Post key={post.id} post={post.attributes} />
          ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

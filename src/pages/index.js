import Guitar from '../../components/guitar';
import Post from '../../components/post';
import Layout from '../../components/layout';
import styles from '../../src/styles/grid.module.css'

export async function getStaticProps() {
  const guitarsUrl = 'http://localhost:1337/api/guitars?populate=image';
  const postsUrl = 'http://localhost:1337/api/posts?populate=image';

  const [guitarsRes, postsRes] = await Promise.all([
    fetch(guitarsUrl),
    fetch(postsUrl),
  ]);
  const [{ data: guitars }, { data: posts }] = await Promise.all([
    guitarsRes.json(),
    postsRes.json(),
  ]);
  return {
    props: {
      guitars,
      posts,
    },
  };
}

export default function Home({ guitars, posts }) {
  
  return (
    <>
      <Layout
        title={'Home'}
        description={'This the home for the GuitarLA Store'}
      >
        <main className='container'>
          <h1 className='heading'>Our Collection</h1>
          <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
          </div>
          <section className='container'>
          <h2 className='heading'>Blog</h2>
          <div className={styles.grid}>
          {posts?.map(post => (
            <Post key={post.id} post={post.attributes} />
          ))}
          </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

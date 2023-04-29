import Guitar from '../../components/guitar';
import Post from '../../components/post';
import Layout from '../../components/layout';
import styles from '../../src/styles/grid.module.css'
import Lesson from '../../components/lesson';

export async function getStaticProps() {
  const guitarsUrl = 'http://localhost:1337/api/guitars?populate=image';
  const postsUrl = 'http://localhost:1337/api/posts?populate=image';
  const lessonUrl = "http://localhost:1337/api/lesson?populate=image"

  const [guitarsRes, postsRes, resLesson] = await Promise.all([
    fetch(guitarsUrl),
    fetch(postsUrl),
    fetch(lessonUrl)
  ]);
  const [{ data: guitars }, { data: posts },  { data: lesson }] = await Promise.all([
    guitarsRes.json(),
    postsRes.json(),
    resLesson.json()
  ]);
  return {
    props: {
      guitars,
      posts,
      lesson
    },
  };
}

export default function Home({ guitars, posts, lesson }) {

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
        </main>
        <Lesson  lesson={lesson}/>
        <section className='container'>
          <h2 className='heading'>Blog</h2>
          <div className={styles.grid}>
          {posts?.map(post => (
            <Post key={post.id} post={post.attributes} />
          ))}
          </div>
          </section>
      </Layout>
    </>
  );
}

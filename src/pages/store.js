import Guitar from '../../components/guitar';
import Layout from '../../components/layout';
import styles from '../styles/grid.module.css'

/* export async function getStaticProps() { 
  const res = await fetch(`http://localhost:1337/api/guitars?populate=image`);
  const {data: guitars} = await res.json();
  return {
    props: {
      guitars,
    },
  };
} */

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/api/guitars?populate=image`);
  const { data: guitars } = await res.json();
  return {
    props: {
      guitars,
    },
  };
}

export default function Store({ guitars }) {
  console.log(guitars)
  return (
    <>
      <Layout title="Store" description="Store, Guitar La Music Store">
        <main className="container">
          <h1>Our Collection</h1>
          <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

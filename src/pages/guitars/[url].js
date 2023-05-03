import Image from 'next/image';
import styles from '../../styles/guitar.module.css';
import Layout from '../../../components/layout';



/*export async function getServerSideProps({query: {url}}) {
    const response = await fetch(`http://localhost:1337/api/guitars?filters[url]=${url}&populate=image`);
    const {data: guitar} = await response.json();

    return {
        props: {
           guitar 
        }
    }
} */

export async function getStaticPaths() {
  const response = await fetch('http://localhost:1337/api/guitars');
  const { data } = await response.json();

  const paths = data.map((guitar) => ({
    params: { url: guitar.attributes.url },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const response = await fetch(
    `http://localhost:1337/api/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await response.json();

  return {
    props: {
      guitar,
    },
  };
}
export default function Product({ guitar }) {
  const { name, description, price, image } = guitar[0].attributes;
  return (
    <Layout
        title={`Guitar Store - ${name}`}
        description={description}
    >
    <div className={styles.guitar}>
      <Image
        src={image.data.attributes.formats.medium.url}
        width={400}
        height={400}
        alt={name}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <h3 className={styles.price}>${price}</h3>
        <form>
          <label htmlFor="quantity">Quantity</label>
         <select id=""></select> 
        </form>
      </div>
    </div>
    </Layout>
  );
}

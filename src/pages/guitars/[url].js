import Image from 'next/image';
import styles from '../../styles/guitar.module.css';
import Layout from '../../../components/layout';
import { useState } from 'react';

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
  const [quantity, setQuantity] = useState(0);
  const { name, description, price, image } = guitar[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      alert('Please select a quantity');
      return;
    }
    const selectedGuitar = {
      id: guitar[0].id,
      image: image.data.attributes.formats.medium.url,
      name,
      price,
      quantity,
    };
    console.log(selectedGuitar);
  };
  return (
    <Layout title={`Guitar Store - ${name}`} description={description}>
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantity</label>
            <select
              id="quantity"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              <option value="0">-- Select --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Add to cart" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

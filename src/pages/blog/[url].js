import Layout from '../../../components/layout';
import Image from 'next/image';
import styles from '../../styles/blog.module.css';
import { dateFormat } from '../../../utils/helpers';

export async function getServerSideProps({ query: { url } }) {
  const res = await fetch(
    `http://localhost:1337/api/posts?filters[url]=${url}&populate=image`
  );
  const { data: post } = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  const { title, content, image, publishedAt } = post[0].attributes;
  return (
    <Layout title={title} description={content}>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={image.data.attributes.url}
          width={1000}
          height={400}
          alt={`${title} image`}
        />
        <div className={styles.content}>
          <h2>{title}</h2>
          <p className={styles.date}>{dateFormat(publishedAt)}</p>
          <p className={styles.text}>{content}</p>
        </div>
      </article>
    </Layout>
  );
}

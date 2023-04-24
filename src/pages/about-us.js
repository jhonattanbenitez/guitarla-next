import Image from 'next/image';
import Layout from '../../components/layout';
import styles from '../styles/about-us.module.css'
export default function AboutUs() {
  return (
    <>
      <Layout title='About Us' description='About Us, Guitar La Music Store'>
        <main className='container'>
          <h1 className='heading'>About Us</h1>
          <div className={styles.content}>
            <Image src="/../public/img/about-us.jpg" alt='image about us' width={1000} height={800}/>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequatur quo unde magni architecto distinctio aperiam molestias quaerat quae id eligendi repudiandae, praesentium possimus perferendis optio omnis cum maiores ipsa?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis enim impedit, voluptates asperiores eaque, ratione molestias sequi quidem animi dolore eius laboriosam totam beatae hic recusandae? Eaque, aspernatur consectetur.</p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

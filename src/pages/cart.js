import Layout from '../../components/layout';
import styles from '../styles/cart.module.css';
import Image from 'next/image';

export default function Cart({ cart }) {
  return (
    <Layout title="shopping cart">
      <main className="container">
        <h1 className="heading">Cart</h1>
        <div className={styles.content}>
          <div>
            <h2>Articles</h2>
            {cart.lenght === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div>
                    <Image
                      width={250}
                      height={480}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <p className={styles.name}>{product.name}</p>
                    <div className={styles.quantity}>
                      <p>Quantity: </p>
                      <select
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={styles.price}>
                      $<span>{product.price}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $<span>{product.quantity * product.price}</span>
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <aside className={styles.summary}>
            <h3>Your order</h3>
            <p>total: </p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

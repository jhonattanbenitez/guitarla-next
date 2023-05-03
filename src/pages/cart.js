import Layout from "../../components/layout"
import styles from '../styles/cart.module.css'



export default function Cart() {
  return (
    <Layout title="shopping cart">
        <main className="container">
            <h1 className="heading">Cart</h1>
            <div className={styles.content}>
                <div>
                    <h2>Articles</h2>
                </div>
                <aside className={styles.summary}>
                    <h3>Your order</h3>
                    <p>total</p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}

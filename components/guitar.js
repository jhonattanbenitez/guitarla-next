import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/guitar.module.css";

export default function Guitar({guitar}) {
  const {description, name, price, image, url} = guitar;
  return (
    <div className={styles.guitar}>
        <Image src={image.data.attributes.formats.medium.url} width={400} height={400} alt={name}/>
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <h3 className={styles.price}>${price}</h3>
          <Link href={`/guitars/${url}`} className={styles.link}>Buy Now</Link>
        </div>
    </div>
  )
}

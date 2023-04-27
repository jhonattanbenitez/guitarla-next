import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/blog.module.css"
import { dateFormat } from "../utils/helpers";

import React from 'react'

export default function Post({post}) {
    const {title,content,image, url, publishedAt} = post;
  return (
    <article>
        <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`${title} image`}/>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p className={styles.date}>{dateFormat(publishedAt)}</p>
          <p className={styles.sumary}>{content}</p>
          <Link href={`/blog/${url}`} className={styles.link}>Read post</Link>
        </div>
    </article>
  )
}

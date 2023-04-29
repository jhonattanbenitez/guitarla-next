import styles from "../src/styles/lesson.module.css"

export default function Lesson({lesson}) {
    const {content, image, title} = lesson.attributes
  return (
    <section className={`${styles.lesson} lesson`}>
        <style jsx>
            {`
                .lesson {
                    background-image: linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,1)), url(${image.data.attributes.url});
                
            `}
        </style>
        <div className={`container ${styles.grid}`}>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    </section>
  )
}

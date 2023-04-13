
import Head from "next/head"
function Layout({children, title = '', description = ''}) {
  return (
    <>
        <Head>
            <title>{`GuitarLa - ${title}`}</title>
            <meta  name="description" content={description}/>
        </Head>
        <h2>DesdeLayout</h2>
        {children}
    </>
  )
}

export default Layout
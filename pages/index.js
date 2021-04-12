import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>With FontAwesome</p>

        <div className={styles.grid}>
          <a href="https://facebook.com" className={styles.card}>
            <h3>Facebook</h3>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>

          <a href="#" className={styles.card} >
            <h3>Code</h3>
            <FontAwesomeIcon icon='code' />
          </a>

          <a href="https://twitter.com" className={styles.card}>
            <h3>Twitter</h3>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>

          <a
            href="https://instagram.com"
            className={styles.card}
          >
            <h3>Instagram</h3>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>

          <a
            href="https://google.com"
            className={styles.card}
          >
            <h3>Google</h3>
            <FontAwesomeIcon icon={['fab', 'google']} />
          </a>

          <a
            href="https://github.com"
            className={styles.card}
          >
            <h3>Github</h3>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>

          <a
            href="https://gitlab.com"
            className={styles.card}
          >
            <h3>Gitlab</h3>
            <FontAwesomeIcon icon={['fab', 'gitlab']} />
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home

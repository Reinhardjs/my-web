import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>reinhardjs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I'm <a href="">Reinhard Jonathan Silalahi!</a>
        </h1>

        <p className={styles.description}>
          Welcome to my personal blog site.
          You can call it a blog, but sometimes it seems like a journal site.
          Here you can find tutorials related to <code className={styles.code}>android</code>,
          <code className={styles.code}>backend</code>, <code className={styles.code}>kubernetes</code>, and so on.
          <br /><br />
          Happy learning!
        </p>

        <div className={styles.grid}>
          <a href="/backend" className={styles.card}>
            <h2>Learn Backend &rarr;</h2>
            <p>Here is all my journey begins, you can find all of my backend learning journey here</p>
          </a>

          <a href="/kubernetes" className={styles.card}>
            <h2>Learn Kubernetes &rarr;</h2>
            <p>All about deployment, scaling, and management of containerized applications with Kubernetes</p>
          </a>

          <a href="/android" className={styles.card}>
            <h2>Learn Android &rarr;</h2>
            <p>Maybe you can find the reason here why i left Android Dev. But not so sure, I am still on it as a hobby.</p>
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
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
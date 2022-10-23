import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Koru Fest</title>
        <meta name="description" content="Generated by Kafeina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>KORÚ FEST</h1>
      </main>
    </div>
  );
}

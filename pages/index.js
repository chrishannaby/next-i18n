import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { posts } from "../utils/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>
            <a href="/">English</a>
          </li>
          <li>
            <Link href="/de">
              <a>Deutsch</a>
            </Link>
          </li>
        </ul>
        <h1 className={styles.title}>Welcome home</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post}>
                <Link href={`/posts/${post}`}>
                  <a>{post}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

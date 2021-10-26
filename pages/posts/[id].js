import styles from "../../styles/Home.module.css";
import { posts } from "../../utils/data";
import Link from "next/link";

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const paths = posts.map((p) => {
    return {
      params: {
        id: p,
      },
    };
  });
  return { paths, fallback: "blocking" };
}

export default function Home({ id }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {id}</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </main>
    </div>
  );
}

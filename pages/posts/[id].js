import styles from "../../styles/Home.module.css";

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default function Home({ id }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {id}</h1>
      </main>
    </div>
  );
}

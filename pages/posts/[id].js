export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default function Home() {
  return <div>Hi</div>;
}

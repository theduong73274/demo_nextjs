import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { coders: data },
  };
};

export default function AllCoders({ coders }) {
  return (
    <>
      <Head>
        <title>Coder | All Coders</title>
        <meta name="keywords" contents="coders" />
      </Head>

      <div>
        <h1>AllCoders</h1>
        {coders.length > 0 &&
          coders.map((coder) => (
            <Link
              href={"/coders/" + coder.id}
              key={coder.id}
              className={styles.single}
            >
              <h3>{coder.name}</h3>
            </Link>
          ))}
      </div>
    </>
  );
}

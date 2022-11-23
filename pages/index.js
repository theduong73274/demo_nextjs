import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coder | Home</title>
        <meta name="keywords" contents="coders" />
      </Head>

      <div className="">
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          recusandae laboriosam corporis culpa et obcaecati dolorem excepturi
          vero. Sed voluptas ut inventore animi exercitationem? Accusamus,
          officiis. Repellat, recusandae! Veniam, qui.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          recusandae laboriosam corporis culpa et obcaecati dolorem excepturi
          vero. Sed voluptas ut inventore animi exercitationem? Accusamus,
          officiis. Repellat, recusandae! Veniam, qui.
        </p>

        <Link href="/coders/" className={styles.btn}>
          See All Coders
        </Link>
      </div>
    </>
  );
}

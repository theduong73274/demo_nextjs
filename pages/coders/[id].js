import Head from "next/head";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Map data to an array of path objects with params(id);
  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { coder: data },
  };
};

export default function Detail({ coder }) {
  const { name, email, website, address, company } = coder;
  <Head>
    <title>Coder | Detail</title>
    <meta name="keywords" contents="coders" />
  </Head>;
  return (
    <div>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <p>
        Address: {address.street},{address.city}
      </p>
      <p>Company: {company.name}</p>
    </div>
  );
}

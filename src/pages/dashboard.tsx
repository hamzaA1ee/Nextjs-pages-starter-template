// React Imports
import React, { Fragment } from "react";

// View Import
import DashboardView from "../views/Dashboard";

// Next JS Imports
import Head from "next/head";
interface Products {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}
interface cardProducts {
  products: Products[];
}
const Products = ({ products }: cardProducts) => {
  return (
    <Fragment>
      <Head>
        <title>Hamzaa | Dashboard</title>
      </Head>
      <DashboardView product={products} />
    </Fragment>
  );
};

export default Products;

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch("http://dummyjson.com/products").then((data) =>
    data.json()
  );

  // Pass data to the page via props
  return { props: { ...res } };
};

// React Imports
import React, { Fragment } from "react";
import { URL } from "@/services/api-base-urls";
// View Import
import Nav from "@/components/ui/nav";
import ProductView from "@/views/Product";

// Next JS Imports
import Head from "next/head";
import { GetServerSideProps } from "next";

interface SingleProduct {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    sku: string;
    tags: string[];
    brand: string;
    images: string[];
    thumbnail: string;
  };
}

const Product = ({ product }: SingleProduct) => {
  console.log(product);
  return (
    <Fragment>
      <Head>
        <title>Hamzaa | Product</title>
      </Head>

      <Nav />
      {/* <h1>Products Page</h1> */}
      <ProductView product={product} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  // Fetch data from external API
  const res = await fetch(`${URL.GET_PROUDCTS}/${id}`).then((data) =>
    data.json()
  );

  // Pass data to the page via props
  return { props: { product: res } };
};

export default Product;

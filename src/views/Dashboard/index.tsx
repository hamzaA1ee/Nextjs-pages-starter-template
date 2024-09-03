import { FC, Fragment, useEffect, useState } from "react";
import Nav from "@/components/ui/nav";
import Card from "@/components/ui/card";

// interface Products {
//   id: number;
//   title: string;
//   description: string;
//   thumbnail: string;
// }

// interface cardProducts {
//   product: Products;
// }
const Dashboard: FC = ({ prod }: any) => {
  const [products, setProducts] = useState(prod.slice(0, 9));
  //   useEffect(() => {
  //     fetch("http://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data.products.slice(0, 9)));
  //   }, []);

  return (
    <Fragment>
      <Nav />

      <h1 className="text-center text-black mt-7">Products</h1>

      <div className="flex justify-center items-center min-h-screen mt-10 p-4 ">
        <div className="grid grid-cols-3 gap-3">
          {products.map((data) => (
            <Card key={data.id} product={data} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

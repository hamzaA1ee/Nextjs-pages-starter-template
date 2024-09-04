import { FC, Fragment, useState } from "react";
import Nav from "@/components/ui/nav";
import Card from "@/components/ui/card";

interface Products {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface cardProducts {
  product: Products[];
}
const Dashboard: FC<cardProducts> = ({ product }) => {
  const [products] = useState(product);

  return (
    <Fragment>
      <Nav />

      <h1 className="text-center text-5xl text-black mt-14">Products</h1>

      <div className="flex items-center justify-center min-h-screen mt-10 p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((data) => (
            <Card key={data.id} product={data} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

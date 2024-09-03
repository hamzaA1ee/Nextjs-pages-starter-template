import { Fragment } from "react";
import Image from "next/image";

interface Products {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}
interface cardProducts {
  product: Products;
}
export default function Card({ product }: cardProducts) {
  return (
    <Fragment>
      <div className="mt-10 relative h-[350px] w-[300px] rounded-md">
        <Image
          width={200}
          height={200}
          src={product.thumbnail}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{product.title}</h1>
          <p className="mt-2 text-sm text-gray-300">{product.description}</p>
        </div>
      </div>
    </Fragment>
  );
}

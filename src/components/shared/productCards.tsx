import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface IProp {
  img: StaticImageData;
  title: string;
  price: number;
  id: number;
  category: string;
}

const ProductsCards: React.FC<IProp> = ({
  img,
  title,
  price,
  category,
  id,
}) => {
  return (
    <Link href={`/${category}/${id}`}>
      <div className="py-5 hover:scale-105 duration-300">
        <Image
          src={img}
          alt="Products"
          className="object-cover flex-shrink-0"
        />
        <h3 className="py-2 font-bold">{title}</h3>
        <p className="text-gray-500">${price}</p>
      </div>
    </Link>
  );
};

export default ProductsCards;
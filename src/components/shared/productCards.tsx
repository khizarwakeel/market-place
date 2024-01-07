import Image, { StaticImageData } from "next/image";

interface IProps {
  img: StaticImageData;
  title: string;
  price: number;
}

const ProductCards: React.FC<IProps> = ({ img, title, price }) => {
  return (
    <div>
      <div className="py-5">
        <Image
          src={img}
          alt="Products"
          className="hover:scale-105 duration-300 object-cover"
        />
        <h3 className="py-2 font-bold">{title}</h3>
        <p className="text-gray-500">{price}</p>
      </div>
    </div>
  );
};

export default ProductCards;
import Item from "./Item";
import { PRODUCTS, ACCOUNT, COMPANY, SUPPORT } from "../data/data";

const ItemContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={ACCOUNT} title="ACCOUNT" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemContainer;
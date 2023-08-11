import productList from "../src/pages/productList.json"

let DrinkList = ({ products }) => {
  return (
    <div className="drinkList">
      {products.map(product => (
        <DrinkList
          product={product}
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          />
      ))}
    </div>
  );
};

export default DrinkList;
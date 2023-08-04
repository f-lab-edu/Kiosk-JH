import productList from "../src/pages/productList.json"

export const DrinkList = ({ product }) => {
  return (
    <>
      <div className={product}>
          <div className={product.image} />
          <img src={product.image} alt="product" />
      </div>
    </>
  )
}
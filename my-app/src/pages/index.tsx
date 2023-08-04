import productList from "./productList.json";
import {useState} from "react";

export default function Home() {
  console.log(productList)
  const [count, setCount] = useState(
    productList.products.reduce((state, products) => {
      state[products.id] = 0;
      return state;
    }, {})
  );
  return (
    <>
    <div className="w-[400px] h-[800px] bg-[#FFE4E6] rounded-[0px] absolute mx-auto">

    </div>
    </>
  )
}

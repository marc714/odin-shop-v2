import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import useFetch from "../hooks/useFetch";

export const Categories = ({ handleSwitch }) => {
  // doesn't load before the html return;
  // const { loading, error, data: categories } = useFetch('https://fakestoreapi.com/products/categories');

  // Old:
  const [categories, setCategories] = useState([]);

  let resultObj = null;
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      resultObj = await result.json();
      setCategories(resultObj);
    };
    fetchData();
    // setCategories(resultObj)  putting it here after fetchData() doesn't work.
  }, []);

  //////////

  // can't do below cause it wont load in time for the html to render. got to use useeffect
  // let categories = null;
  // const fetchData = async () => {
  //     const result = await fetch('https://fakestoreapi.com/products/categories')
  //         // .then(res=>res.json())
  //         // .then(json=>console.log(json))

  //         categories = await result.json();
  //         console.log(categories)
  // }

  // fetchData();

  return (
    <div className="flex gap-4 flex-row">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        key={nanoid()}
        onClick={() => handleSwitch("products/")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          key={nanoid()}
          onClick={() => handleSwitch("products/category/" + category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

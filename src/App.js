import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";

export const App = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, newFetchData] = useState([]);
  let { info, results } = fetchData;
  console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      newFetchData(data);
    })();
  }, [api]);
  return (
    <>
      <p className="text-center text-4xl m-9">
        Ricky Morty <span className="text-orange-600 text-4xl">Exercise</span>
      </p>
      <div className="flex flex-col bg-black">
        <div className="m-9">SearchBar</div>
        <Cards results={results} />
      </div>
    </>
  );
};

export default App;

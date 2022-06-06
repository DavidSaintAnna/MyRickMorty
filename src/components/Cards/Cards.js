import React from "react";

const Cards = ({ results }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((char) => {
      let { id, name, image, status } = char;
      if (status === "Unknown") {
        return (
          <div key={id} className="flex items-center m-20 flex-col">
            <div className="border-8 border-gray-200/50">
              <img src={image} alt="" className="" />
              <p className="bg-gray-400 text-white text-2xl">Desconhecido</p>
              <p className="text-green-600 text-4xl">{name}</p>
            </div>
          </div>
        );
      } else if (status === "Dead") {
        return (
          <div key={id} className="flex items-center m-20 flex-col">
            <div className="border-8 border-red-500/50">
              <img src={image} alt="" className="" />
              <p className="bg-red-400 text-white text-2xl">Morto</p>
              <p className="text-green-600 text-4xl">{name}</p>
            </div>
          </div>
        );
      } else if (status === "Alive") {
        return (
          <div key={id} className="flex items-center m-20 flex-col">
            <div>
              <img src={image} alt="" className="" />
              <p className="text-green-600 text-4xl">{name}</p>
            </div>
          </div>
        );
      }
    });
  } else {
    display = "No Characters Found :/";
  }
  return <div>{display}</div>;
};

export default Cards;

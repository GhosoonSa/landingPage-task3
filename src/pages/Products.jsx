import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  //navigate to GetStarted
  const getNav = () => {
    navigate("/GetStarted");
  };

  return (
    <>
      <div className="bg-black grid grid-cols-2 gap-4">
        <div className="col-span-1 mx-28 my-28 w-96">
          <h1 className="font-semibold text-white text-6xl text-left">
            Build a Global network of
          </h1>
          <h1 className="font-semibold text-5xl text-left IoT">IoT Prodcts.</h1>
          <p className="text-white text-left my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            quidem autem tempora obcaecati consequuntur! Repellat laboriosam
            veniam maxime molestiae beatae nam, corporis impedit nisi error
            fugit, quia sunt! Placeat, consequatur!
          </p>
          <button
            className="rounded-md text-black py-1 px-4 font-semibold mycolor"
            onClick={getNav}
          >
            Get started
          </button>
        </div>
        <div className="col-span-1">
          <img
            src="./image-task3.png"
            alt="product"
            className="mr-6 mt-10 pro-photo"
          />
        </div>
      </div>
    </>
  );
};

export default Products;

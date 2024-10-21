import React from "react";

const Card = ({ user, handleRemove, id }) => {
  const { name, image, email } = user;

  return (
    <>
      <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
        <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>
        <h1 className="mt-1 text-xl font-semibold">{name}</h1>
        <h4 className="opacity-40 text-xs font-semibold">{email}</h4>
        <p className=" mt-1 text-center text-xs font-semibold leading-1 tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos
          maiores explicabo.
        </p>
        <button
          onClick={() => handleRemove(id)}
          className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4"
        >
          Remove It
        </button>
      </div>
    </>
  );
};

export default Card;

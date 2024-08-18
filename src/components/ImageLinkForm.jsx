import React from "react";

const ImageLinkForm = ({ input, inputHandler, onSubmit }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      <p className="text-xl text-center">
        {"This Magic Brain will detect Face in your picture. Give it a try"}
      </p>
      <div className="p-6  rounded-md shadow-md  flex justify-center w-[450px] sm:w-[600px] md:w-[650px] lg:w-[700px] bg-gradient-to-r from-pink-500 to-blue-300">
        <input
          type="text"
          className="w-[70%] py-2"
          value={input}
          onChange={inputHandler}
        />
        <button
          className="bg-purple-500 w-[30%] py-2 hover:bg-purple-700  active:scale-95"
          onClick={onSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;

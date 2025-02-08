import { useState } from "react";
import Cute from "../media/cute.webp";
import Messages from "./messages";
import Yes from "./yes";

const main = () => {
  const [num, setNum] = useState(0);
  const [yes, setYes] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const update = () => {
    setNum((prev) => prev + 1);
    setFontSize((prev) => prev + 0.25);
  };

  return yes ? (
    <Yes />
  ) : (
    <div className="h-full w-full flex justify-center items-center flex-col bg-red-100 overflow-y-auto">
      <div>
        <img src={Cute} className="w-40 h-40" />
      </div>
      <div className="flex flex-col mt-8">
        <div className="text-base font-semibold text-red-600 flex justify-center">
          Will you be my Valentine Veduuu?
        </div>
        <div className="flex flex-row mt-8 flex-wrap justify-center gap-4">
          <div>
            <button
              className={`text-white bg-green-500 focus:outline-none focus:ring-0 border-none`}
              style={{ fontSize: `${fontSize}rem` }}
              onClick={() => setYes(true)}
            >
              Yes
            </button>
          </div>
          <div className="flex items-end">
            <button
              className="text-white bg-red-500 text-base focus:outline-none focus:ring-0 border-none"
              onClick={update}
            >
              {num === 0 ? "No" : Messages[num % Messages.length]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;

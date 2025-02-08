import { useState } from "react";
import Cute from "../media/cute.webp";
import Messages from "./messages";
import Yes from "./yes";

const main = () => {
  const [num, setNum] = useState(0);
  const [yes, setYes] = useState(false);

  const updateNum = () => {
    setNum((prev) => prev + 1);
  };

  return yes ? (
    <Yes />
  ) : (
    <div className="h-full w-full flex justify-center items-center flex-col bg-red-100 overflow-y-auto">
      <div>
        <img src={Cute} className="w-80 h-80" />
      </div>
      <div className="flex flex-col mt-8">
        <div className="text-4xl font-semibold text-red-600 flex justify-center">
          Will you be my Valentine Veduuu?
        </div>
        <div className="flex flex-row mt-8 flex-wrap justify-center gap-4">
          <div>
            <button
              className={`text-white bg-green-500 focus:outline-none focus:ring-0 border-none`}
              style={{ fontSize: `${1.25 * (num + 1)}rem` }}
              onClick={() => setYes(true)}
            >
              Yes
            </button>
          </div>
          <div className="flex items-end">
            <button
              className="text-white bg-red-500 text-xl focus:outline-none focus:ring-0 border-none"
              onClick={updateNum}
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

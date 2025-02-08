import { useState } from "react";
import Mochi from "../media/mochi-so-cute.gif";
import Sorry from "./sorry";
import Main from "./main";

const index = () => {
  const [answer, setAnswer] = useState(0);

  return answer === 0 ? (
    <div className="h-full w-full flex justify-center items-center flex-col bg-red-100">
      <div>
        <img src={Mochi} className="w-80 h-80" />
      </div>

      <div className="flex flex-col mt-8">
        <div className="text-4xl font-semibold text-red-600 flex justify-center">
          Are you Veduuu the gabbuuu chabbuuu?
        </div>
        <div className="flex flex-row mt-8 flex-wrap justify-center gap-4">
          <div>
            <button
              className={`text-white bg-green-500 text-xl focus:outline-none focus:ring-0 border-none`}
              onClick={() => setAnswer(1)}
            >
              Yes
            </button>
          </div>
          <div className="flex items-end">
            <button
              className="text-white bg-red-500 text-xl focus:outline-none focus:ring-0 border-none"
              onClick={() => setAnswer(-1)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : answer === 1 ? (
    <Main />
  ) : (
    <Sorry />
  );
};

export default index;

import Hug from "../media/hug.webp";
import Confetti from "react-confetti";

import { useWindowSize } from "react-use";

const yes = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="h-full w-full flex justify-center items-center flex-col bg-red-100">
      <Confetti
        width={width}
        height={height}
        gravity={0.25}
        numberOfPieces={500}
      />
      <div>
        <img src={Hug} className="w-40 h-40" />
      </div>
      <div className="text-base font-semibold text-red-600 flex justify-center mt-8">
        Yayayayay!!! 🙈🙈🙈
      </div>
    </div>
  );
};

export default yes;

import Dudu from "../media/dudu.gif";

const sorry = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col bg-red-100">
      <div>
        <img src={Dudu} className="w-40 h-40" />
      </div>
      <div className="text-base font-semibold text-red-600 flex justify-center mt-8">
        Sorry this is not for you.
      </div>
    </div>
  );
};

export default sorry;

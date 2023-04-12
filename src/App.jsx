import JazzCard from "./components/JazzCard";

const App = () => {
  return (
    <div className=" mt-16 ml-8 max-md:mx-2xl: flex flex-col justify-center max-w-md rounded-md ">
      <h1 className="p-2 font-bold text-2xl text-center bg-orange-700 mb-3 drop-shadow-2xl rounded-md ">
        Jazz
      </h1>
      <JazzCard />
      <p className="  rounded-md mt-4 p-4 bg-orange-700 text-center font-bold pt-5">
        This dog is an atypical animal. It tends to spin on itself.{" "}
      </p>
    </div>
  );
};

export default App;

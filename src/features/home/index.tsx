import { useInitData } from "@telegram-apps/sdk-react";

const Home = () => {
  const initData = useInitData();

  console.log(initData);

  return (
    <>
      <h1 className="">Home</h1>
      
      {/* <pre>{JSON.stringify(initData, null, 2)}</pre> */}
    </>
  );
};

export default Home;

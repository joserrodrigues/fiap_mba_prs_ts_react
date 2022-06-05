import { useEffect, useState } from "react";
import HomeView from "./HomeView";

const HomeController = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Teste " + count);
      //functional update
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <HomeView info={count} />;
};

export default HomeController;

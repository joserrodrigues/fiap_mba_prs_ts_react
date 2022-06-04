import React from "react";
import "./Home.css";

interface IProps {
  info: number;
}
const HomeView: React.FC<IProps> = (props) => {
  return (
    <div className="container">
      <h1 className="text">Info: {props.info}</h1>
    </div>
  );
};

export default HomeView;

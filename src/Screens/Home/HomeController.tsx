import React from "react";
import HomeModel from "./HomeModel";
import HomeView from "./HomeView";

class HomeController extends React.Component {
  homeModel: HomeModel;

  constructor() {
    super({});

    this.homeModel = new HomeModel(); //inicializando o view
    this.homeModel.getSomeInfo();
  }
  render() {
    return (
      <HomeView /> //Chamando o View
    );
  }
}
export default HomeController;

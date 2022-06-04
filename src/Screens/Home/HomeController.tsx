import React from "react";
import HomeModel from "./HomeModel";
import HomeView from "./HomeView";

interface IState {
  count: number;
}

class HomeController extends React.Component<any, IState> {
  homeModel: HomeModel;

  constructor() {
    super({});

    this.state = {
      count: 0,
    };

    this.homeModel = new HomeModel(); //inicializando o view
    this.homeModel.getSomeInfo();
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <HomeView info={this.state.count} /> //Chamando o View
    );
  }
}
export default HomeController;

import { createStackNavigator, createAppContainer } from "react-navigation";

import ApiDetail from "./pages/ApiDetail.js";
import ApiList from "./pages/ApiList.js";
import Beranda from "./pages/Beranda.js";
import Detail from "./pages/Detail.js";

const AppNavigator = createStackNavigator(
  {
    ApiList: {
      screen: ApiList
    },
    ApiDetail: {
      screen: ApiDetail
    },
    Beranda: {
      screen: Beranda
    },
    Detail: {
      screen: Detail
    }
  },
  {
    initialRouteName: "Beranda"
  }
);

export default createAppContainer(AppNavigator);

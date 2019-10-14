import { createAppContainer } from "react-navigation";
import StackNav from "./StackNav.js";
import BottomTabNav from "./BottomTabNav";

const AppContainer = createAppContainer(BottomTabNav);
export default AppContainer;
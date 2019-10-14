import { createAppContainer } from "react-navigation";

import AuthStack from "./AuthStack";

const AppContainer = createAppContainer(AuthStack);

export default AppContainer;

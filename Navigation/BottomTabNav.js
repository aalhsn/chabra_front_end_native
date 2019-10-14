import { createBottomTabNavigator } from "react-navigation-tabs";

//Import your stacks
import ProductsTab from "./ProductsTab";

const BottomTabNav = createBottomTabNavigator(
    {
        Products: ProductsTab,

    },
    {
        defaultNavigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "rgb(20,90,100)"
            },

            cardStyle: {
                backgroundColor: "rgb(20,90,100)"
            }
        }
    }
);

export default BottomTabNav;
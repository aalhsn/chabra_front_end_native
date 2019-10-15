import { createBottomTabNavigator } from "react-navigation-tabs";

//Import your stacks
import ProductsTab from "./ProductsTab";
//
import ProfileTab from "./ProfileTab"
const BottomTabNav = createBottomTabNavigator(
    {
        Products: ProductsTab,
        Profile: ProfileTab,


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
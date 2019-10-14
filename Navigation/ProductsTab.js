import React, { Component } from "react";
import { Icon } from "native-base";
import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";

import { createStackNavigator } from "react-navigation-stack";

const ProductsTab = createStackNavigator(
  {
    ProductsListScreen: ProductsList,
    ProductDetailScreen: ProductDetail
  },

  {
    initialRouteName: "ProductsListScreen",
    navigationOptions: {
      tabBarLabel: "Chabra List",
      tabBarIcon: () => <Icon type="Entypo" name="shop" size={20} />
    }
  }
);

export default ProductsTab;

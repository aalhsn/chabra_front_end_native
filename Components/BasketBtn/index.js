import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class ShoppingCartBtn extends Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("ShoppingBasketScreen")}
        name="shoppingcart"
        type="AntDesign"
      />
    );
  }
}

export default withNavigation(ShoppingCartBtn);

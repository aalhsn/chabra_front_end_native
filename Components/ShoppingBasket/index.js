import React, { Component } from "react";
import { connect } from "react-redux";
import {removeItemFromBasket, checkoutBasket }from "../../redux/actions";

// NativeBase Components
import { Text, List, Button, Title } from "native-base";
// Component
import BasketItem from "./BasketItem";

class ShoppingBasket extends Component {

  handlePress = () => {
    if (!this.props.user){
    this.props.navigation.navigate("LoginScreen");
  } else {
    this.props.navigation.navigate("SummaryScreen")
  }
}
  totalPrice = () => {
    let total = 0;
    this.props.items.forEach(item => {
      total = total + parseFloat(item.price) * parseFloat(item.quantity);
    });
    return total.toFixed(3);
  };

  handleCheckoutButton = () => {
    this.props.checkoutBasket();
  };
  render() {
    let items = this.props.items;
    let basketItems;
    if (items) {
        basketItems = items.map((item, index) => (
        <BasketItem
          item={item}
          key={index}
          removeItemFromBasket={this.props.removeItemFromBasket}
        />
      ));
    }

    return (
      <List>
      <Title>Shopping Basket</Title>
        {basketItems}
        <Text>Total: {this.totalPrice()} KWD</Text>
        <Button full warning onPress={()=>this.handlePress()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.basketReducer.items,
  user:state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  removeItemFromBasket: item => dispatch(removeItemFromBasket(item)),
  checkoutBasket: () => dispatch(checkoutBasket())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);


import React, { Component } from "react";
import { connect } from "react-redux";
import {removeItemFromBasket, checkoutBasket }from "../../redux/actions";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import BasketItem from "./BasketItem";

class ShoppingBasket extends Component {
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
        {basketItems}
        <Button full danger onPress={this.handleCheckoutButton}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.basketReducer.items
});

const mapDispatchToProps = dispatch => ({
  removeItemFromBasket: item => dispatch(removeItemFromBasket(item)),
  checkoutBasket: () => dispatch(checkoutBasket())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingBasket);
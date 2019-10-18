import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromBasket, checkoutBasket } from "../../redux/actions";
import moment from "moment";

// NativeBase Components
import { Text, List, Button, Title, Label, Input, Body, Item } from "native-base";
// Component
import BasketItem from "./BasketItem";

class OrderSummary extends Component {

  static navigationOptions = {
    title: "Order Summary",
  };

  state = {
    address: "",
    total: 0
  };

  totalPrice = () => {
    let total = 0;
    this.props.items.forEach(item => {
      total = total + parseFloat(item.price) * parseInt(item.quantity);
    });
    return total.toFixed(3);;
  };


  OrderNumber = () => {
    let total = Math.random()
      .toString(36)
      .toUpperCase();
    return total.substr(3, 5);
  };

  handlePress = () => {
    const newOrder = {
      id: "need it from backend",
      ref: "CH" + this.OrderNumber(),
      items: this.props.items,
      total_order_price: this.totalPrice(),
      address: this.state.address,
      date: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a"),
      customer: this.props.user
    };
    this.props.checkoutBasket(newOrder);
    alert("Order is received! \n Your Order Reference ID is [ " + newOrder.ref + " ]");

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
        <Text style={{ marginTop: 20 }}>Total: {this.totalPrice()} KWD</Text>

        <Text style={{ color: "black", marginTop: 50 }}>Shipping Address</Text>

        <Item
          rounded
          style={{ backgroundColor: "white", marginTop: 10 }}
        >
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="enter address"
            value={this.state.address}
            onChangeText={address => this.setState({ address })}
          />
        </Item>
        <Button full danger onPress={() => this.handlePress()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.basketReducer.items,
  orders: state.basketReducer.orders,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  checkoutBasket: (order) => dispatch(checkoutBasket(order))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);
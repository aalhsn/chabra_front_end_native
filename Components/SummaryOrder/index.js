import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromBasket, checkoutBasket } from "../../redux/actions";
import moment from "moment";

// NativeBase Components
import { Text, List, Button, Title, Label, Input, Body, Item } from "native-base";
import GradientButton from 'react-native-gradient-buttons';
import styles from "./styles";


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



  handlePress = () => {
    const newOrder = {
      baskets:this.props.items,
      address : this.state.address
    };
    this.props.checkoutBasket(newOrder);
    this.props.navigation.replace("ThankYouScreen")


  };

  render() {
    if (!this.props.user)
    return (
      this.props.navigation.replace("LoginScreen")

    )
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

        <GradientButton width='90%' blueMarine rounded style={styles.roundedBtn} onPressAction={() => this.handlePress()}>
          <Text style={styles.checkoutStyle}>Checkout</Text>
        </GradientButton>



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
  checkoutBasket: (items) => dispatch(checkoutBasket(items))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);
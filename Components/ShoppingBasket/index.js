import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromBasket, checkoutBasket } from "../../redux/actions";

// NativeBase Components
import { Text, List, Button, Title } from "native-base";
import GradientButton from 'react-native-gradient-buttons';
import styles from "./styles";

// Component
import BasketItem from "./BasketItem";

class ShoppingBasket extends Component {

  static navigationOptions = {
    title: "Shopping Basket",
    headerStyle: {
      backgroundColor: "#3dffcb",
      fontWeight: 'bold',
    }
  };

  handlePress = () => {
    if (!this.props.user) {
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
        {basketItems}
        <Text>Total: {this.totalPrice()} KWD</Text>

        <GradientButton width='90%' blueMarine rounded style={styles.roundedBtn} onPressAction={() => this.handlePress()}>
          <Text style={styles.checkoutStyle}>Checkout</Text>
        </GradientButton>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.basketReducer.items,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  removeItemFromBasket: item => dispatch(removeItemFromBasket(item)),
  checkoutBasket: () => dispatch(checkoutBasket())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);


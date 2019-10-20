import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components

import { List, Content, Spinner } from "native-base";


//Components
import OrderCard from "./OrderCard";
import BasketBtn from "../BasketBtn";



// Style
import styles from "./styles";

class OrderHistory extends Component {
  static navigationOptions = {
    title: "Orders History",
    headerRight: <BasketBtn />,
    headerStyle: {
      backgroundColor: "#3dffcb",
      fontWeight: 'bold',
    }
  };

  render() {
    const orders = this.props.orders;
    const history = () => orders.map((order, idx) => {
      return <OrderCard order={order} key={idx} />;
    });
    // 
    if (!user)
      return (
        this.props.navigation.replace("LoginScreen")

      )

    return (
      <Content style={{ marginTop: 10 }}>
        <List>{orders && history()}</List>
      </Content>
    );
  }
}



const mapStateToProps = state => ({
  user: state.authReducer.user,
  orders: state.basketReducer.orders,

});

export default connect(mapStateToProps)(OrderHistory);

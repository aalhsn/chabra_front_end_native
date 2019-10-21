import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";


// NativeBase Components
import { Title, Text, Body, Content, Container, Card, CardItem } from "native-base";

// Style
import styles from "./styles";
import BasketItem from "../SummaryOrder/BasketItem"

class OrderDetail extends Component {


   
  static navigationOptions = ({ order, navigation }) => {
    return {
      title: "Order Detail"
    };
  };
  
  render() {
    let order = this.props.orders.find(order=>order.id === this.props.navigation.getParam("orderID"))
    const getOrderITem =() => order.baskets.map(item => <Text>{item.product.name} - {item.product.price}KWD | Q: {item.quantity} </Text>)
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem
              style={styles.middleText}
              button
              onPress={() => alert("This is Card Header")}
            >
            <Text style={styles.middleText}>Order Ref: {(order.order_ref).toUpperCase()}</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text style={styles.titleOfDetail}>Shipping Address: {order.address}</Text>
                <View style={styles.hairLine} />
                <Text style={styles.titleOfDetail}>Items ordered:</Text>
                <View style={styles.titleOfDetail}>
                {getOrderITem()}
                </View>
                <View style={styles.hairLine} />
                
                <Text style={styles.titleOfDetail}>Total Price: {order.total}</Text>
                <View style={styles.hairLine} />
                <Text style={styles.titleOfDetail}>Order Date:</Text>
                <Text>{order.date_time}</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => alert("This is Card Footer")}
            >
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  orders: state.basketReducer.orders,
  
});

export default connect(mapStateToProps)(OrderDetail);
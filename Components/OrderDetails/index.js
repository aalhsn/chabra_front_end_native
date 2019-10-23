import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

import { ImageBackground } from "react-native";
import wallpaper from "../../assets/wall.png";


// NativeBase Components
import { Title, Text, Body, Content, Container, Card, CardItem } from "native-base";

// Style
import styles from "./styles";
import BasketItem from "../SummaryOrder/BasketItem"

class OrderDetail extends Component {



  static navigationOptions = ({ order, navigation }) => {
    return {
      title: "Order Detail",
      headerStyle: {
        backgroundColor: "#3dffcb",
        fontWeight: 'bold',
      }
    };
  };

  render() {
    let order = this.props.profile.order_history.find(order => order.id === this.props.navigation.getParam("orderID"))
    const getOrderITem = () => order.baskets.map(item => <Text>{item.product.name} - {item.product.price}KWD | Q: {item.quantity} </Text>)
    return (
      <Container>
        <ImageBackground
          source={wallpaper}
          style={{ width: "100%", height: "100%" }}
        >
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
                  <Text>{moment(order.date_time).calendar()}</Text>
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
        </ImageBackground>

      </Container>
    );
  }
}


const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile,
  loading: state.authReducer.profileLoading,

});


export default connect(mapStateToProps)(OrderDetail);
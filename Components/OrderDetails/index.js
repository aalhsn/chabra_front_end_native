import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

// NativeBase Components
import { Text, Body, Content, Container, Card, CardItem } from "native-base";

// Style
import styles from "./styles";

class OrderDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Order Detail`
      //   headerRight: <CartButton />
    };
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem
              style={styles.middleText}
              button
              onPress={() => alert("This is Card Header")}
            >
              <Text style={styles.middleText}>OrderID: 009234789</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text style={styles.titleOfDetail}>Shipping Address:</Text>
                <View style={styles.hairLine} />
                <Text style={styles.titleOfDetail}>Payment Method:</Text>

                <View style={styles.hairLine} />
                <Text style={styles.titleOfDetail}>Total Price:</Text>

                <View style={styles.hairLine} />
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => alert("This is Card Footer")}
            >
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // orderReducer: state.orderReducer
  //coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(OrderDetail);

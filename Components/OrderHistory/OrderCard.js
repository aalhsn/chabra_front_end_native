import React, { Component } from "react";
import { View } from "react-native";
import moment from "moment";
import { withNavigation } from "react-navigation";
// NativeBase Components
import {
  Content,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left
} from "native-base";

// Style
import styles from "./styles";

const OrderCard = ({ navigation, order }) => {
  const handlePress = () => {
    navigation.navigate(
      "OrderDetailScreen",
      { orderID: order.id }
    );
  };
  return (
    <Content style={styles.container}>
      <View style={styles.overlay} />
      <ListItem
        button
        onPress={handlePress}
        style={(styles.listitem, styles.cardView)}
      >
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Text style={styles.text}>
                {(order.order_ref).toUpperCase()}
                {"\n"}
                <Text style={styles.text1}>
                  Total {order.total} KWD
                </Text>
                {"\n"}
                <Text style={styles.text1}>
                  Ordered {order.date_time}
                </Text>
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </Content>
  );
};

export default withNavigation(OrderCard);

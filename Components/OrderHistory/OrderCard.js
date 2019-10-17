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
      { orderRef: order.ref }
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
                {order.ref}
                {"\n"}
                <Text style={styles.text1}>
                  Total {order.total_order_price} KWD
                </Text>
                {"\n"}
                <Text style={styles.text1}>
                  Ordered {order.date}
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

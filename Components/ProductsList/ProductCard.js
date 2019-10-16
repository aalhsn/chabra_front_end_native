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

const ProductCard = ({ navigation, product }) => {
  const handlePress = () => {
    navigation.navigate(
      "ProductDetailScreen",
      { productID: product.id },
      { productName: product.name }
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
              <Thumbnail
                bordered
                source={{ uri: product.img }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>
                {product.name}
                {"\n"}
                <Text style={styles.text1}>
                  Price per item: {product.price} KWD
                </Text>
                {"\n"}
                {/* <Text style={styles.text1}>Added to store {moment(product.date_added).fromNow()}</Text> */}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </Content>
  );
};

export default withNavigation(ProductCard);

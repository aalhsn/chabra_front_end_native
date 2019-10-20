import React, { Component } from "react";
import { View } from "react-native";
import moment from "moment";
import { withNavigation } from "react-navigation";

import { Col, Row, Grid } from "react-native-easy-grid";

// NativeBase Components
import {
  Content,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Item
} from "native-base";

// Style
import styles from "./styles";

const ProductCard = ({ navigation, product }) => {
  const handlePress = () => {
    navigation.navigate(
      "ProductDetailScreen",
      { productID: product.id, productName: product.name }
    );
  };
  return (
    <Content style={styles.container} >
      <View
        style={styles.overlay} />
      <Item
        button
        onPress={handlePress}
        style={styles.transparent}
      >
        <Card button style={styles.transparent} onPress={handlePress}>

          <View style={styles.center}>
            <Thumbnail
              bordered
              source={{ uri: product.img }}
              style={styles.thumbnail}
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.text} >
              {product.name} </Text>
          </View>


          <CardItem style={styles.transparent}>
            <Text style={styles.text1}>
              Each: {product.price} KWD
                </Text>
            <Text style={styles.text1}>             {"\n"}

              Added to store {moment(product.date_added).fromNow()}
            </Text>
          </CardItem>
        </Card>
      </Item>
    </Content >
  );
};

export default withNavigation(ProductCard);

import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import moment from "moment";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const ProductCard = ({ navigation, product }) => {
  const handlePress = () => {
    navigation.navigate("ProductDetailScreen", { productID: product.id });
  };
  return (
    <ImageBackground
      source={{ uri: product.img }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: product.img }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{product.name}{"\n"}
                <Text style={styles.text1}>Price per item: {product.price} KWD</Text>{"\n"}
                <Text style={styles.text1}>Added to store {moment(product.date_added).fromNow()}</Text>
              </Text>

            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(ProductCard);
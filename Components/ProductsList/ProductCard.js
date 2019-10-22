import React, { Component } from "react";
// NativeBase Components
import {
  Text,
  CardItem,
  Icon, Left

}
  from "native-base"; import moment from "moment";
import { withNavigation } from "react-navigation";
import { addItemToBasket } from "../../redux/actions";
import { connect } from "react-redux";
import { CardViewWithImage } from 'react-native-simple-card-view'
import GradientButton from 'react-native-gradient-buttons';
import { Col, Row, Grid } from "react-native-easy-grid";

// Style
import styles from "./styles";
//Components
import AddToCart from "../AddToCart";

class ProductCard extends Component {



  handlePress = () => {
    this.props.navigation.navigate(
      "ProductDetailScreen",
      { productID: this.props.product.id, productName: this.props.product.name }
    );
  };

  render() {

    return (
      <>
        <Col style={{ width: 200 }}>

          <CardItem
            button
            onPress={this.handlePress}
            style={styles.itemList}
          >


            <CardViewWithImage
              width={140}
              source={{ uri: this.props.product.img }}
              content={`${this.props.product.price} KWD`
              }
              title={this.props.product.name}
              titleFontSize={20}
              titleFontFamily={"Avenir"}
              imageWidth={140}
              imageHeight={140}
              buttonComponent={<AddToCart product={this.props.product} />}
              contentFontFamily={"Futura"}
              contentFontSize={16}
              contentMargin={top = 50, bottom = 50, right = 50, left = 50}
              roundedImage={false}
              style={styles.transparent}
            />

          </CardItem>
        </Col>


      </>
    );
  }
};


export default withNavigation
  (ProductCard);

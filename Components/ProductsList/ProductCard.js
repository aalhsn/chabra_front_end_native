import React, { Component } from "react";
// NativeBase Components
import {
  Text,
  CardItem,
  Icon, Left, Button,

}
  from "native-base"; import moment from "moment";
import { withNavigation } from "react-navigation";
import { addItemToBasket } from "../../redux/actions";
import { connect } from "react-redux";
import { CardViewWithImage } from 'react-native-simple-card-view'
import GradientButton from 'react-native-gradient-buttons';
import { Col, Row, Grid } from "react-native-easy-grid";
import IconBadge from "react-native-icon-badge";


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

          <IconBadge
            MainElement={
              <CardItem
                button
                onPress={this.handlePress}
                style={styles.itemList}
              >


                <CardViewWithImage
                  width={400}
                  source={{ uri: this.props.product.img }}
                  content={`${this.props.product.price} KWD`
                  }
                  title={this.props.product.name}
                  titleFontSize={20}
                  titleFontFamily={"Avenir"}
                  imageWidth={400}
                  imageHeight={400}

                  buttonComponent={(this.props.product.stock !== 0) ? <AddToCart product={this.props.product} /> : <Button disabled><Text>                                Out of stock</Text></Button>}
                  contentFontFamily={"Futura"}
                  contentFontSize={13}
                  contentMargin={top = 50, bottom = 50, right = 50, left = 50}
                  roundedImage={false}
                  style={styles.transparent}
                />

              </CardItem>
            }
            BadgeElement={<Text style={{ color: "white" }}>{this.props.products.find(product => product.id === this.props.product.id) ? this.props.products.find(product => product.id === this.props.product.id).quantity : 0} in basket</Text>}
            IconBadgeStyle={{
              width: 100,
              height: 30,
              backgroundColor: "blue",
              top: 30,
              left: 280


            }}
            Hidden={(!this.props.products.find(product => product.id === this.props.product.id))}
          />
        </Col>


      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.basketReducer.items
  };
};
export default withNavigation(connect(
  mapStateToProps,
)(ProductCard))

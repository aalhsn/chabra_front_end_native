import React, { Component } from "react";
import { connect } from "react-redux";
import wallpaper from "../../assets/wall.png";

import {ImageBackground} from "react-native"
// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Content,
  View,
  Spinner,
  Item,
  Input,
  Card,
  CardItem, 
  Icon

} from "native-base";
//Components
import BasketBtn from "../BasketBtn";
//Actions
import {
  fetchProductDetail,
  resetProductDetail,
  addItemToBasket
} from "../../redux/actions";

//Styles
import styles from "./styles";
import GradientButton from 'react-native-gradient-buttons';


class ProductDetail extends Component {
  state = {
    quantity: 1
  };

  static navigationOptions = ({ navigation }) => {

    return {
      //Hey Anfal ask why this annoying title is not being displayed!!!!! 
      title: navigation.getParam("productName"),
      headerRight: <BasketBtn />,
      headerStyle: {
        backgroundColor: "#3dffcb",
        fontWeight: 'bold',
  
  
      }
    };
  };

  componentDidMount() {
    //If the product detail is already fetched before then just display otherwise fetch this means you will have to change your reducer to be an array
    // then find the product if it exists it updates a state in the reducer called currentProduct for example

    this.props.fetchProductDetail(this.props.navigation.getParam("productID"));
  }

  changeQuantity = number => {
    if (this.state.quantity >= 0) {
      const newQuantity = this.state.quantity + number;
      this.setState({ quantity: newQuantity });
    }
  };

  handleAddItem = () => {
    const newItem = {
      id: this.props.product.id,
      quantity: this.state.quantity,
      name: this.props.product.name,
      price: this.props.product.price
    };
    this.props.addToBasket(newItem);
  };

  render() {
    const product = this.props.product;

    let checkQuantity = () => {
      if (product.quantity > 0) {
        return (

              <GradientButton  blueMarine style={styles.mybutn} onPressAction={this.handleAddItem}>
              <Text style={styles.basketBtn}>
                <Icon
                  name="shopping-basket"
                  type="FontAwesome"
                  style={styles.icon2}
                /> Add to Basket
  
            </Text>
            </GradientButton>


        );
      } else {
        return <Text>Out of stock.</Text>;
      }
    };

    // RETURN
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
      
           <ImageBackground
        source={wallpaper}
        style={{ width: "100%", height: "100%" }}
      >
        <Content>
          <View style={styles.imgView}>
            <Thumbnail 
              style={styles.image}
              bordered
              source={{ uri: product.img }}
            />
          </View>



          <View style={styles.overlay} >
          <CardItem  >
            <Text style={styles.description}>{product.description}</Text>
            </CardItem>
            </View>

            <Text style={styles.price}> {product.price} KWD</Text>

            <View>


              <CardItem style={styles.myCard }>
                <Button rounded
                  onPress={() =>
                    this.state.quantity > 0 && this.changeQuantity(-1)
                  }
                >
                  <Text>-</Text>
                </Button>

                <Item rounded style={styles.inputField}>
                  <Input style={styles.order}>{this.state.quantity}</Input>
                  {/* <Input
                    type="text" value={this.state.quantity} /> */}
                </Item>
                <Button rounded onPress={() => this.changeQuantity(1)}>
                  <Text>+</Text>
                </Button>


              </CardItem>
            <View>{checkQuantity()}</View>
            </View>


        </Content>
        </ImageBackground>

      );
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.productDetailReducer.product,
    loading: state.productDetailReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductDetail: productID => dispatch(fetchProductDetail(productID)),
    resetProductDetail: () => dispatch(resetProductDetail()),
    addToBasket: item => dispatch(addItemToBasket(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);

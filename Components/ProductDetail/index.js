import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Content,
  View,
  Spinner,
  Item,
  Input
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

class ProductDetail extends Component {
  state = {
    quantity: 1
  };

  static navigationOptions = ({ navigation }) => {
    console.log("navigation.getParam(productName)", navigation.getParam("productName"))
    return {
      //Hey Anfal ask why this annoying title is not being displayed!!!!! 
      title: navigation.getParam("productID").name,
      headerRight: <BasketBtn />
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
      name: this.props.product.name,
      price: this.props.product.price,
      quantity: this.state.quantity
    };
    this.props.addToBasket(newItem);
  };

  render() {
    const product = this.props.product;

    let checkQuantity = () => {
      if (product.quantity > 0) {
        return (
          <Button full danger style={styles.order} onPress={this.handleAddItem}>
            <Text>Add</Text>
          </Button>
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
        <Content>
          <View style={styles.imgView}>
            <Thumbnail
              style={styles.image}
              bordered
              source={{ uri: product.img }}
            />
          </View>
          <View>
            <View style={styles.center}>
              <Text style={styles.name}>{product.name}</Text>
            </View>

            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}> {product.price} KWD</Text>
            <View>
              <Button onPress={() => this.changeQuantity(1)}>
                <Text>+</Text>
              </Button>
              <Item rounded>
                <Input>{this.state.quantity}</Input>
                {/* <Input type="text" value={this.state.quantity} /> */}
              </Item>
              <Button
                onPress={() =>
                  this.state.quantity > 0 && this.changeQuantity(-1)
                }
              >
                <Text>-</Text>
              </Button>
            </View>
            <View>{checkQuantity()}</View>
          </View>
        </Content>
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

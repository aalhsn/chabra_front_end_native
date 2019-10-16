import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Thumbnail, Text, Button, Content, View, Spinner, Item , Input} from "native-base";

import counter from "./counter"

import BasketBtn from "../BasketBtn"

import { fetchProductDetail, resetProductDetail, addItemToBasket} from "../../redux/actions";
import styles from "./styles";

class ProductDetail extends Component {

  state = {
    quantity :0
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("productName"),
      headerRight: <BasketBtn />
    };
  };

  
  componentDidMount() {
    this.props.fetchProductDetail(this.props.navigation.getParam("productID"))
  }

  componentWillUnmount() {
    //this.props.resetProductDetail();
  }

  changeQuantity = item => {
    if (this.state.quantity >= 0){
    const newQuantity = this.state.quantity + item;
    this.setState({ quantity: newQuantity });
    }
  };

  handleAddItem = () => {
    const newItem = {
      ...this.props.product.name,
      ...this.props.product.price,
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
          <View>
            <Thumbnail
              style={styles.image}
              bordered
              source={{ uri: product.img }}
            />
          </View>
          <View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}> {product.price} KWD</Text>
            <View >
        <Button
          onPress={() => this.changeQuantity(1)}
         
        >
          <Text>+</Text>
        </Button>
        <Item rounded>
            <Input>{this.state.quantity}</Input>
            {/* <Input type="text" value={this.state.quantity}/> */}
          </Item>
        <Button
          onPress={() => this.state.quantity > 0 && this.changeQuantity(-1)}
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

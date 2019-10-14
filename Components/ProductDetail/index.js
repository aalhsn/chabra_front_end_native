import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Thumbnail, Text, Button, Content, View } from "native-base";

import { fetchProductDetail, resetProductDetail } from "../../redux/actions";
import styles from "./styles";

class ProductDetail extends Component {
  componentDidMount() {
    const productID = this.props.navigation.getParam("productID");
    this.props.fetchProductDetail(productID);
  }

  componentWillUnmount() {
    //this.props.resetProductDetail();
  }

  render() {
    const product = this.props.product;

    handlePress = () => {
      alert(`${product.name} added to cart`);
    };

    checkQuantity = () => {
      if (product.quantity > 0) {
        return (
          <Button style={styles.order} onPress={() => this.handlePress()}>
            <Text>ORDER NOW</Text>
          </Button>
        );
      } else {
        return <Text className="bg-danger">Out of stock.</Text>;
      }
    };

    // RETURN
    if (this.props.loading) {
      return <Content />;
    } else {
      return (
        <Content className="col-lg-4 col-md-6 col-12 mx-5">
          <View className="image">
            <Thumbnail
              style={styles.image}
              bordered
              source={{ uri: product.img }}
            />
          </View>
          <View className="card-body border">
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}> {product.price} KWD</Text>
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
    resetProductDetail: () => dispatch(resetProductDetail())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);

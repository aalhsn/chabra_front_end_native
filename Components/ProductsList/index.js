import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components

import { List, Content, Spinner } from "native-base";
import { ImageBackground } from "react-native";

//Components
import ProductCard from "./ProductCard";
import BasketBtn from "../BasketBtn";

import wallpaper from "../../assets/wall.png";

// Style
import styles from "./styles";

class ProductsList extends Component {
  static navigationOptions = {
    title: "Chabra List",
    headerRight: <BasketBtn />,
    headerStyle: {
      backgroundColor: "#3dffcb",
      fontWeight: 'bold',


    }

  };

  render() {
    const products = this.props.products;
    let market;
    if (this.props.loading) {
      return <Spinner />;
    }
    if (products) {
      market = products.map((product, idx) => {
        return <ProductCard product={product} key={idx} />;
      });
    }
    return (
      <ImageBackground
        source={wallpaper}
        style={{ width: "100%", height: "100%" }}
      >
        <Content style={{ marginTop: 10 }}>
          <List>{market}</List>
        </Content>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products,
  loading: state.productsReducer.loading
});

export default connect(mapStateToProps)(ProductsList);

import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components

import { List, Content, Spinner, Text } from "native-base";
import { ImageBackground, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

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

  handleGridLayout = (marketArray) => {
    const gridItems = [];
    const rowItem = [];

    for (let i = 1; i < marketArray.length; i++) {
      if (i % 4 != 0) {
        let j = i - 1;
        rowItem.push(marketArray[j]);

      } else if (i % 4 == 0) {
        gridItems.push(<Row style={{ flex: 1 }}>  {rowItem} </Row>);
        rowItem.splice(0, rowItem.length);

      }

    }

    return gridItems
  }
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
          <Grid>
            <Col style={{ width: 200 }} >
              <Text>Hi ugliness</Text>
            </Col>
            <Col>
              <Text>Hello darkness my old friend</Text>

            </Col>
          </Grid>

          <Grid>
            <List>
              {/* <Row> */}
              {/* {this.handleGridLayout(market)} */}
              {market}
              {/* </Row> */}
            </List>
          </Grid>
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

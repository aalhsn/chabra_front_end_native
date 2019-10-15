import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { List, Content, Icon, Button, } from "native-base";

import { ImageBackground, View } from "react-native";

//Components
import ProductCard from "./ProductCard";

import wallpaper from "../../assets/wall.png"

// Style
import styles from "./styles";

const ProductsList = (props) => {
    const products = props.products
    let market;
    if (products) {
        market = products.map((product, idx) => { return <ProductCard product={product} key={idx} /> });
    }
    return (
        <ImageBackground source={wallpaper} style={{ width: '100%', height: '100%' }}>

            <Content style={{ marginTop: 10 }}>
                <List
                >{market}</List>
            </Content>
        </ImageBackground>

    );
};

ProductsList.navigationOptions = ({ navigation }) => {
    return {
        title: "Chabra",
        headerLeft: null,
        headerRight: (
            <Icon
                type="FontAwesome"
                name="shopping-cart"
                style={{ marginRight: 15, color: "black" }}
            ></Icon>
        )
    };


};
const mapStateToProps = state => ({
    products: state.productsReducer.products
});

export default connect(mapStateToProps)(ProductsList);
import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { List, Content, Icon, Button } from "native-base";

//Components
import ProductCard from "./ProductCard";



const ProductsList = (props) => {
    const products = props.products
    let market;
    if (products) {
        market = products.map((product, idx) => { return <ProductCard product={product} key={idx} /> });
    }
    return (
        <Content>
            <List>{market}</List>
        </Content>
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
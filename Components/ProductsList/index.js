import React, { Component } from "react";
import { connect } from "react-redux";


// NativeBase Components
import { List, Content, Icon, Button, Spinner } from "native-base";

//Components
import ProductCard from "./ProductCard";
import BasketBtn from "../BasketBtn"



class ProductsList extends Component{  
    static navigationOptions = {
        title: "Basket",
        headerRight: <BasketBtn />
      };
  
    render(){
    const products = this.props.products
    let market;
    if (this.props.loading) {
        return <Spinner />;
      }
    if (products) {
        market = products.map((product, idx) => { return <ProductCard product={product} key={idx} /> });
    }
    return (
        <Content>
            <List>{market}</List>
        </Content>
    );
    }
};




const mapStateToProps = state => ({
    products: state.productsReducer.products,
    loading: state.productsReducer.loading,
});

export default connect(mapStateToProps)(ProductsList);
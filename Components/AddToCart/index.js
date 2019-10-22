import React, { Component } from "react";
import { Text, Button, Icon } from 'native-base';
import { addItemToBasket } from "../../redux/actions";
import { connect } from "react-redux";

// Style
import styles from "./styles";

class AddToCart extends Component {

    handleAddItem = () => {
        const newItem = {
            id: this.props.product.id,
            name: this.props.product.name,
            price: this.props.product.price,
            quantity: 1,
        };
        this.props.addToBasket(newItem);
    };
    render() {
        return (

            <Button style={styles.mybutn}
                onPress={this.handleAddItem}>
                <Text style={styles.text1}> Add to <Icon
                    name="shopping-basket"
                    type="FontAwesome"
                    style={styles.icon2}
                /> </Text>
            </Button>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {

        addToBasket: item => dispatch(addItemToBasket(item))
    };
}
export default connect(
    null,
    mapDispatchToProps
)(AddToCart);

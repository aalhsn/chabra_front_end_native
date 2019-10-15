import React, { Component } from "react";
import { connect } from "react-redux";
import {
    View,
} from "react-native";

// NativeBase Components
import {
    Thumbnail,
    Text,
    Button,
    Left,
    Body,
    Right,
    List,
    ListItem,
    Content, Container, Header, Card, CardItem
} from "native-base";

// Style
import styles from "./styles";

//Dummy Data List
//import coffeeshops from "../CoffeeList/list";

class OrderDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Order Detail`,
            //   headerRight: <CartButton />
        };
    };



    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem style={styles.middleText} button onPress={() => alert("This is Card Header")}>
                            <Text style={styles.middleText}>OrderID: 009234789</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("This is Card Body")}>
                            <Body>
                                <Text style={styles.titleOfDetail}>
                                    Shipping Address:
                </Text>
                                <View
                                    style={styles.hairLine}
                                />
                                <Text style={styles.titleOfDetail}>
                                    Payment Method:
                </Text>

                                <View
                                    style={styles.hairLine}
                                />
                                <Text style={styles.titleOfDetail}>
                                    Total Price:
                </Text>

                                <View
                                    style={styles.hairLine}
                                />


                            </Body>
                        </CardItem>
                        <CardItem footer button onPress={() => alert("This is Card Footer")}>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        ) //end of return




        ///// HEY ANFAL FIX THE key of the order !!!
        // const { loading } = this.props.orderReducer;
        // if (loading) return <Content />;
        // const Order = this.props.navigation.getParam("OrderID");
        // return (
        //     <Content>
        //         <List>
        //             <ListItem style={styles.top}>
        //                 <Left>
        //                     <Text style={styles.text}>
        //                         OrderID: 009234789
        //                         {/* {Order.name + "\n"} */}
        //                         {/* <Text note>{Order.date}</Text> */}
        //                     </Text>
        //                     <Text style={styles.text}>
        //                         Shipping Address:
        //                             {/* { "\n" + Order.shipping_address} */}

        //                     </Text>




        //                 </Left>
        //                 <Body />
        //                 <Right>
        //                     {/* <Thumbnail bordered source={{ uri: Order.img }} /> */}
        //                 </Right>
        //             </ListItem>


        //         </List>
        //     </Content>
        // );
    }
}

const mapStateToProps = state => ({
    // orderReducer: state.orderReducer
    //coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(OrderDetail);

import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class BasketItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}> {item.name} </Text>
          <Text note style={{ marginLeft: 30 }}>
            {item.price}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "black", marginLeft: 60 }}>{item.quantity}</Text>
        </Body>
        <Button transparent>
          <Text>
            <Icon name="ios-trash" type="Ionicons" style={{ color: "#1a215c", fontSize: 32 }} />
          </Text>
        </Button>
      </ListItem>
    );
  }
}

export default BasketItem;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 300,
    width: 300
  },
  name: {
    fontSize: 20
  },
  description: {
    textDecorationLine: "underline"
  },
  price: {
    fontWeight: "bold",
    textDecorationLine: "none",
    //textAlign: "right",
    marginBottom: 5
  },
  order: {
    textAlign: "center",
    alignSelf: "center"
  }
});

export default styles;

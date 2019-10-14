import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    opacity: 1
  },

  text1: {
    color: "white",
    fontSize: 10,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 180,
    flexDirection: "row"
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row"
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 1
  },
  background: {
    width: null,
    flex: 1
  }
});
export default styles;
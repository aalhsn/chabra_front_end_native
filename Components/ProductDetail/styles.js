import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center"
  },
  inputField: {
    width: 80,
  },

  imgView: {
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    flex: 1,
    margin: 20,
    backgroundColor: "black",
    opacity: 0.6,
    borderRadius: 30,
  },

  image: {
    height: 200,
    width: 200,
    marginTop: 20,

  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",


  },
  myDetailCard: {
    margin: 20,
    borderRadius: 50,
    textAlign: "center",
    alignSelf: "center"
  },

  basketBtn: {
    fontSize: 20,
    color: "white",
    margin: 10,
   

  },

  basketBtnOutofStock: {
    fontSize: 20,
    marginLeft: 30,
   

  },
  description: {
    fontSize: 20,
    margin: 20

  },
  icon2: {
    color: 'white',
    height: 40,
    width: 40,

  },
  price: {
    fontWeight: "bold",
    fontSize: 20,

    textDecorationLine: "none",
    //textAlign: "right",
    marginLeft: 20,
    marginRight: 20,
  },
  order: {
    textAlign: "center",
    alignSelf: "center",
  
  },

  mybutn: {
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 100,
    width: 200,
    marginTop:15

  },
  myCard: {
    backgroundColor: "white",
    borderRadius: 100,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 20
  },

});

export default styles;

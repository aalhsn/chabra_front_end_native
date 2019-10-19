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
    checkoutStyle: {
        color: "white",
        fontSize: 20,

    },

    image: {
        height: 300,
        width: 300,

    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },

    name: {
        fontSize: 20,
        fontWeight: "bold",


    },
    description: {
        fontSize: 20,
        margin: 20

    },
    icon2: {
        color: 'white',
        height: 30,
        width: 30,
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
        alignSelf: "center"

    },

    roundedBtn: {
        borderRadius: 80,
        textAlign: "center",
        alignSelf: "center"
    }


});

export default styles;

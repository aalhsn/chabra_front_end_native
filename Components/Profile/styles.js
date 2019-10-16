import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    hairLine: {
        backgroundColor: '#cccccc',
        height: 2,
        marginBottom: 22,
        marginTop: 22,
        width: 340
    },
    text: {
        color: "black",
        fontSize: 15,
        marginLeft: 16,

        justifyContent: "center",
        alignItems: "center"
    },
    divider: {
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    top: {
        marginLeft: 0,
        backgroundColor: "#ffffcc"
    },

    titleOfDetail: {
        marginBottom: 22,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",

    },


    middleText: {
        marginTop: 12,
        marginBottom: 8,

        color: "#191b73",
        fontWeight: "bold",
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center',

    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    addIcon: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    item: {
        color: "white"
    }
});

export default styles;

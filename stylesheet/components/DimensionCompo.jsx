import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function DimensionCompo() {
    return (
        <View style={[styles.box]}>
            <Text style={[styles.text]}>Welcome!</Text>
        </View>
    )
}

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height


const styles = StyleSheet.create({
    box: {

        alignItem: 'center',
        height: windowHeight > 600 ? "60%" : "90%",
        width: windowWidth > 500 ? "70%": "80%",
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignContent: "center"
    },

    text: {
        fontSize: windowWidth > 500 ? 50 : 24,
        color: "white",
        textAlign: "center"
    }
})
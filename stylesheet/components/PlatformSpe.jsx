import { StyleSheet, Text, View,Platform } from "react-native";

export default function PlatformSpe(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 200,
        width : 200,
        backgroundColor : Platform.OS === "android" ? "midnightblue" : "lightgreen",
        justifyContent:"center",
        alignItems:"center"
    },
    title : {
        fontSize : 30,
        color : Platform.OS === "android" ? "white" : "#3e44e3"
    }
})
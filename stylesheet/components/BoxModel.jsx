import { View,Text, StyleSheet } from "react-native";

export default function BoxModel(){
    return (
        <View style={styles.container}>
            <View style={[styles.box,styles.lightBlueBox]}>
                <Text>Light Blue Box</Text>
            </View>
            <View style={[styles.box,styles.lightGreenBox]}>
                <Text>Light Green Box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box : {
        width : 150,
        height : 150,
        backgroundColor :"pink",
        padding : 10,
        borderRadius : 10,
        borderWidth : 3,
        borderColor : "white"
    },
    lightBlueBox : {
        backgroundColor : "lightblue"
    },
    lightGreenBox : {
        backgroundColor : "lightgreen"
    },
    container : {
        gap : 10 
    }
})
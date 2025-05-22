import { StyleSheet, Text, View } from "react-native";

export default function FlexLayout({children,style}){
    return (
        <View style={[styles.subContainer,style]}>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer : {
        height : 100,
        width : 100,
        borderRadius : 10,
        borderColor : "white",
        borderWidth : 2
    },
    title : {
        fontSize : 20,
        textAlign : "center",
        marginTop : 8,
        color : "white",
        fontWeight :"bold",
    }
})
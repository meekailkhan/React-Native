import { Pressable, Text, TouchableOpacity } from "react-native";

export default function CustomoButton({ onPress, title }) {
    return (
        <TouchableOpacity
            style={{backgroundColor:"midnightblue",paddingHorizontal:30,paddingVertical:10,borderRadius:10,boxShadow:"2px 3px 4px rgba(0,0,0,0.987)"}}
            activeOpacity={0.6}
            onPress={()=> console.log("you pressed on button")}
        >

            <Text style={{ color: "white", fontSize: 18 }}>{title}</Text>

        </TouchableOpacity>
    )
}
import { useState } from "react";
import { TextInput } from "react-native";

export default function TextInpuCompo(){
    const [text,setText] = useState("")
    return (
        <>
            <TextInput 
                style={{height:40,padding:10,borderBottomWidth:2,borderBottomColor:"white",color:"white"}}
                placeholder="Type Your Message"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                placeholderTextColor="midnightblue"

            />
        </>
    )
}
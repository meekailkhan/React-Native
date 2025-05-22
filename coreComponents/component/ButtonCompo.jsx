import { Button, Switch } from "react-native";
import { useState } from "react";

export default function ButtonCompo({title,disable,onPress,onLongPress,color}){
    const [isOn,setIsOn] = useState(false)
    return (
        <>
            <Button title={title} disabled={disable} onPress={onPress} onLongPress={onLongPress} color={color} />
            <Switch 
                trackColor={{false:"#767577",true : "#0097a7"}}
                thumbColor="#ffffff"
                onValueChange={()=> setIsOn(toggle => !toggle)}
                value={isOn}
            />
        </>
    )
}
import { StatusBar } from "react-native";
import { useState } from "react";
import ButtonCompo from "./ButtonCompo";

export default function StatusBarCompo(){
    const [isHidden,setIsHidden] = useState(false) 
    return (
        <>
            <StatusBar backgroundColor="midnightblue" barStyle={"light-content"} hidden={isHidden}/>
            <ButtonCompo title={isHidden ? "Show Status Bar" : "Hide Status Bar"} disable={false} onPress={()=> setIsHidden(!isHidden)} color="midnightblue" />
        </>
    )
}
import { useState } from "react";
import { ActivityIndicator, Button } from "react-native";

export default function ActivityIndiCompo({ size, color }) {
    const [loading,setLoading] = useState(true)
    return (
        <>
            <Button title={loading ? "Stop Loading" : "Start Loading"} onPress={() => setLoading(!loading)}/>
            <ActivityIndicator size={size} color={color} animating={loading}/>
        </>
    )
}
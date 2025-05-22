import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Signup() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    function handelSubmit(e){
        
    }

    return (
        <>

            <Text>Username</Text>
            <TextInput
                style={{ height: 40, color: "white", padding: 10, borderBottomColor: "white", borderBottomWidth: 2 }}
                placeholder="Username"
                onChangeText={e => setUserName(e)}
                defaultValue={username}
            />

            <Text>Email</Text>
            <TextInput
                style={{ height: 40, color: "white", padding: 10, borderBottomColor: "white", borderBottomWidth: 2 }}
                placeholder="Emai"
                onChangeText={e => setEmail(e)}
                defaultValue={email}
            />
            <Text>Password</Text>
            <TextInput 
                style={{height:40,color:"white",padding:10,borderBottomColor:"white",borderBottomWidth:2}}
                placeholder="Username"
                onChangeText={e => setPassword(e)}
                defaultValue={password}
            />
            <View>
                <Button title="submit" onPress={handelSubmit}/>
            </View>


        </>
    )
}
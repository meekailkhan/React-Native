import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react"
import axios from "axios";


function SignupScreen({ navigation }) {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handelSubmit() {
    
        try {
          const response = await axios.post('http://192.168.1.41:5000/api/signup', {
            name : username,
            email,
            password
          });
    
          console.log('Server response:', response.data);
          navigation.navigate("Home")
        } catch (error) {
          console.error('Error posting data:', error.response?.data || error.message);
        }
      }

    return (
        <View style={{ backgroundColor: "plum", paddingLeft:30,paddingRight:30, gap: 40 ,flex:1}}>
            <View >
                <Text>Username</Text>
                <TextInput
                    style={{ height: 40, color: "white", padding: 10, borderBottomColor: "white", borderBottomWidth: 2 }}
                    placeholder="Username"
                    onChangeText={e => setUserName(e)}
                    value={username}
                    // keyboardType="numeric"
                    

                />
            </View>

            <View>
                <Text>Email</Text>
                <TextInput
                    style={{ height: 40, color: "white", padding: 10, borderBottomColor: "white", borderBottomWidth: 2 }}
                    placeholder="Emai"
                    onChangeText={e => setEmail(e)}
                    value={email}
                    textContentType="email"

                />
            </View>
            <View>

                <Text>Password</Text>
                <TextInput
                    style={{ height: 40, color: "white", padding: 10, borderBottomColor: "white", borderBottomWidth: 2 }}
                    placeholder="Password"
                    onChangeText={e => setPassword(e)}
                    value={password}
                    textContentType="password"
                    secureTextEntry={true}
                    autoCorrect={false}
                />
            </View>
            <View >
                <Text>Message</Text>
                <TextInput
                    style={{ height: 40, color: "white", padding: 10, borderBottomColor: "white", borderBottomWidth: 2 }}
                    placeholder="Username"
                    
                    multiline
                    // keyboardType="numeric"
                    

                />
            </View>
            <View>
                <Button title="submit" onPress={handelSubmit} />
            </View>


        </View>
    )
}

export default SignupScreen

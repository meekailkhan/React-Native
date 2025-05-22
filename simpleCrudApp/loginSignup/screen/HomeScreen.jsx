import { View, Text, Button } from "react-native"
import {useState,useEffect} from "react"
import axios from "axios";

export default function HomeScreen({}) {
    const [users,setUsers] = useState([]);
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get("http://localhost:5000/api/data");
              setUsers(response.data); // Only set the data part
            } catch (err) {
              setError(err.message);
            } 
          };
      
          fetchData();
    },[])
    return (

        <View style={{ backgroundColor: "plum", flex: 1 ,padding:40}}>
            <View style={{flexDirection:"row", gap:10}}>
                <Text style={{borderBlockColor:"black",borderWidth:2}}>Name</Text>
                <Text style={{borderBlockColor:"black",borderWidth:2}}>Email</Text>
            </View>
            {users.map((user,key)=>(
                <View key={key} style={{flexDirection:"row",gap:10}} >
                    <Text style={{borderBlockColor:"white",borderWidth:2}}>{user.name}</Text>
                    <Text style={{borderBlockColor:"white",borderWidth:2}}>{user.email}</Text>
                </View>
            ))}
        </View>
    )
}
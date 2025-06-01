import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({route})=>(
        {
          tabBarIcon : ({color, size, focused}) =>{
            let iconName;
            if(route.name === "index"){
              iconName = focused ? "home" : "home-outline";
            } else if(route.name === "setting"){
              iconName = focused ? "settings" : "settings-outline";
            }else if( route.name === "product"){
              iconName = focused ? "cube" : "cube-outline";
            }
            return <Ionicons name={iconName as any} size={size} color={color}/>
          },
        }
      )}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="setting" options={{ title: "Settings" }} />
      <Tabs.Screen name="product" options={{
        title :"Product",
        headerShown : false
      }} />
    </Tabs>
  );
}

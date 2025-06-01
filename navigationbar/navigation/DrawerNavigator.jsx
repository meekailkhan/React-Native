import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown : true,
                drawerActiveBackgroundColor : "lightgreen",
                drawerHideStatusBarOnOpen:false,
                drawerPosition : "left",
                drawerType : "front",
                drawerStatusBarAnimation : "slide"
            }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="Setting" component={SettingScreen} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}
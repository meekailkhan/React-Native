import { SectionList,Text,View,StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DATA = [
    {
        title : "Main Dishes",
        data : ["pizza","Burger","Rissoto"]
    },
    {
        title : "Main Dishes",
        data : ["pizza","Burger","Rissoto"]
    },
    {
        title : "Sides",
        data : ["French Fries","Onion Rings","Fried Shrimps"]
    },
    {
        title : "Drinks",
        data : ["Water","Coke","Beer"]
    },
    {
        title : "Desserts",
        data : ["Chees Cake","Ice Cream"]
    }
]

export default function SectionListCompo(){
    <SafeAreaProvider>
        <SafeAreaView style={style.container}>
            <SectionList 
                sections={DATA}
                keyExtractor={(item,index)=> item + index}
                renderItem={({item})=>(
                    <View>
                        <Text></Text>
                    </View>
                )}
                renderSectionHeader={({section : {title}})=>(
                    <Text>{title}</Text>
                )}
            />
        </SafeAreaView>
    </SafeAreaProvider>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });
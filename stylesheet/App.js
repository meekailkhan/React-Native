// import { StatusBar } from 'expo-status-bar';
import { ScrollView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import BoxModel from './components/BoxModel';
import FlexLayout from './components/FlexLayout';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FormCompo from './components/FormCom';
import DimensionCompo from './components/DimensionCompo';
import PlatformSpe from './components/PlatformSpe';
import CustomoButton from './components/customButton/CustomoButton';

export default function App() {
  return (
    // <SafeAreaProvider style={{flex:1,backgroundColor:"plum"}}>
    //   <SafeAreaView>
    //     <StatusBar backgroundColor="midnightblue"/>
    //     <ScrollView style={{ backgroundColor: "plum" }}>
    //         <DimensionCompo />
    //       <View style={[styles.container, styles.box]}>

    //         <FlexLayout style={{ backgroundColor: "#3e3e3e", left : 50,top:55 ,zIndex:1}}>Box 1</FlexLayout>
    //         <FlexLayout style={{ backgroundColor: "#3e5f3e", }}>Box 2</FlexLayout>
    //         <FlexLayout style={{ backgroundColor: "#3e57ae", }}>Box 3</FlexLayout>
    //         <FlexLayout style={{ backgroundColor: "#4b4a5a", position:"absolute",left:100,top:110,zIndex:2 }}>Box 4</FlexLayout>
    //         <FlexLayout style={{ backgroundColor: "#1aa53e", position:"absolute",left:50,top:160,  }}>Box 5</FlexLayout>
    //         <FlexLayout style={{ backgroundColor: "#115a3e", }}>Box 6</FlexLayout>
    //         <FlexLayout style={{ backgroundColor: "#31aa21", }}>Box 7</FlexLayout>
    //       </View>

    //     </ScrollView>
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <View style={styles.container}>
      {/* <DimensionCompo /> */}
      {/* <PlatformSpe /> */}
      <CustomoButton title="press on me" onPress={()=> console.log("you pressed on button")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "column",
    flex: 1,
    backgroundColor: 'plum',
    // marginTop: 20,
    marginBottom: 30,
    justifyContent :"center",
    alignItems : "center"
  },
  box: {
    backgroundColor: "plum"
  }
});

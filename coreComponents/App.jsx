import { View } from "react-native";
import ViewText from "./component/ViewText";
import ImageCompo from "./component/ImagesN";
import ScrollViewCompo from "./component/ScrollViewCompo";
import ButtonCompo from "./component/ButtonCompo";
import ModelCompo from "./component/ModalComp";
import StatusBarCompo from "./component/StatusBarCompo";
import ActivityIndiCompo from "./component/ActivityIndiCompo";
import AlertCompo from "./component/AlertCompo";
import TextInpuCompo from "./component/TextInpuCompo";
import ListCompo from "./component/ListCompo";
import SectionListCompo from "./component/SectionCompo";

export default function App() {
  console.log("this is work")
  
  return (
    <View style={{backgroundColor:"plum",flex:1,padding:45,gap:20}}>
      
      <ViewText />
      {/* <ImageCompo /> */}
      {/* <ScrollViewCompo /> */}
      {/* <ButtonCompo title="Press" disable={false} onPress={()=>  console.log(`you press on button`)}/> */}
      {/* <ButtonCompo title="Press" disable={false} onPress={() => console.log(`you pressed on button`)} color={"midnightblue"}/> */}
      {/* <ModelCompo /> */}
      {/* <StatusBarCompo /> */}
      {/* <ActivityIndiCompo size="large" color="midnightblue"/> */}
      {/* <AlertCompo /> */}
      {/* <TextInpuCompo /> */}
      {/* <ListCompo /> */}
      {/* <SectionListCompo /> */}
    </View> 
  )
}


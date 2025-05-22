import { View, Text } from "react-native";

export default function ViewText() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 30, gap: 50 }}>
      <View style={{ flex: .33, backgroundColor: "lightblue" }}>
        <Text style={{ textAlign: "center" }}>Hello world</Text>
      </View>
      <View style={{ flex: .33, backgroundColor: "lightgreen" }}>
        <Text style={{ textAlign: "center" }}>Hello world</Text>
      </View>
      <View style={{ flex: .33, backgroundColor: "lightyellow" }}>
        <Text style={{ textAlign: "center" }}>Hello world</Text>
      </View>
    </View>
  )
}
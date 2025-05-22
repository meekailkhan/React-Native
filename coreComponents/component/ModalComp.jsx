import { Button, Modal, View,Text } from "react-native";
import { useState } from "react";

export default function ModelCompo() {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <Button title="Press" color="midnightblue" onPress={() => setIsVisible(true)} />
            <Modal visible={isVisible} onRequestClose={()=> setIsVisible(false)} animationType="slide" presentationStyle="pageSheet">
                <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 ,gap:20}}>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, velit sunt! Neque deleniti voluptatibus eum rem veritatis, eaque esse perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nemo reprehenderit itaque eos libero nam illo provident rem nostrum eius.</Text>
                    <Button title="Close" color="midnightblue" onPress={() => setIsVisible(false)} />   
                </View>
            </Modal>
        </>
    )
}
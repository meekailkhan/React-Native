import { Image, ImageBackground } from "react-native";
const logoImg = require('../assets/adaptive-icon.png')

export default function ImageCompo() {
    return (
        <>
            {/* <Image
                source={logoImg}
                style={{ width: 300, height: 300 }}
            /> */}
            {/* <Image 
                source={{uri : "https://picsum.photos/300"}}
                style={{ width: 300, height: 300 }}

            /> */}
            <ImageBackground
                source={logoImg}
                style={{flex:1}}
            >
                <Image
                    source={{ uri: "https://picsum.photos/300" }}
                    style={{ width: 300, height: 300 }}

                />
            </ImageBackground>
        </>
    )
}
import { Image, View, Text, ScrollView } from "react-native";
import { logoImg } from "../assets/adaptive-icon.png"

export default function ScrollViewCompo() {
    return (
        <>
            <ScrollView >
                <Image
                    source={{ uri: "https://picsum.photos/300" }}
                    style={{ width: 300, height: 300 }}

                />
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae repellendus id hic tempora sapiente. Tempore totam expedita voluptate illum aperiam doloremque eligendi fuga soluta, dolor cum ab eaque sed reprehenderit itaque laudantium ex? Laboriosam dicta totam, ab adipisci corrupti facere, hic commodi tempora ducimus repudiandae alias, laudantium illum cum. Quae veritatis, ipsa eum dolorem laborum quasi? Reiciendis, illum. In Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore quia molestias dolorum ullam, minima recusandae nostrum fugiat dolores provident, perferendis, quam iste commodi minus molestiae non sed fugit inventore itaque. Tenetur perferendis eos dolorem, vitae nostrum rem iure labore magnam? Illum ipsum ad aliquid hic sed soluta esse tempora nihil ipsam. Modi suscipit minus eius repellendus, facere libero nihil, optio excepturi nam ipsam sunt? Neque debitis provident dolor, repellendus aut non sunt sed impedit laboriosam iure ab cupiditate perferendis expedita amet explicabo, dolorum molestias optio hic repudiandae. Cum laudantium distinctio perferendis explicabo veniam voluptatem esse rerum placeat dolores vitae!
                </Text>
                <Image
                    source={{ uri: "https://picsum.photos/300" }}
                    style={{ width: 300, height: 300 }}

                />
            </ScrollView>

        </>
    )
}
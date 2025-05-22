import { Alert, Button } from "react-native";

export default function AlertCompo() {
    return (
        <>
            <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />
            {/* <Button title="Alert 2" onPress={() => Alert.alert("Invalid Credentials" ,"Invalid Password")}/> */}
            <Button title="Alert 3" onPress={() => Alert.alert("Invalid Data","Do you Want to Revert",[
                {
                    text : "Cancel",
                    onPress : () => Alert.alert("this can be harm your data")
                },
                {
                    text : "Revert",
                    onPress : () => console.log("revert data successfully")
                }
            ])}/>
        </>
    )
}
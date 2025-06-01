import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useLocalSearchParams,useNavigation } from 'expo-router'

export default function () {
    const {id} = useLocalSearchParams()
    const navigation = useNavigation()
    
    useEffect(()=>{
        navigation.setOptions({
            title : `Product ${id}`
        })
    },[id])

  return (
    <View style={styles.container}>
      <Text>this is product with {id} id</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems :"center"
    }
})
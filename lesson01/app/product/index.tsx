import { Link } from 'expo-router'
import React from 'react'
import { View ,Text,StyleSheet } from 'react-native'

function Products() {
  return (
    <View style={styles.container}>
        <Text>This is Product page page </Text>
        <Link href="/product/1"> Product 1</Link>
        <Link href="/product/2"> Product 2</Link>
        <Link href="/product/3"> Product 3</Link>
        <Link href="/product/4"> Product 4</Link>
        <Link href="/product/5"> Product 5</Link>


    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent :"center",
    alignItems :"center"
  }
})

export default Products

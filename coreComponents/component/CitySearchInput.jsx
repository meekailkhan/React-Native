import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'

export default function CitySearchInput() {
    const [city,setCity] = useState(null)
    useEffect(()=>{
        console.log(city)
    },[city])
    return (
        <View>
            <GooglePlacesAutocomplete
                placeholder="Enter city"
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // data.description => "Jodhpur, Rajasthan, India"
                    const cityName = data?.description || '';
                    setCity(cityName)
                }}
                query={{
                    key: 'AIzaSyC0_DjC_viPkfBRyFa42UujOgM3eygxClM', 
                    language: 'en',
                    types: '(cities)',
                }}
                styles={{
                    textInput: styles.input,
                    listView: styles.listView,
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        height: 45,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    listView: {
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 100,
        elevation: 10,
    },
})
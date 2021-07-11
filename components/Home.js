import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

Feather.loadFont()

export default function Home() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.header_wrapper}>
                    <Image source={require("../assets/imgs/profile.png")} style={styles.profileImage}/>
                <Feather name="menu" size={24} color={"#313234"}/>
                </View>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header_wrapper:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius: 40,
    }
})
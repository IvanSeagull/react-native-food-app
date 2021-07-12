import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

import colors from "../assets/colors/colors"

Feather.loadFont()
MaterialCommunityIcons.loadFont()


export default function Home() {

    const renderCategoryItem = ({item}) => {
        return (
            <View style={[styles.categoryItemWrapper, {
                backgroundColor: item.selected ? "#f5ca48" : "#fff",
                marginLeft: item.id == 1 ? 20 : 0
                }]}>
                <Image style={styles.categoryItemImage} source={item.image}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? "#fff" : "#F26C68"
                }]}>
                    <Feather style={styles.categorySelectIcon} name="chevron-right" size={8} color={item.selected ? "#000" : "#fff"}/>
                </View>
            </View>
        )
    }

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>

        
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.header_wrapper}>
                    <Image source={require("../assets/imgs/profile.png")} style={styles.profileImage}/>
                <Feather name="menu" size={24} color={"#313234"}/>
                </View>
            </SafeAreaView>

            {/* Title */}
            <View style={styles.titles_wrapper}>
                <Text style={styles.titles_subtitle}>Food</Text>
                <Text style={styles.titles_title}>Delivery</Text>
            </View>


            {/* Search */}
            <View style={styles.search_wrapper}>
                <Feather name="search" size={16} color={"#313234"} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>

            {/* Categories */}
            <View style={styles.categories_wrapper}>
                <Text style={styles.categories_title}>Categories</Text>
                <View style={styles.categories_list_wrapper}>
                    <FlatList
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    
                    >

                    </FlatList>
                </View>
            </View>

            {/* Popular */}
            <View style={styles.popular_wrapper}>
                <Text style={styles.popular_title}>Popular</Text>
                {
                    popularData.map((item)=> {
                        return (
                        <View style={[styles.popularCard_wrapper, {marginTop: item.id == 1 ? 10: 20}]}>
                            <View>
                                <View>
                                    <View style={styles.popularTop_wrapper}>
                                        <MaterialCommunityIcons name="crown" size={12} color={colors.primary}/>
                                        <Text style={styles.popularTop_text}>Top of the week</Text>
                                    </View>
                                    <View style={styles.popularTitlesWrapper}>
                                        <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                        <Text style={styles.popularTitlesWeight}>Weight: {item.weight}</Text>
                                    </View>
                                </View>
                                <View style={styles.popularCard_bottom}>
                                    <View style={styles.addPizzaButton}>
                                        <Feather name="plus" size={10} color={colors.textDark}/>
                                    </View>
                                    <View style={styles.rating_wrapper}>
                                        <MaterialCommunityIcons name="star" size={10} color={colors.textDark}/>
                                        <Text style={styles.rating_text}>{item.rating}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.popularCard_right}>
                                <Image style={styles.popularCard_image} source={item.image}/>
                            </View>
                        </View>
                        )
                    })}
            </View>
        </View>
        </ScrollView>
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
    },
    titles_wrapper:{
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titles_subtitle:{
        // fontFamily:"Mo"
        fontSize: 16,
        color: "#313234"
    },
    titles_title:{
        marginTop: 5,
        fontSize: 32,
        fontWeight: "bold",
        color: "#313234"
    },
    search_wrapper:{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: "#CDCDCD",
        borderBottomWidth: 2,
    },
    searchText:{
        color: "#CDCDCD",
        fontSize: 14,
        marginBottom: 5,
    },
    categories_wrapper:{
        marginTop: 30,
    },
    categories_title:{
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 20,
    },
    categories_list_wrapper:{
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        marginRight: 20,
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,

    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 24,
        alignSelf: "center",
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign: "center",
        fontSize:14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: "center"
    },
    popular_wrapper:{
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    popular_title:{
        fontSize: 16,
        fontWeight: "bold"
    },
    popularCard_wrapper:{
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTop_wrapper:{
        flexDirection: "row",
        alignItems: "center",
    },
    popularTop_text:{
        marginLeft: 10,
        fontSize: 14,
    },
    popularTitlesWrapper:{
        marginTop: 20,
    },
    popularTitlesTitle:{
        fontWeight: "600",
        fontSize: 14,
        color: colors.textDark
    },
    popularTitlesWeight:{
        fontWeight: "400",
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5
    },
    popularCard_bottom:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton:{
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    rating_wrapper:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
    },
    rating_text:{
        fontSize: 12,
        fontWeight: "500",
        color: colors.textDark,
        marginLeft: 5,
    },
    popularCard_right:{
        marginLeft: 40,
    },
    popularCard_image:{
        width: 210,
        height: 125,
        resizeMode: "contain",
    },
})
import React from "react";
import PropTypes from "prop-types";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

//========================================
// 카테고리 목록 화면을 관리
//========================================
const CategoriesScreen = ({ navigation }) => {
    // navigation을 props로 받음

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate("음식 개요", {
                categoryId: itemData.item.id, // 카테고리 ID
                categoryTitle: itemData.item.title, // 카테고리 제목
            }); // navigation을 이용하여 MealsOverviewScreen으로 이동
        };

        return (
            <CategoryGridTile
                title={itemData.item.title} // title 속성을 props로 전달
                color={itemData.item.color} // color 속성을 props로 전달
                onPress={pressHandler} // pressHandler 함수를 onPress로 전달
                navigation={navigation} // navigation을 props로 전달
            />
        );
    };

    return (
        <View style={styles.container}>
        <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                numColumns={2} // 컬럼 수를 2로 설정
            />
        </View>
    );
};

CategoriesScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // 전체 공간 사용
        backgroundColor: "#866754", // 배경색 설정
    },
});


export default CategoriesScreen;


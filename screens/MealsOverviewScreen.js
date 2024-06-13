import { useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({route, navigation}) => {  // props로 route를 받아서 사용해도 가능하고 useRoute 훅을 사용해도 됨

  //const route = useRoute();  // useRoute 훅을 사용하여 현재 라우트 정보를 가져옴
  const categoryId = route.params.categoryId;  // route.params를 이용하여 CategoriesScreen으로 부터 categoryId를 가져옴
  
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0; // categoryId와 일치하는 mealItem만 필터링
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;  // categoryId와 일치하는 카테고리의 title을 가져옴
    navigation.setOptions({
      title: categoryTitle,
    });  // 현재 화면의 타이틀을 categoryTitle로 설정
  }, [categoryId, navigation]);  
 

  const renderMealItem = (itemData) => {

    // 전달에 사용할 props를 정의
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };

    return (
      <MealItem {...mealItemProps} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = () => {  // props로 route를 받아서 사용해도 가능하고 useRoute 훅을 사용해도 됨

  const route = useRoute();  // useRoute 훅을 사용하여 현재 라우트 정보를 가져옴
  const categoryId = route.params.categoryId;  // route.params를 이용하여 CategoriesScreen으로 부터 categoryId를 가져옴

  return (
    <View style={styles.container}>
      <Text>음식 개요 화면 - {categoryId}</Text>
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
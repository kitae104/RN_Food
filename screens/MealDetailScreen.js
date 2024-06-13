import React from 'react';
import { Text } from 'react-native';

const MealDetailScreen = ({route}) => {

  const mealId = route.params.mealId;  // route.params를 이용하여 MealItem으로 부터 mealId를 가져옴

  return (
    <Text>음식 상세 페이지 ({mealId}) </Text>
  );
};

export default MealDetailScreen;
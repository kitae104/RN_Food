import React from "react";
import { Image, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId; // route.params를 이용하여 MealItem으로 부터 mealId를 가져옴

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); // mealId와 일치하는 meal을 찾음

  return (
    <View>
      <Image source={{ url: selectedMeal.imageUrl }} />
      <Text>{mealId}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        conplexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
};

export default MealDetailScreen;

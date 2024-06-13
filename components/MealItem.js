import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {

  const navigation = useNavigation(); // useNavigation 훅을 사용하여 navigation 객체를 가져옴

  const selectMealHandler = () =>{
    navigation.navigate("음식 상세", {
      mealId: id,
    }); // navigation 객체를 이용하여 다음 화면으로 이동
  }



  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,          
        ]}
        onPress={selectMealHandler}


      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", // 자식 컴포넌트가 부모 컴포넌트를 벗어나는 부분을 숨김
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black", // 그림자 색을 검정색으로 설정
    shadowOpacity: 0.25, // 그림자 투명도를 25%로 설정
    shadowOffset: { width: 0, height: 2 }, // 그림자 위치를 설정
    shadowRadius: 8, // 그림자의 반경을 8px로 설정
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

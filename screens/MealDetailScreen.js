import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

/**
 * MealDetailScreen
 * 설명: 선택된 식사 항목의 상세 정보를 렌더링합니다.
 *
 * Route params:
 *  - mealId: 상세 화면에서 보여줄 식사 항목의 고유 ID
 *
 * 동작:
 *  - 전달받은 mealId로 더미 데이터(MEALS)에서 해당 식사를 찾습니다.
 *  - 화면 헤더에 액션(즐겨찾기 아이콘)을 추가합니다(useLayoutEffect 사용).
 */
const MealDetailScreen = ({ route, navigation }) => {
    // route.params에서 전달된 mealId 추출
    const mealId = route.params.mealId;

    // MEALS 배열에서 mealId와 일치하는 항목을 찾음
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    // 헤더 아이콘이 눌렸을 때 동작 (현재는 콘솔 로그만 출력)
    const headerButtonPressHandler = () => {
        console.log("Header button pressed");
    };

    // 레이아웃 효과를 사용해 네비게이션 옵션(헤더 우측 버튼)을 설정
    // useLayoutEffect를 쓰면 화면 레이아웃이 그려지기 전에 헤더 옵션이 적용됩니다.
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon="star"
                        color="white"
                        onPress={headerButtonPressHandler}
                    />
                );
            },
        });
    }, [navigation, headerButtonPressHandler]);

    return (
        // 세부 내용 전체를 스크롤 가능하게 감쌈
        <ScrollView style={styles.rootContainer}>
            {/* 대표 이미지 */}
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />

            {/* 제목: 현재는 mealId를 표시하지만 필요하면 selectedMeal.title 등으로 교체 가능 */}
            <Text style={styles.title}>{selectedMeal.title}</Text>

            {/* 시간/난이도/가격 정보를 표시하는 재사용 가능한 컴포넌트 */}
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />

            {/* 재료와 조리 단계를 중앙 정렬된 컨테이너에 표시 */}
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>재료</Subtitle>
                    <List data={selectedMeal.ingredients} />

                    <Subtitle>조리 단계</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

MealDetailScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            mealId: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
        setOptions: PropTypes.func.isRequired,
    }).isRequired,
};

export default MealDetailScreen;

// 스타일 정의
const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32, // 화면 아래 여백
    },
    image: {
        width: "100%", // 화면 너비에 맞춤
        height: 350, // 고정 높이
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white", // 타이틀 색상
    },
    detailText: {
        color: "white", // MealDetails에 전달되는 텍스트 색상
    },
    listOuterContainer: {
        alignItems: "center", // 내부 컨텐츠를 가로 중앙 정렬
    },
    listContainer: {
        width: "80%", // 컨텐츠 가로 폭 제한
    },
});

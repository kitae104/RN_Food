/*
[코드 스타일 요약]
- 파일 유형: React Native 화면 컴포넌트(함수형).
- 컴포넌트 명명: PascalCase (MealsOverviewScreen).
- 변수/함수 명명: camelCase (categoryId, displayedMeals, renderMealItem).
- 사이드 이펙트: useLayoutEffect 훅으로 네비게이션 옵션을 설정함.
- 타입 검사: PropTypes로 props 형태를 명시함.
*/

import PropTypes from "prop-types";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

/**
 * MealsOverviewScreen 컴포넌트
 * 설명: 선택된 카테고리에 속한 식사 항목들을 목록으로 보여주는 화면입니다.
 *
 * 파라미터:
 *  - route: 네비게이션 라우트 객체 (route.params.categoryId 사용).
 *  - navigation: 네비게이션 객체 (헤더 타이틀 설정 등에 사용).
 *
 * 반환: React 요소 (FlatList로 렌더된 식사 목록)
 */
const MealsOverviewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId; // 선택된 카테고리의 id

    // MEALS에서 현재 카테고리에 속한 항목들만 필터링
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.includes(categoryId);  // 카테고리 포함 여부 확인
    });

    // 레이아웃 단계에서 네비게이션 헤더 타이틀을 카테고리 이름으로 설정
    useLayoutEffect(() => {
        const category = CATEGORIES.find((c) => c.id === categoryId); // 해당 카테고리 객체 조회
        const categoryTitle = category ? category.title : "Meals"; // 안전한 기본값 처리
        
        // 헤더 타이틀 설정(새로운 타이틀로 업데이트)
        navigation.setOptions({ title: categoryTitle }); 
    }, [categoryId, navigation]);

    /**
     * renderMealItem
     * 설명: FlatList의 각 항목을 렌더링하는 콜백.
     * 파라미터: itemData (FlatList가 전달하는 항목 데이터)
     * 반환: MealItem 컴포넌트
     */
    const renderMealItem = (itemData) => {
        // MealItem에 전달할 props를 명시적으로 구성
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
        };

        return <MealItem {...mealItemProps} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals} // 렌더링할 데이터 배열
                keyExtractor={(item) => item.id} // 아이템 고유 키 추출
                renderItem={renderMealItem} // 항목 렌더링 함수
            />
        </View>
    );
};

// PropTypes: 전달되는 props의 구조를 명시하여 런타임 검증 제공
MealsOverviewScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            categoryId: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    navigation: PropTypes.object.isRequired,
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, // 전체 공간 사용
        padding: 16, // 내부 여백
    },
});

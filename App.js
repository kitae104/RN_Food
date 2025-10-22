/*
[코드 스타일 요약]
- 파일 유형: Expo / React Native 진입점(App 컴포넌트).
- 컴포넌트 명명: PascalCase (App).
- 훅/상태: 로컬 상태나 훅을 사용하지 않으며 네비게이션 구성만 수행.
- 네비게이션: @react-navigation/native의 Native Stack Navigator 사용.
- 스타일: StyleSheet.create로 정적 스타일 정의.
- 주석 규칙: 컴포넌트 선언 바로 위에 설명 주석(한글) 배치, 복잡한 라인에는 인라인 주석 사용.
*/

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator(); // 네이티브 스택 네비게이터 생성

/**
 * App 컴포넌트 (앱 진입점)
 * 설명: 앱의 네비게이션 구조(Stack Navigator)를 정의하고 공통 화면 옵션을 설정합니다.
 *
 * 반환: React 요소 (StatusBar와 NavigationContainer 포함)
 */
export default function App() {
    return (
        <>
            <StatusBar style="light" />
            {/* 상태 표시줄을 라이트 스타일로 설정 */}
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#351401", // 헤더 배경색
                        },
                        headerTintColor: "white", // 헤더 텍스트 및 아이콘 색상
                        contentStyle: {
                            backgroundColor: "#3f2f25", // 화면 배경색
                        },
                    }}
                >
                    <Stack.Screen
                        name="MealsCategories"
                        component={CategoriesScreen}
                        options={{
                            title: "전체 음식 카테고리", // 스크린 타이틀 (한국어)
                        }}
                    />
                    <Stack.Screen
                        name="음식 개요"
                        component={MealsOverviewScreen}
                        // MealsOverviewScreen 내부에서 동적으로 헤더 타이틀을 설정함(useLayoutEffect 사용)
                    />
                    <Stack.Screen
                        name="음식 상세"
                        component={MealDetailScreen}
                        // 필요 시 options로 headerRight 등의 커스텀 구성 가능
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 가능한 모든 공간 사용
        backgroundColor: "#fff", // 기본 배경색 (현재 네비게이션 contentStyle이 실제 화면 배경을 제어)
        alignItems: "center", // 수평 정렬 (사용하지 않을 수 있음)
        justifyContent: "center", // 수직 정렬 (사용하지 않을 수 있음)
    },
});

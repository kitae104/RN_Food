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
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import FavoritesScreen from "./screens/FavoriesScreen";

const Stack = createNativeStackNavigator(); // 네이티브 스택 네비게이터 생성
const Drawer = createDrawerNavigator(); // 드로어 네비게이터 생성

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#341d07",
                },
                headerTintColor: "white",
                contentStyle: { 
                    backgroundColor: "#866754" 
                },
                drawerContentStyle: { 
                    backgroundColor: "#341d07" 
                },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "#351401",
                drawerActiveBackgroundColor: "#e4baa1",
            }}
        >
            <Drawer.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                options={{
                    title: "전체 음식 카테고리",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="즐겨찾기" 
                component={FavoritesScreen} 
                options={{
                    title: "즐겨찾기",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

/**
 * App 컴포넌트 (앱 진입점)
 * 설명: 앱의 네비게이션 구조(Stack Navigator)를 정의하고 공통 화면 옵션을 설정합니다.
 *
 * 반환: React 요소 (StatusBar와 NavigationContainer 포함)
 */
export default function App() {
    return (
        <>
            <StatusBar
                style="light"
                // backgroundColor="#341d07"
                // translucent={false}
            />
            {/* 상태 표시줄을 라이트 스타일로 설정 */}
            <NavigationContainer>
                <Stack.Navigator
                    // 공통 부분 설정
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#341d07", // 헤더 배경색
                        },
                        headerTintColor: "white", // 헤더 텍스트 및 아이콘 색상
                        contentStyle: {
                            backgroundColor: "#866754", // 화면 배경색
                        },
                    }}
                >
                    <Stack.Screen
                        name="Drawer"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false, // 드로어 네비게이터에서는 헤더 숨김
                        }}
                    />
                    <Stack.Screen
                        name="음식 개요"
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name="음식 상세"
                        component={MealDetailScreen}
                        options={{
                            title: '음식 상세',
                    }}
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

/*
[코드 스타일 요약]
- 구성: React Native 함수형 컴포넌트 사용.
- 컴포넌트 명명: PascalCase (MealItem).
- 변수/함수 명명: camelCase (selectMealHandler, mealItemProps).
- 네비게이션: useNavigation 훅 사용하여 화면 이동 처리.
- 스타일: StyleSheet.create 사용, 플랫폼별 처리(Platform.OS) 포함.
*/

import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import MealDetails from "./MealDetails";

/**
 * MealItem 컴포넌트
 * 설명: 단일 식사 항목을 카드 형태로 렌더링하고, 터치 시 상세 화면으로 네비게이션합니다.
 *
 * props:
 *  - id: 식사 고유 id
 *  - title: 식사 제목(문자열)
 *  - imageUrl: 이미지 URI
 *  - duration: 소요 시간(분, 숫자)
 *  - complexity: 난이도(문자열)
 *  - affordability: 가격대(문자열)
 *
 * 반환: React 요소 (식사 카드)
 */
const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) => {
    const navigation = useNavigation(); // 네비게이션 훅으로 navigation 객체 획득

    // 항목 선택 시 상세 화면으로 이동하는 핸들러
    const selectMealHandler = () => {
        navigation.navigate("음식 상세", {
            mealId: id,
        }); // 상세 화면으로 mealId 전달
    };

    const browserUserAgent = 'Mozilla/5.0'; // 이미지 로딩 시 User-Agent 헤더 설정

    return (
        <View style={styles.mealItem}>
            <TouchableOpacity
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]} // iOS는 opacity로 피드백 처리
                onPress={selectMealHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{
                                uri: imageUrl,
                                headers: {
                                    "User-Agent": browserUserAgent,
                                },
                            }} // 이미지 URI
                            style={styles.image} // 이미지 스타일 적용
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration} // 소요 시간
                        complexity={complexity} // 난이도
                        affordability={affordability} // 가격대
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

MealItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    complexity: PropTypes.string.isRequired,
    affordability: PropTypes.string.isRequired,
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible", // Android에서 그림자 + 터치 래핑 처리
        backgroundColor: "white",
        elevation: 4, // Android 그림자
        shadowColor: "black", // iOS 그림자 색
        shadowOpacity: 0.25, // iOS 그림자 투명도
        shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
        shadowRadius: 8, // iOS 그림자 반경
    },
    buttonPressed: {
        opacity: 0.5, // iOS에서 터치 시 시각적 피드백
    },
    innerContainer: {
        borderRadius: 8, // 모서리를 둥글게 처리
        overflow: "hidden", // 내부 요소가 둥근 모서리를 넘지 않도록 처리
    },
    image: {
        width: "100%", // 가로 전체 사용
        height: 200, // 고정 높이
    },
    title: {
        fontWeight: "bold", // 제목 글씨 두껍게
        textAlign: "center", // 제목 중앙 정렬
        fontSize: 18, // 제목 글씨 크기
        margin: 8, // 제목 주변 여백
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

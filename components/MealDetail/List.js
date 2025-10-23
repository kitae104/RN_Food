import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * List 컴포넌트
 * 설명: 문자열 배열(data)을 받아 각 항목을 스타일된 박스 형태로 렌더링합니다.
 * 주로 재료(ingredients)나 조리 단계(steps) 같은 리스트 항목 표시용으로 사용됩니다.
 *
 * Props:
 *  - data: 문자열 값들의 배열 (예: ['1 cup sugar', '2 eggs'])
 */
const List = ({ data }) => {
    // data 배열의 각 요소를 map으로 순회하며 뷰를 생성합니다.
    // key로는 현재 문자열(dataPoint)을 사용합니다(간단한 더미/샘플 데이터에서 안전).
    return data.map((dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
            {/* 항목 텍스트: 중앙 정렬된 강조 텍스트 */}
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ));
};

export default List;

// 스타일 정의
const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6, // 둥근 모서리
        paddingHorizontal: 8, // 좌우 패딩
        paddingVertical: 4, // 상하 패딩
        marginVertical: 4, // 상하 마진
        marginHorizontal: 12, // 좌우 마진
        backgroundColor: "#e2b497", // 항목 배경 색
    },
    itemText: {
        color: "#351401", // 텍스트 색
        textAlign: "center", // 중앙 정렬
    },
});

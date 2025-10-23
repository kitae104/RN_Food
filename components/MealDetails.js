import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

/**
 * MealDetails 컴포넌트
 * 설명: 식사 항목의 요약 정보를 한 줄로 표시합니다.
 *
 * Props:
 *  - duration (number): 준비/조리 시간(분)
 *  - complexity (string): 난이도(예: 'simple') - 대문자로 표시됨
 *  - affordability (string): 가격 수준(예: 'affordable') - 대문자로 표시됨
 *  - style (object|array): 외부에서 전달되는 컨테이너 스타일을 병합합니다
 *  - textStyle (object|array): 텍스트에 추가로 적용할 스타일입니다
 */
const MealDetails = ({
    duration,
    complexity,
    affordability,
    style,
    textStyle,
}) => {
    return (
        // 기본 스타일(styles.details)과 외부에서 전달된 style을 병합하여 적용
        <View style={[styles.details, style]}>
            {/* 시간(분)을 표시 (예: 30m) */}
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>

            {/* 난이도: 문자열을 대문자로 변환하여 표시 (가독성 강화) */}
            <Text style={[styles.detailItem, textStyle]}>
                {complexity.toUpperCase()}
            </Text>

            {/* 가격 수준: 문자열을 대문자로 변환하여 표시 */}
            <Text style={[styles.detailItem, textStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
};

// PropTypes: 컴포넌트가 받는 props의 타입을 명시하여 개발 시 오류를 줄입니다.
MealDetails.propTypes = {
    duration: PropTypes.number.isRequired, // 분 단위의 숫자
    complexity: PropTypes.string.isRequired, // 난이도 문자열
    affordability: PropTypes.string.isRequired, // 가격 수준 문자열
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // 컨테이너 스타일
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // 텍스트 스타일
};

export default MealDetails;

// 컴포넌트 내부에서 사용되는 스타일 정의
const styles = StyleSheet.create({
    details: {
        flexDirection: "row", // 가로 방향으로 항목을 배치
        justifyContent: "center", // 가로 중앙 정렬
        alignItems: "center", // 세로 중앙 정렬
        padding: 8, // 내부 여백
    },
    detailItem: {
        marginHorizontal: 4, // 각 항목 사이의 수평 간격
        fontSize: 12, // 기본 텍스트 크기
    },
});

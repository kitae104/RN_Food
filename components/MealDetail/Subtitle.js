import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

/**
 * Subtitle 컴포넌트
 * 설명: 섹션 제목(소제목)을 중앙 정렬된 스타일로 렌더링합니다.
 * 주로 재료(Ingredients)나 단계(Steps) 같은 섹션의 구분자 역할을 합니다.
 *
 * Props:
 *  - children: 표시할 텍스트 또는 노드
 */
const Subtitle = ({ children }) => {
    return (
        // 하단에 강조선이 있는 컨테이너
        <View style={styles.subtitleContainer}>
            {/* 텍스트는 중앙 정렬 및 강조 색상 적용 */}
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
};

Subtitle.propTypes = {
    children: PropTypes.node.isRequired, // 반드시 표시할 내용이 전달되어야 함
};

export default Subtitle;

// 스타일 정의
const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6, // 내부 패딩
        margin: 4, // 외부 마진
        marginHorizontal: 12, // 좌우 마진 추가
        borderBottomColor: "#e2b497", // 강조용 밑줄 색상
        borderBottomWidth: 2, // 밑줄 두께
    },
    subtitle: {
        color: "#e2b497", // 텍스트 색상(밑줄과 동일 계열)
        fontSize: 18, // 텍스트 크기
        fontWeight: "bold", // 강조된 굵기
        textAlign: "center", // 중앙 정렬
    },
});

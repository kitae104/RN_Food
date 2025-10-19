import PropTypes from "prop-types";
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryGridTile;

CategoryGridTile.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, // 1:1 비율로 화면을 나눔
        margin: 16, // 외곽 여백을 16px로 설정
        height: 150, // 높이를 150px로 설정
        borderRadius: 8, // 모서리를 8px로 둥글게 처리
        elevation: 4, // 그림자 효과를 추가
        backgroundColor: "white", // 배경색을 흰색으로 설정
        shadowColor: "black", // 그림자 색을 검정색으로 설정
        shadowOpacity: 0.25, // 그림자 투명도를 25%로 설정
        shadowOffset: { width: 0, height: 2 }, // 그림자 위치를 설정
        shadowRadius: 8, // 그림자의 반경을 8px로 설정
        overflow: Platform.OS === "android" ? "hidden" : "visible", // 자식 컴포넌트가 부모 컴포넌트를 벗어나는 부분을 숨김
    },
    button: {
        flex: 1,
    },    
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8, // 모서리를 8px로 둥글게 처리
        justifyContent: "center", // 세로 정렬을 중앙으로 설정
        alignItems: "center", // 가로 정렬을 중앙으로 설정
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});

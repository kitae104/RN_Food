import { StyleSheet, Text, View } from "react-native";


function FavoritesScreen() {
    return (
        <View style={styles.container}>
            <Text>즐겨찾기</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 전체 공간 사용
        backgroundColor: "#866754", // 배경색 설정
    },
});


export default FavoritesScreen;

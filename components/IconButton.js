import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

/**
 * IconButton 컴포넌트
 * 설명: 아이콘 형태의 버튼을 렌더링합니다. 주로 네비게이션 헤더의 액션 버튼으로 사용됩니다.
 *
 * Props:
 *  - icon (string): 표시할 아이콘 이름 (Ionicons)
 *  - color (string): 아이콘 색상
 *  - onPress (function): 버튼 클릭 핸들러
 */
const IconButton = ({ icon, color, onPress }) => {
    return (
        // TouchableOpacity의 style prop을 함수로 제공하여 pressed 상태에서 스타일을 적용
        <TouchableOpacity
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            {/* Expo Vector Icons의 Ionicons를 사용해 아이콘을 렌더링 */}
            <Ionicons name={icon} size={24} color={color} />
        </TouchableOpacity>
    );
};

IconButton.propTypes = {
    icon: PropTypes.string.isRequired, // 아이콘 이름
    color: PropTypes.string, // 아이콘 색상 (선택)
    onPress: PropTypes.func.isRequired, // 클릭 핸들러
};

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7, // 눌렀을 때 약간 투명하게 보여주는 피드백
    },
});

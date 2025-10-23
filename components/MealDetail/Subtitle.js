import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
import { StyleSheet, ImageBackground } from "react-native";
import React from "react";

const Background = props => {
  var icon =
    props.component === "login"
      ? require("../assets/images/Login.png")
      : require("../assets/images/Barbershop.png");

  return (
    <ImageBackground
      source={icon}
      resizeMode="cover"
      style={{ ...styles.imageBackgroundView, ...props.style }}
    >
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackgroundView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Background;

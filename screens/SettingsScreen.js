import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Button,
} from "react-native";
import React, { useCallback } from "react";
import { Icon } from "@rneui/themed";

const SettingsScreen = () => {
  //
  //
  //
  //
  //
  //
  //

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log("logout");
        }}
      >
        <View style={styles.btnContainer}>
          <Icon name="logout" size={45} style={{ padding: 10 }} />
          <Text style={styles.text}>log out</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("settings");
        }}
      >
        <View style={styles.btnContainer}>
          <Icon name="settings" size={45} style={{ padding: 10 }} />
          <Text style={styles.text}>change Password</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#413F42",
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
  },
  btnContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 1,
  },
});

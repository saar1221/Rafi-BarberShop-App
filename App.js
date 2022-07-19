import React from "react";
import { StyleSheet, View } from "react-native";
import MyTabs from "./navigation/MyTab";
import Stack from "./navigation/Stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Test from "./Test";

export default function App() {
  // <View style={styles.container}>
  //  <Provider store={store}>

  /* <Stack /> */

  // <MyTabs />

  /* <CounterTest /> */

  /* */

  // </Provider>
  return (
    <Provider store={store}>
      {/* <View style={styles.container}> */}
      {/* <Test /> */}

      <Stack />
      {/* <App /> */}
      {/* </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { View, Text, Button } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/bookingSlice";

const Test = () => {
  const count = useSelector(state => state.counter.value);
  //   const count = 0;
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Increment value"
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Text>{count}</Text>
      <Button
        title="Decrement value"
        onPress={() => {
          dispatch(decrement());
        }}
      />
    </View>
  );
};

export default Test;

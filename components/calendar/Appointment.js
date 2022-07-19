import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderInfo from "./OrderInfo";

const Appointment = props => {
  //need here function to run on every value from redux and check if its empty
  //if is empty its brake the loop and init boolean value to false and don't show the MyInfo component

  return (
    <View style={styles.container}>
      {!props.haveAppointment ? (
        <Text style={styles.text}>אין לך פגישות</Text>
      ) : (
        <OrderInfo booking={props.booking} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    flex: 1,
    borderRadius: 30,
    backgroundColor: "white",
    padding: 5,
    marginBottom: 5,
  },
  text: {
    color: "tomato",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Appointment;

import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
// import MyButton from "./calendar/MyButton";
import MyImage from "./MyImage";

function OrderInfo(props) {
  //get the name beacuse the the hirecut in the booking obj is id so for the message out put
  const textHearCutMessage = () => {
    let hireCutName = "";
    if (props.booking.hairCutSelected === 0) hireCutName = "תספורת";
    else if (props.booking.hairCutSelected === 1) hireCutName = "תספורת+זקן";
    else hireCutName = "זקן";
    return hireCutName;
  };
  // console.log(hireCutName);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textHeadline}>תודה שבחרתה רפי :</Text>
      <View style={styles.imageAndInfoContainer}>
        <MyImage />
        <View>
          <View style={styles.infoContainer}>
            <Text style={styles.textBooking}>
              {props.booking.dateSelected}
              {"  "}
            </Text>
            <Text style={styles.textInfo}>תאריך:</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textBooking}>{props.booking.timeSelected}</Text>
            <Text style={styles.textInfo}>שעה:</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textBooking}>{textHearCutMessage()}</Text>
            <Text style={styles.textInfo}>סוג:</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#222831",
    width: "100%",
    // height: "60%",
    elevation: 9,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  imageAndInfoContainer: {
    width: "100%",

    // backgroundColor: "gold",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "flex-end",
    padding: 5,
  },
  textBooking: {
    // color: "#fff",
    color: "tomato",
    fontSize: 18,
    fontWeight: "500",
  },
  textInfo: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  textHeadline: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "800",
  },
});

export default OrderInfo;

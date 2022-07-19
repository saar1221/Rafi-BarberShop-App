import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CompleteOrder from "./CompleteOrder";

const CheckoutButton = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => {
            let result = "";
            // check if the user unselected something
            //and if not its return message to alert function in the perianth the missing data
            for (let key in props.booking) {
              if (props.booking[key] === null || props.booking[key] === "") {
                result = key;
                break;
              }
            }
            if (result !== "") {
              const message = {
                timeSelected: "שעה",
                dateSelected: "תאריך",
                hairCutSelected: "סגנון תספורת",
              };
              props.checkIfSelectAllOptions(message[result]);
            } else {
              setModalVisible(!modalVisible);
            }
          }}
          style={styles.btnContainer}
        >
          <Text style={styles.text}>פרטים לסגירה</Text>
        </TouchableOpacity>
      </View>

      {modalVisible ? (
        <CompleteOrder
          booking={props.booking}
          modalVisible={modalVisible}
          setAppointmentConfirmed={props.setAppointmentConfirmed}
          onPressHandelModalVisible={() => {
            setModalVisible(false);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginVertical: 5,
    borderRadius: 30,
    // flex: 1,
    // alignSelf: "center",
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default CheckoutButton;

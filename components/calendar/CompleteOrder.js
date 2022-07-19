import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";

import OrderInfo from "./OrderInfo";

const CompleteOrder = ({
  onPressHandelModalVisible,
  modalVisible,
  setAppointmentConfirmed,
  ...props
}) => {
  const [animationVisible, setAnimationVisible] = useState(false);

  const [modalHeight, setModalHeight] = useState({
    height: "55%",
    width: "100%",
  });

  console.log("in the modal");

  const updateLayout = () => {
    let width = Dimensions.get("window").width;
    let height = Dimensions.get("window").height;
    if (width > height) setModalHeight({ height: "100%", width: "80%" });
    else
      setModalHeight({
        height: "55%",
        width: "100%",
      });
  };

  useEffect(() => {
    const dimensionsCheck = Dimensions.addEventListener("change", updateLayout);
    updateLayout();
    return () => {
      dimensionsCheck.remove();
    };
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        {animationVisible ? (
          <View style={styles.animationView}>
            <LottieView
              style={{ height: 200, width: 150 }}
              source={require("../../assets/animations/check-mark.json")}
              autoPlay
              loop
              speed={0.5}
            />
          </View>
        ) : (
          <></>
        )}
        <View style={styles.centeredView}>
          <View style={{ ...styles.modalView, ...modalHeight }}>
            <Text style={styles.modalText}>פרטים לסגירה</Text>
            <OrderInfo booking={props.booking} />
            <View
              style={{
                flexDirection: "row",
                padding: 25,
                width: 300,
                justifyContent: "space-evenly",
                // marginHorizontal: 25,
                alignItems: "flex-end",
              }}
            >
              <Button
                color={"#D61C4E"}
                title="בטל תור"
                onPress={() => {
                  onPressHandelModalVisible(false);
                }}
              />
              <Button
                color={"#3CCF4E"}
                title="קבע תור"
                onPress={() => {
                  setAnimationVisible(true);
                  setAppointmentConfirmed(true);
                  setTimeout(() => {
                    setAnimationVisible(false);
                    onPressHandelModalVisible(false);
                  }, 2700);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 45,
  },
  animationView: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    // justifyContent: "space-around",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    // backgroundColor: "green",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
  },
});
export default CompleteOrder;

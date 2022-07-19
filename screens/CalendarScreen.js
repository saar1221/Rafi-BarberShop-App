import react, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Alert, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import BouncyCheckboxGroup from "react-native-bouncy-checkbox-group";

import currentDate from "../data/timedata";

import CheckoutButton from "../components/calendar/CheckoutButton";
import TimeBar from "../components/calendar/TimeBar";
import Appointment from "../components/calendar/Appointment";
import Background from "../components/Background";

import { useSelector, useDispatch } from "react-redux";
import { setHairCutSelected, setDateSelected } from "../redux/bookingSlice";

function CalendarScreen(props) {
  const despatch = useDispatch();
  const bookingData = useSelector(state => state.booking);

  const CheckboxGroupStyle = [
    {
      id: 0,
      text: "תספורת",
      ...styles.CheckboxAllGroupStyle,
    },
    {
      id: 1,
      text: "תספורת + זקן",
      ...styles.CheckboxAllGroupStyle,
    },
    {
      id: 2,
      text: "   זקן",
      ...styles.CheckboxAllGroupStyle,
    },
  ];

  const todayDate = currentDate();
  const [userSelectedDayOnCalendar, setUserSelectedDayOnCalendar] =
    useState(todayDate);
  // const [timeListNotAvailable, setTimeListNotAvailable] = useState([]);
  // const [timeListAvailable, setTimeListAvailable] = useState([]);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
  // console.log(" todayDate", todayDate);
  //

  //
  // before i put this despatch i need to take empty appointment date from the DB
  // despatch(setDateSelected(todayDate));
  // const dateSelectedFromRedux = useSelector(
  //   state => state.counter.dateSelected
  // );

  const checkIfSelectAllOptions = bookingMissing => {
    console.log("check is", bookingMissing);
    Alert.alert("חסרים פרטים", `תבחר ${bookingMissing}`, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  // useEffect(() => {

  // }, []);

  // console.log(data);

  return (
    <View style={styles.mainContainer}>
      <Background component={"calendar"}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Calendar
              onDayPress={day => {
                setUserSelectedDayOnCalendar(day.dateString);
                despatch(setDateSelected(day.dateString));
                // handelDateSelected(day.dateString);
              }}
              enableSwipeMonths={true}
              markedDates={{
                [userSelectedDayOnCalendar]: {
                  selected: true,
                  selectedColor: "orange",
                },
              }}
              style={styles.calender}
              theme={styles.theme}
              minDate={todayDate}
              maxDate={"2022-07-30"}
            />

            <View style={styles.selectContainer}>
              <TimeBar />

              <BouncyCheckboxGroup
                data={CheckboxGroupStyle}
                style={{
                  justifyContent: "space-evenly",
                }}
                onChange={selectedItem => {
                  despatch(setHairCutSelected(selectedItem.id));
                }}
              />
              <Appointment
                haveAppointment={appointmentConfirmed}
                booking={bookingData}
              />
              <View style={styles.checkoutButtonView}>
                <CheckoutButton
                  booking={bookingData}
                  setAppointmentConfirmed={setAppointmentConfirmed}
                  checkIfSelectAllOptions={checkIfSelectAllOptions}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  // Specify style for calendar container element. Default = {}
  mainContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  checkoutButtonView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 75,
  },
  selectContainer: {
    minHeight: "50%",
    width: "100%",
  },

  calender: {
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom: 25,
    minHeight: "50%",
    width: "100%",
    overflow: "hidden",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },

  CheckboxAllGroupStyle: {
    textContainerStyle: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    textStyle: {
      fontSize: 25,
      color: "white",
      textDecorationLine: "none",
      fontWeight: "500",
    },
    iconStyle: { borderRadius: 8, borderWidth: 2, borderColor: "orange" },
    style: {
      flexDirection: "column",
      justifyContent: "center",
      marginVertical: 20,
      alignItems: "center",
    },
  },
});

export default CalendarScreen;

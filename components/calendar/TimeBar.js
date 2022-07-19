import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";

import { useSelector, useDispatch } from "react-redux";
import { setTimeSelected } from "../../redux/bookingSlice";

//FIXME: HERE I NEED TO GET THE TIMELIST FROM THE DATA BASE I THINKING
const timeList = [
  "09:00",
  "09:45",
  "10:00",
  "10:45",
  "11:00",
  "11:45",
  "12:00",
  "12:45",
  "13:00",
  "13:45",
  "14:00",
  "14:45",
];

function TimeBar(props) {
  const despatch = useDispatch();

  //FIXME: NEED TO FIX IF THE USER SELECTED SOMETHING ITS CANCEL ALL THE OUTER BUTTONS

  const selectItem = index => {
    if (activeIndex.indexOf(index) > -1) {
      setActiveIndex([]);
      // let newArray = activeIndex.filter(indexObject => {
      //   if (indexObject == index) {
      //     return false;
      //   }
      //   return true;
      // });
      // setActiveIndex(newArray);
    } else {
      setActiveIndex([index]);
      //...activeIndex,
    }
  };

  const [activeIndex, setActiveIndex] = useState([]);
  const handelTimeScroll = item => {
    return (
      <TouchableOpacity
        key={item.index}
        onPress={() => {
          // props.setBooking(prevBooking => {
          //   return { ...prevBooking, timeSelected: item.item };
          // });

          despatch(setTimeSelected(item.item));
          selectItem(item.index);
        }}
      >
        <View
          style={{
            ...styles.textContainer,
            backgroundColor:
              activeIndex.indexOf(item.index) > -1 ? "orange" : "white",
          }}
        >
          <Text style={styles.text}>{item.item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Icon name={"chevron-left"} size={40} color="white" />
      <View style={styles.flatListContainer}>
        <FlatList
          data={timeList}
          extraData={activeIndex}
          renderItem={handelTimeScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Icon name={"chevron-right"} size={40} color="white" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  flatListContainer: {
    width: "80%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "white",
    height: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#222831",
  },
  textContainer: {
    backgroundColor: "#fff",
    height: 38,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#222831",
    padding: 3,
    marginHorizontal: 8,
  },
});

export default TimeBar;

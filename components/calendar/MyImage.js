import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MyImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={{ height: 120, width: 120 }}
        source={{
          uri: "https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/70922807_922642464759950_2137269627359592448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XwWuni4C36oAX8-3bTY&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_PAhMsfxY9dKhctw1pqHHucKg2T7TA9fLtxZsLWWf34A&oe=62EBCF5D",
        }}
      />
    </View>
  );
};

export default MyImage;

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: "center",
    margin: 5,
    borderRadius: 60,
    overflow: "hidden",
  },
});

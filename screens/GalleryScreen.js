import { StyleSheet, Text, View, FlatList, Image, Linking } from "react-native";
import React from "react";

import { SocialIcon } from "@rneui/themed";

const data = [
  {
    imageUrl:
      "https://blinker.co.il/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-20-at-15.05.55-618x726.jpeg",
  },
  {
    imageUrl:
      "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/235128098_1462894067401451_621189918357200351_n.jpg?stp=dst-jpg_s640x640&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GHO5MyyCtmYAX-_hQYd&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-6hfDHHXWkcLLUIMmiMq-MbHOcpEo1wkrEccroe3J9Qg&oe=62DAEA8C",
  },
  {
    imageUrl:
      "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/245504809_1509086952782162_1024737662796465661_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=z_f_2El41coAX9QeEqs&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8QSnbO1nQ7GzrHhGAGRtZ_BHYl0gfkRVAyJf8W1m-zww&oe=62DAF840",
  },
  {
    imageUrl:
      "https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/174675104_1381854955505363_1857869991924064629_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OHVgAglZUuUAX-dLB1Z&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8RUULVYXiR7v0s6cSOz0j5hzWAlc-zGaXbheJy5cMJ3Q&oe=62FAEF45",
  },
  {
    imageUrl:
      "https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/18489687_1918819001477129_6810976818223061713_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Js9auZ1PtIgAX-IZOHj&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-gFudKseTMH1ACTjxSEL7XhII8rufF2_hqgV302jal4w&oe=62FC47A2",
  },
  {
    imageUrl:
      "https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/18404117_1918818758143820_8788030343733191141_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BS7gQ_D7jNsAX-7cdf2&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-WH19M9ZyhimAPQJGKZMq8LOnuPIel6tz5Nr5DUotTHg&oe=62FA337A",
  },
  {
    imageUrl:
      "https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/18403825_1918818938143802_5549840210495852389_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x1GL-xLToqMAX_Kd5cs&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_BIXRJcOLRHRjzjHX5bNv4wfCBebzhKOLRwjVfM8iTvg&oe=62FD7D28",
  },
  {
    imageUrl:
      "https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/18422531_1918818831477146_7585116487280330370_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cXpVy1d5ApkAX92w3dP&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8Xh7c-ZkRWKY1xqTCWGvZYc8OPBRiuhm645CxkL0GIVA&oe=62FB3606",
  },
];
const Gallery = () => {
  const handelImages = (items, index) => {
    return (
      <View key={index} style={{ flex: 1 }}>
        <View
          style={{
            overflow: "hidden",
            marginHorizontal: 5,
            marginBottom: 10,
            borderRadius: 20,
            borderWidth: 1,
          }}
        >
          <Image style={styles.image} source={{ uri: items.item.imageUrl }} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.socialContainer}>
        <SocialIcon
          type={"facebook"}
          iconType={"font-awesome"}
          onPress={() => {
            console.log("click facebook");
            Linking.openURL("fb://profile/100010426146263").catch(() => {
              Linking.openURL("https://www.faceboock.com");
            });
          }}
        />
        <SocialIcon
          type={"instagram"}
          style={{ backgroundColor: "#E1306C" }}
          iconType={"font-awesome"}
          onPress={() => {
            console.log("click instagram");
            Linking.openURL("instagram://user?username=refaelnovahov").catch(
              () => {
                Linking.openURL("https://www.instagram.com");
              }
            );
          }}
        />
        <SocialIcon
          type={"whatsapp"}
          style={{ backgroundColor: "#25D366" }}
          iconType={"font-awesome"}
          onPress={() => {
            console.log("click whatsapp");
            Linking.openURL(
              "https://wa.me/972526708326?text=מה%20קורה%20אח%20שלי!"
            ).catch(() => {
              Linking.openURL("https://www.whatsapp.com");
            });
          }}
        />
      </View>

      <View style={{ margin: 2 }}>
        <FlatList data={data} renderItem={handelImages} numColumns={2} />
      </View>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    padding: 5,
    paddingBottom: 100,
    backgroundColor: "#413F42",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#180A0A",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
  },
  image: {
    resizeMode: "cover",
    width: 200,
    height: 200,
  },
});

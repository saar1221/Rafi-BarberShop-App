// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; need to remove this npm
import CalendarScreen from "../screens/CalendarScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import GalleryScreen from "../screens/GalleryScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="קבע תור"
      // name="hello"
      shifting={true}
      activeColor="black"

      // inactiveColor="white"

      //  barStyle={{ backgroundColor: "orange" }}
    >
      <Tab.Screen
        name="קבע תור"
        title="asd"
        component={CalendarScreen}
        options={{
          tabBarLabel: "קבע תור",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={25} />
          ),
          tabBarColor: "#FF9F29",
        }}
      />
      <Tab.Screen
        name="גלריה"
        component={GalleryScreen}
        options={{
          tabBarLabel: "גלריה",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="panorama-variant-outline"
              color={color}
              size={25}
            />
          ),

          tabBarColor: "#FD5D5D",
        }}
      />
      <Tab.Screen
        name="הגדרות"
        component={SettingsScreen}
        options={{
          tabBarLabel: "הגדרות",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={25}
            />
          ),
          tabBarColor: "#7F8487",
        }}
      />
    </Tab.Navigator>
  );
}

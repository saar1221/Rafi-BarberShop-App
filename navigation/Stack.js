import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./MyTab";
import RegisterScreen from "../screens/RegisterScreen";
import { Image, View, Text } from "react-native";

import LoginScreen from "../screens/LoginScreen";
const Stack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{
            headerBackVisible: false,
            headerTitleAlign: "center",

            headerStyle: {
              backgroundColor: "rgba(0,0,0,0.8)",
            },

            headerTitle: () => (
              <View
                style={{
                  flexDirection: "row",
                  overflow: "hidden",
                  alignItems: "center",
                  margin: 3,
                }}
              >
                <Image
                  style={{ width: 35, height: 55, resizeMode: "contain" }}
                  source={require("../assets/images/barbershop-logo.png")}
                />
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "400" }}
                >
                  Rafi Barbershop
                </Text>

                <Image
                  style={{ width: 35, height: 55, resizeMode: "contain" }}
                  source={require("../assets/images/barbershop-logo.png")}
                />
              </View>
            ),
            headerTitleStyle: { color: "white" },
            // headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;

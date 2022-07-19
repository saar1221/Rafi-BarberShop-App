import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Background from "../components/Background";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");

  const [animationVisible, setAnimationVisible] = useState(false);

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(`the email ${user.email} is singUp`);
        setAnimationVisible(false);
        navigation.navigate("MyTabs");
      })
      .catch(error => {
        console.log(error);
        setAnimationVisible(false);
        let errorCode = error.code;
        let errorMessage = error.message;
        Alert.alert(`${errorCode}`, ` ${errorMessage}`, [
          {
            text: "OK",
            onPress: () =>
              console.log("OK Pressed maybe set email and password empty"),
          },
        ]);
      });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {animationVisible ? (
          <View style={styles.animationView}>
            <LottieView
              style={{ height: 200, width: 150 }}
              source={require("../assets/animations/barber.json")}
              autoPlay
              loop
              // speed={0.5}
            />
          </View>
        ) : (
          <></>
        )}
        <Background component={"login"} style={styles.background}>
          <View style={styles.inputContainer}>
            <Animatable.View
              animation="bounceInDown"
              duration={1000}
              style={styles.inputContainerAnimate}
            >
              <TextInput
                style={styles.inputView}
                placeholder={"Email"}
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </Animatable.View>
            <Animatable.View
              animation="bounceInDown"
              duration={1300}
              style={styles.inputContainerAnimate}
            >
              <TextInput
                style={styles.inputView}
                placeholder={"Password"}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
              />
            </Animatable.View>
            <Animatable.View
              animation="bounceInDown"
              duration={1600}
              style={styles.inputContainerAnimate}
            >
              <TextInput
                style={styles.inputView}
                placeholder={"Phone"}
                value={phone}
                onChangeText={text => setPhone(text)}
              />
            </Animatable.View>
            <Animatable.View
              animation="bounceInDown"
              duration={1900}
              style={styles.inputContainerAnimate}
            >
              <TextInput
                style={styles.inputView}
                placeholder={"Full Name"}
                value={fullName}
                onChangeText={text => setFullName(text)}
              />
            </Animatable.View>

            <Animatable.View
              animation="bounceInUp"
              duration={1900}
              style={styles.inputContainerAnimate}
            >
              <TouchableOpacity
                onPress={() => {
                  setAnimationVisible(true);
                  handleRegister();
                  // navigation.navigate("MyTabs");
                }}
                style={styles.btn}
              >
                <Text style={styles.btnConnect}>הירשם</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>

          <View style={styles.register}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              <Text style={styles.loginText}>התחבר</Text>
            </TouchableOpacity>
          </View>
        </Background>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    overflow: "hidden",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderWidth: 1,
    marginTop: "8%",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainerAnimate: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputView: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 3,
    backgroundColor: "white",
    width: "75%",
  },
  register: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
  },
  loginText: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  btn: {
    marginVertical: 15,
    backgroundColor: "orange",
    width: 110,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  btnConnect: {
    fontSize: 16,
    fontWeight: "600",
  },
});
export default RegisterScreen;

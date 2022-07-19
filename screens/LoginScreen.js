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
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animationVisible, setAnimationVisible] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user, " is loogin ");
        setAnimationVisible(false);
        navigation.navigate("MyTabs");
        // ...
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
          <Animatable.View
            animation="lightSpeedIn"
            duration={1500}
            style={styles.inputContainerAnimate}
          >
            <TextInput
              style={styles.inputView}
              placeholder={"Email"}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.inputView}
              placeholder={"Password"}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />

            <TouchableOpacity
              onPress={() => {
                setAnimationVisible(true);
                handleLogin();
                //this is i chack how to put value in the redux
                // despatch(setPhone({ email: email, name: "name", value: 5 }));
              }}
              style={styles.btn}
            >
              <Text style={styles.btnConnect}>התחבר</Text>
            </TouchableOpacity>
          </Animatable.View>

          <View style={styles.register}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            >
              <Animatable.Text
                animation="zoomInUp"
                duration={1500}
                style={styles.registerText}
              >
                הירשם
              </Animatable.Text>
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
  registerText: {
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
  animationView: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default LoginScreen;

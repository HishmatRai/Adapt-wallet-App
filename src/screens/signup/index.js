import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Logo } from "./../../components/svg";
import ThemeColors from "./../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
function Signup(props) {
  const [fullName, onFullName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [terms, setTerms] = useState(true);
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor={ThemeColors.statusBarBgColor}
        translucent={false}
      />
      <View>
        <TouchableOpacity style={style._header_mani}>
          <Ionicons name="chevron-back" size={24} color="#404040" />
          <Text style={style._header}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style._heading}>Welcome To</Text>
        <View style={style._logo}>
          <Logo />
        </View>

        <View style={style.input_main}>
          <TextInput
            style={style.input}
            onChangeText={onFullName}
            value={fullName}
            placeholder="Full Name"
            placeholderTextColor={ThemeColors.textColor}
            color={ThemeColors.textColor}
            autoCapitalize="none"
          />
        </View>
        <View style={style.input_main}>
          <TextInput
            style={style.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email Address"
            placeholderTextColor={ThemeColors.textColor}
            color={ThemeColors.textColor}
            autoCapitalize="none"
          />
        </View>
        <View style={style.input_main}>
          <TextInput
            style={style.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={ThemeColors.textColor}
            color={ThemeColors.textColor}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>

        <View style={style._terms_main}>
          <TouchableOpacity style={style._terms_btn}>
            {terms ? (
              <Ionicons
                name="checkmark-sharp"
                size={20}
                color="white"
                onPress={() => setTerms(!terms)}
              />
            ) : (
              <Ionicons
                name="checkmark-sharp"
                size={20}
                color="#2CB679"
                onPress={() => setTerms(!terms)}
              />
            )}
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={style._text}>I agree to Bankerfy </Text>
              <TouchableOpacity>
                <Text style={style._terms_btn_text}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style={style._text}> and </Text>
            </View>
            <TouchableOpacity>
              <Text style={style._terms_btn_text}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={style._signup_btn}
          onPress={() => props.navigation.navigate("Verification")}
        >
          <Text style={style._signup_btn_text}>Sign Up</Text>
        </TouchableOpacity>

        <View style={style._alrady_account_main}>
          <Text style={style._text}>Have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}>
            <Text style={style._login_btn_text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.screensBgColor,
    padding: 20,
  },
  _header_mani: {
    flexDirection: "row",
    alignItems: "center",
  },
  _header: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    color: ThemeColors.textColor,
  },
  _heading: {
    fontFamily: "Roboto-Bold",
    fontSize: 26,
    textAlign: "center",
    marginTop: 30,
    color: ThemeColors.textColor,
  },
  _logo: {
    alignSelf: "center",
  },
  input_main: {
    borderWidth: 1,
    borderColor: ThemeColors.borderColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 53,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: ThemeColors.inputBg,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  _terms_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _terms_btn: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: ThemeColors.textColor,
    padding: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    backgroundColor: "white",
    elevation: 0.5,
  },
  _text: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#6B6B6B",
  },
  _terms_btn_text: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#2CB679",
  },
  _signup_btn: {
    borderWidth: 1,
    borderColor: ThemeColors.btnBgColor,
    borderRadius: 5,
    height: 53,
    paddingHorizontal: 20,
    marginTop: 30,
    backgroundColor: ThemeColors.btnBgColor,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    elevation: 0.8,
  },
  _signup_btn_text: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: ThemeColors.textColor,
  },
  _alrady_account_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  _login_btn_text: {
    color: ThemeColors.borderColor,
    fontSize: 16,
  },
});

export default Signup;

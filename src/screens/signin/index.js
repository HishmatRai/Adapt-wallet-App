import React from "react";
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
function SignIn(props) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor={ThemeColors.statusBarBgColor}
        translucent={false}
      />
      <View>
        <TouchableOpacity
          style={style._header_mani}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#404040" />
          <Text style={style._header}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style._logo}>
          <Logo />
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

        <TouchableOpacity style={style.forgot_btn}>
          <Text style={style._text}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style._signup_btn}
          onPress={() => props.navigation.navigate("Wallet")}
        >
          <Text style={style._signup_btn_text}>Sign In</Text>
        </TouchableOpacity>

        <View style={style._alrady_account_main}>
          <Text style={style._text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={style._login_btn_text}>Sign Up</Text>
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
  _logo: {
    alignSelf: "center",
    marginTop: 10,
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
  _text: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#6B6B6B",
  },
  _signup_btn: {
    borderWidth: 1,
    borderColor: ThemeColors.btnBgColor,
    borderRadius: 5,
    height: 53,
    paddingHorizontal: 20,
    marginTop: 50,
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
    marginTop: 50,
  },
  _login_btn_text: {
    color: ThemeColors.borderColor,
    fontSize: 16,
  },
  forgot_btn: {
    alignSelf: "flex-end",
    marginTop: 20,
  },
});

export default SignIn;

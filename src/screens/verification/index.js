import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { OtpImage } from "./../../components/svg";
import ThemeColors from "./../../theme/colors";
import Otp from "../../components/otp";
function Verification(props) {
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
          <Text style={style._header}>Verification</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style._otp_icon}>
          <OtpImage />
        </View>
        <Text style={style._heading}>OTP</Text>
        <View style={style._otp}>
          <Otp />
        </View>
        <TouchableOpacity style={style.forgot_btn}>
          <Text style={style._text}>Resend OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style._signup_btn}
          //   onPress={() => props.navigation.navigate("Verification")}
        >
          <Text style={style._signup_btn_text}>Verify</Text>
        </TouchableOpacity>
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
  _otp_icon: {
    alignSelf: "center",
    marginTop: 40,
  },
  _text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#662972",
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

  forgot_btn: {
    alignSelf: "flex-end",
    marginTop: 20,
  },
  _heading: {
    textAlign: "center",
    color: "#193628",
    fontFamily: "Roboto-Bold",
    fontSize: 22,
    marginTop: 20,
  },
  _otp: {
    marginTop: 30,
  },
});

export default Verification;

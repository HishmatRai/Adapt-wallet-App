import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import ThemeColors from "./../../theme/colors";
import { FontAwesome } from "@expo/vector-icons";
function SuccessMessage(props) {
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor={ThemeColors.statusBarBgColor}
        translucent={false}
      />
      <View style={style._body_main}>
        <View style={style._tick_mark}>
          <FontAwesome name="check" size={124} color="white" />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={style._heading}>Transferred{"\n"} Successfully</Text>
          <Text style={style._Des}>
            Dear user your amount has been {"\n"}transferred to your requested
            receipt. {"\n"}Thank you for using our service.
          </Text>
        </View>
        <TouchableOpacity style={style._contine_btn}>
          <Text style={style._contine_btn_text}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303030",
  },
  _body_main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  _tick_mark: {
    width: 191,
    height: 191,
    borderRadius: 191 / 2,
    backgroundColor: "#2CB678",
    alignSelf: "center",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  _contine_btn: {
    backgroundColor: "#01FFD5",
    height: 60,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  _contine_btn_text: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "Roboto-Bold",
  },
  _heading: {
    color: "#fff",
    fontSize: 35,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  _Des: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    marginTop: 10,
  },
});

export default SuccessMessage;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import ThemeColors from "./../../theme/colors";
import {
  WalletActiveIcon,
  AdaptIcon,
  BrowserIcon,
  ReceiveIcon,
  ContactsIcon,
  ProfileIcon,
} from "./../../components/svg";
function Wallet(props) {
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor={ThemeColors.statusBarBgColor}
        translucent={false}
      />
      <View>
          
      </View>

      <View style={style._tabs}>
        <TouchableOpacity style={style.tab_btn}>
          <WalletActiveIcon />
          <Text
            style={[style.tabs_Text, { color: ThemeColors.activeTabColor }]}
          >
            Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <AdaptIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Adapt
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <BrowserIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Browser
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <ReceiveIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <ContactsIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Contacts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <ProfileIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.screensBgColor,
  },
  _tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 77,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#202020",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  tabs_Text: {
    fontFamily: "Roboto-Bold",
    fontSize: 11,
    letterSpacing: 0.5,
    marginTop: 5,
  },
  tab_btn: {
    alignItems: "center",
  },
});

export default Wallet;

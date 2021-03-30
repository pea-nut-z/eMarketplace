import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SIZES, COLORS, viewOptions, locationOptions, infoOptions } from "../../constants";
import { Header, CircleButton, FlatButtons, MemberInfo } from "../../components";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

export default function MyAccount({ navigation }) {
  // MOCK USERID
  const userId = 111;
  const userInfo = useSelector((state) => state.members[userId]);

  // const renderProfilePicAndBtn = () => {
  //   return (

  //   );
  // };

  const renderCamerabtn = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MemberInfo
          picture={userInfo.displayPic}
          name={userInfo.username}
          location={userInfo.location}
          id={userId}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile", { userId })}
          style={{
            height: 35,
            width: 35,
            backgroundColor: COLORS.lightGray2,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: COLORS.secondary,
            borderRadius: 50,
            top: 25,
            left: -55,
          }}
        >
          <Ionicons name={"camera"} size={25} color={COLORS.darkgray} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title={"My Account"} useRightBtns={["settings-outline"]} />
      <ScrollView>
        {/* PROFILE DISPLAY */}
        <View>{renderCamerabtn()}</View>

        {/* VIEW PROFILE BUTTON */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Profile", {
              sellerId: userId,
              userId,
            })
          }
          style={{
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
          }}
        >
          <View style={styles.button}>
            <Text style={styles.btnText}>View profile</Text>
          </View>
        </TouchableOpacity>

        {/* CIRCLE BUTTONS */}
        <View style={styles.circleButtons}>
          <CircleButton options={viewOptions} userId={userId} navigation={navigation} />
        </View>

        {/* FLAT BUTTONS */}
        <FlatButtons options={locationOptions} navigation={navigation} />
        <FlatButtons options={infoOptions} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    // position: 'absolute',
    // top: SIZES.height * 0.2,
    // paddingVertical: SIZES.padding,
    // paddingHorizontal: SIZES.padding * 2,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.padding,
    height: 30,
    width: SIZES.width - SIZES.padding * 4,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.darkgray,
  },
  btnText: {
    // ....h5
  },

  circleButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: SIZES.padding,
    height: SIZES.height * 0.12,
  },
});

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  // FONTS,
  COLORS,
} from "../constants";

export default function MemberInfo({ picture, name, location, id, atItemDetails }) {
  const styleVariables = atItemDetails ? styles.itemDetails : styles.profile;
  const textVariables = atItemDetails ? styles.itemDetailsText : styles.profileText;

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      {picture !== "N/A" ? (
        <Image source={{ uri: picture }} resizeMode={"contain"} style={styleVariables} />
      ) : (
        <Ionicons
          name={"person-circle-outline"}
          size={styleVariables.height}
          color={COLORS.secondary}
        />
      )}

      <Text style={textVariables}>
        {name} • {location}
        {id && ` • #${id}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileText: {
    // ...FONTS.h4,
    textAlign: "center",
  },
  profile: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 100,
  },
  itemDetailsText: {
    // ...FONTS.body4,
    textAlign: "center",
  },
  itemDetails: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 50,
  },
});

import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { COLORS, SIZES, SHADOWS, FONTS } from "../Utility/theme";

import { Text, View, Image } from "react-native";
import { colors } from "../Utility/colors";

export const CardView = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        {/* <Image
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
          }}
          source={require("../../assets/img/rain.jpg")}
        /> */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            justifyContent: "space-between",
          }}
        >
          <Text>RAIN</Text>
        </View>
      </View>
    </View>
  );
};

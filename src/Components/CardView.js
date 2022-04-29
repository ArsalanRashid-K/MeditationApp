import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { COLORS, SIZES, SHADOWS, FONTS } from "../Utility/theme";

import { Text, View, Image } from "react-native";
import { colors } from "../Utility/colors";

export const CardView = ({ a }) => {
  console.log(a.bg);

  return (
    <View
      style={{
        flex: 1,
        // width: 200,
        // padding: 10,
        paddingTop: 20,
        height: 210,
        backgroundColor: `${a.bg}`,
        borderRadius: 10,
        marginTop: 10,
        margin: 5,
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          width: 120,
          height: 120,
          borderRadius: 75,
          overflow: "hidden",
          // borderWidth: 2,
          // borderColor: "red",
          // position: "absolute",
        }}
        source={a.image}
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginTop: 20,
          fontSize: 15,
          fontFamily: FONTS.regular,
        }}
      >
        {a.id}
      </Text>
    </View>
  );
};

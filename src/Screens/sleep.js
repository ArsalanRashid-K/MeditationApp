import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import { Text, View, FlatList } from "react-native";
import { colors } from "../Utility/colors";
// import { Card } from "../Components/card";
import { CardView } from "../Components/CardView";
import { COLORS } from "../Utility/theme";
import { Data } from "../Utility/dummy";

export const Sleep = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            alignContent: "center",
            justifyContent: "flex-start",
            flex: 1,
            backgroundColor: COLORS.white,
            padding: 10,
          }}
        >
          <FlatList
            data={Data}
            renderItem={({ item }) => <CardView />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.error,
            height: 300,
            zIndex: -1,
          }}
        >
          <Text>sleep</Text>
        </View>
      </View>
    </>
  );
};

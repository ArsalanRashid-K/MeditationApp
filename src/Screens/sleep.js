import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import { Text, View, FlatList } from "react-native";
import { colors } from "../Utility/colors";
// import { Card } from "../Components/card";
import { CardView } from "../Components/CardView";
import { COLORS } from "../Utility/theme";
import { Data } from "../Utility/dummy";


// console.log(r[randomColor]);
export const Sleep = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.error,
          // position: "absolute",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: 80,
          width: "100%",
          // zIndex: -1,
        }}
      >
        <Text>sleep</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          // marginTop:10,
          padding: 15, // this handles the size of the container .
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: "#1d3557", // background of sleep
        }}
      >
        <FlatList
          data={Data}
          renderItem={({ item }) => <CardView a={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

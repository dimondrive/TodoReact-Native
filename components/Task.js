import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Task({ text }) {
  let date = new Date();
  return (
    <>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <Text style={styles.itemText}>{text}</Text>
        </View>
        <View style={styles.circular}></View>
        <Text
          style={{ marginTop: 15, textAlign: "right" }}
        >{`Дата создания ${date.getDate()}.0${date.getMonth()}.${date.getFullYear()} ${date.toLocaleTimeString()}`}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    position: "relative",
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#55BCF6",
    position: "absolute",
    right: 15,
    top: 25,
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "#55BCF666",
    marginRight: 15,
  },
  itemText: {
    fontWeight: "bold",
    maxWidth: "80%",
  },
});

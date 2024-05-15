import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  let date = new Date();
  const [isFocus, setFocus] = useState(false);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handkeAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={{ position: "absolute", top: 100, right: 100 }}>
          <Text style={{ position: "absolute" }}>
            {" "}
            {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
          </Text>
        </View>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          placeholder="Задача"
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handkeAddTask()}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 52,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 29,
            }}
          >
            <Text style={{ fontSize: 35 }}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 94,
    paddingHorizontal: 20,
    paddingBottom: 100,
    position: "relative",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  items: {},
  input: {
    backgroundColor: "white",
    borderRadius: 60,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 246,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 37,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "space-between",
    width: "100%",
  },
});

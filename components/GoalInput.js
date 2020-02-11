import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ goal, visible, onGoalInput, onAddGoal }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={onGoalInput}
          value={goal}
        />
        <Button title="Add" onPress={onAddGoal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 10,
    margin: 10,
    width: "80%",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GoalInput;

import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleGoalInput = enteredText => {
    setGoal(enteredText);
  };

  const handleAddGoal = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal }
    ]);
    setShowModal(false);
  };

  const handleGoalDelete = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setShowModal(true)} />
      <GoalInput
        goal={goal}
        visible={showModal}
        onGoalInput={handleGoalInput}
        onAddGoal={handleAddGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={handleGoalDelete}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
});

import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Card, Row, Col, Divider, Input, Button } from "antd";


function App() {
  const [foods, setFoods] = useState(foodsJson);
  // Function to handle adding a new food item to the foods array
  const handleAddFood = (newFood) => {
    // Add the newFood object to the beginning of the foods array using unshift
    setFoods([newFood, ...foods]);
  };
  // Function to handle deleting a food item from the foods array
  const handleDeleteFood = (foodId) => {
    // Filter out the food item with the matching id
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    // Update the foods array in the state
    setFoods(updatedFoods);
  };
  return (
    <div className="App">
      <h1> React IronNutrition</h1>

      {}
      <AddFoodForm onAddFood={handleAddFood} />
      {}

 {/* Divider to create space */}
 <Divider />

      <Row gutter={[16, 16]} justify="center">
        {foods.map((oneFood) => (
          <Col key={oneFood.id}>
            <FoodBox food={oneFood} onDelete={() => handleDeleteFood(oneFood.id)} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
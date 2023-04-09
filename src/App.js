import './App.css';
import foodsJson from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foods, setFoods] = useState(foodsJson)
  const [keyword, setKeyword] = useState('')

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood]
    setFoods(updatedFoods)
  }

  const handleKeyWord = (e) => {
    setKeyword(e.target.value)
  }

  const filteredFoods = [...foods].filter(food => {
    return food.name.toLowerCase().includes(keyword.toLowerCase())
  })



  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />
      <Search keyword={keyword} onChange={handleKeyWord}/>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        { filteredFoods.map((food, index) => {
          return <FoodBox key={index} food={food} foods={foods} setFoods={setFoods}/>
        })}
      </Row>

      {!filteredFoods.length && <h3>There is no more food to show.</h3>}


    </div>
  );
}

export default App;

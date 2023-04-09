import { Card, Col, Button } from 'antd';


function FoodBox(props){
    const {name, image, calories, servings} = props.food
    const {foods, setFoods} = props

    const deleteFood= (foodToDelete) => {
        let updatedFoods = [...foods].filter(food => food !== foodToDelete)
        console.log("delete a food")
        setFoods(updatedFoods)
      }

    return (
        <Col>
          <Card
            title={name}
            style={{ width: 230, height: 330, margin: 10 }}
          >
            <img src={image} height={60} alt="food" />
            <p>Calories: {calories}</p>
            <p>Servings: <b>{servings}</b></p>
            <p>
              <b>Total Calories: {calories * servings} </b> kcal
            </p>
            <Button type="primary" onClick={()=>deleteFood(props.food)}> Delete </Button>
            {/* must use ()=> here in onClick otherwise it will delete all food when rendering the page */}
          </Card>
        </Col>
      );
}

export default FoodBox
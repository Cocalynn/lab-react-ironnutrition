import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {


    const [state, setState] = useState({
        name: '',
        image: '',
        calories: null,
        servings: null
    })

    const [display, setDisplay] = useState(true)

    //optimize the code by using one function to handle all inputs
    const handleInput = (e) => {
        const {name, value} = e.target
        setState(state=>({...state, [name]: value}))
        console.log(state)

    }


    const handleSubmit = (e) => {
        e.preventDefault()//prevent the page from refreshing

        const newFood = state
        props.addFood(newFood)

        setState(
        {
            name: '',
            image: '',
            calories: null,
            servings: null
        })
    }

    
    return (
        <form onSubmit={handleSubmit}>
        {
            display 
            &&
            <>
                <Divider>Add Food Entry</Divider>
                <label>Name</label>
                <Input name="name" value={state.name} type="text" onChange={handleInput} />
                <label>Image</label>
                <Input name="image" value={state.image} type="text" onChange={handleInput} />
                <label>Calories</label>
                <Input name="calories" value={state.calories} type="number" onChange={handleInput} />
                <label>Servings</label>
                <Input name="servings" value={state.servings} type="number" onChange={handleInput} />
                <button type="submit">Create</button>
            </>
        }
        <br />
        {
            display 
            ? 
            <button type="button" onClick={() => setDisplay(false)}>Hide</button> 
            :
            <button type="button" onClick={() => setDisplay(true)}>Show</button>
        }
        </form>
    );
}

export default AddFoodForm;

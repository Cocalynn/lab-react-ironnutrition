import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState()
    const [servings, setServings] = useState()
    const [display, setDisplay] = useState(true)

    const handleNameInput = e => { setName(e.target.value) }
    const handleImageInput = e => { setImage(e.target.value) }
    const handleCaloriesInput = e => { setCalories(e.target.value) }
    const handleServingsInput = e => { setServings(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
        props.addFood(newFood)

        // Clear the form
        setName('')
        setImage('')
        setCalories('')
        setServings('')
    }

    
    return (
        <form onSubmit={handleSubmit}>
        {
            display 
            &&
            <>
                <Divider>Add Food Entry</Divider>
                <label>Name</label>
                <Input value={name} type="text" onChange={handleNameInput} />
                <label>Image</label>
                <Input value={image} type="text" onChange={handleImageInput} />
                <label>Calories</label>
                <Input value={calories} type="number" onChange={handleCaloriesInput} />
                <label>Servings</label>
                <Input value={servings} type="number" onChange={handleServingsInput} />
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

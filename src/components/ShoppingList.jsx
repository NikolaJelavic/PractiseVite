import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";
import Button from '@mui/material/Button';

export default function ShoppingList() {
    const [items,setItems] = useState([
        {id:uuid(),product:"Bananas", quantity:8},
        {id:uuid(), product:"Eggs", quantity:12},
    ])
    const addItem = (item) => {
        setItems((currItems)=>{
            return[...currItems,{...item, id:uuid()}];
    })
    }
    return <div>
<Button variant="contained">Contained</Button>

        <h1>Shoping List</h1>
        <ul>
            {items.map((i)=>(
                <li key={i.id}>
                    {i.product} - {i.quantity}
                </li>
            ))}
        </ul>
        <ShoppingListForm addItem={addItem}/>
        <br /><br /><br />
    </div>
};

import { useState } from "react";

export default function ShoppingListForm(params) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const handleChange = (e) =>{
        setFormData(currData=>{
            return {
                ...currData,
                [e.target.name]:e.target.value
            }
        })
    }
  return (
    <form action="">
        <h1>Product is: {formData.product} and quantity is {formData.quantity}</h1>
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity">Quanitity</label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
    </form>
  );
}

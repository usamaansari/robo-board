import React from 'react'
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css"
import { addProduct } from '@/app/lib/actions'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
        <form action={addProduct} className={styles.form}>
            <input type='text' placeholder='title' name='title' required />
            <select name='cat' id='cat'>
                <option value="general">Choose a category</option>
                <option value="Raw Mushroom">Raw Mushroom</option>
                <option value="Ripe Mushroom">Ripe Mushroom</option>
                <option value="Wild Mushroom">Wild Mushroom</option>
            </select>
            
        <input type="number" placeholder='price' name='price' />
        <input type="number" placeholder='stock' name='stock' />
        <input type="text" placeholder='image' name='img' />
        <input type="text" placeholder='color' name='color' />
        <input type="text" placeholder='size' name='size' />
        <textarea name="desc" id="desc" placeholder='Description' rows="10" cols="30"></textarea>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage
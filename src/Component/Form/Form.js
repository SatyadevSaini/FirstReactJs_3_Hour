import React, { useRef } from "react";
import "./Form.css";

const Form  = (props) => {

          // use Ref here to getting the values ....
          const id = useRef();
            const price = useRef();
            const name = useRef();
            const category = useRef();
  
           

         const FormValues = (event)  => {
          
            event.preventDefault();
           
         
            // Data is Here .....

            const ID = id.current.value;
            const PRICE = price.current.value;
            const NAME = name.current.value;
            const CATEGORY = category.current.value;

            console.log(ID);
            console.log(CATEGORY);
            console.log(PRICE);
            console.log(NAME);

            props.sendValueHere(ID , NAME , PRICE , CATEGORY);
            
             id.current.value = "";
             price.current.value = "";
             name.current.value= "";
             category.current.value= "";
         }
            
        


    return(
        <div className="Screen">
        <form  onSubmit={FormValues}>
        <div className="form_Div" >

        <div className="form_ID">
        <label>Product Id</label>
        <div>
           <input type="number" placeholder="Id of product"  ref={id} required />
        </div>
         </div>

        <div className="form_sellingPrice">
        <label>Selling Price</label>
        <div>
           <input type="number" placeholder="Price" ref={price} required />
        </div>
         </div>

         <div className="form_ProductName">
        <label>Product Name</label>
        <div>
           <input type="text" placeholder="Product name"  ref={name} required  />
        </div>
         </div> 

          <div className="form_dropdown">
          <label> Choose  Category</label>
      <select  ref={category} required >
        
        <option value="Electronics">Electronics</option>
        <option value="Food Item">Food Item</option>
        <option value="Skin Care">Skin Care</option>
      </select>    
         </div>  
                   <div className="add-Button">
                       <button className="add-Button_d"> Add Product</button>
                   </div>
                   </div>

         </form>
        </div>  
    )
}

export default Form;
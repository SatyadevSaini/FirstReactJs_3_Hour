  import React, { useState } from "react";
import Form from "../Form/Form";
import "./DataHandler.css";


 const DataHandler = ()=>{

    var [dataHere , updatedData] = useState()
    var [dlt , updatedlt] = useState(dlt);
         

    const getFormDataHere = (ID , NAME , PRICE , CATEGORY) => {
         
        // we are getting values here 
        console.log("ID" +ID);
        console.log(CATEGORY);
        console.log(PRICE);
        console.log(NAME);

        const object  = {
             id: ID , Category : CATEGORY , price : PRICE , name: NAME
        }
        
        localStorage.setItem(ID , JSON.stringify(object));    // Data Succesfully Added here in the Local Storage in form of the array
      //  window.location.reload();

      updatedData(
        [...datas]
      );
     //   dataHere = datas;
      console.log("Current Data here "+dataHere);

      }
         

     


       // **************************print Data here from localStorage********************************
       const datas = [];
      for(var i=0; i<localStorage.length; i++){

      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      datas.push(value);
     
      }


      // delete button here delete from local storage 
      const delteButton =(id) =>{
       
        updatedlt(   // useState will help us to rerendered our  function ...
              datas.pop(id) ,             // remove from the array & localStorage  from both ....
              localStorage.removeItem(id)
        );
      }

    
      // console.log(datas);

    const   isFoodItem  = (value) =>  value  === "Food Item" 
    const  isElectronic = (value) => value === "Electronics"
    const  isSkinCare = (value) => value === "Skin Care"



    //*************************** PRINT DATA HERE ALL PRODUCTS DETAILS PRINT HERE *********************************



       const Valued = <div className="Printing_Data">

          
       {/*****************************  Food Item Printed Here All Food items are here  ************************* */}
       <h1 className="main">Product Details </h1>
       <div className="Food-Item">
       <h2> Food Item </h2>
       {    
     datas.map( ( val , index) =>  
        <div  key={index} >

 {isFoodItem(JSON.parse(val).Category) ? <div className="PrintData" > ID: { JSON.parse(val).id} {"   ||  "} Name: {JSON.parse(val).name}  {"  ||   "} Price: { JSON.parse(val).price} Category : {JSON.parse(val).Category} 
<button type="submit" onClick={ () => delteButton(JSON.parse(val).id)}> Delete</button> </div> : <div></div> }
        </div>
     )
 }
            </div>



{/* ******************************ELECTRONICS ITEMS HERE ******************************************************* */}

      <div className="Electronics">
       <h2 className> Electronics </h2>
       {    
     datas.map( ( val , index) =>  
        <div  key={index} >

 {isElectronic(JSON.parse(val).Category) ? <div className="PrintData" > ID: { JSON.parse(val).id} {"   ||  "} Name: {JSON.parse(val).name}  {"  ||   "} Price: { JSON.parse(val).price} Category : {JSON.parse(val).Category} 
<button type="submit" onClick={ () => delteButton(JSON.parse(val).id)}> Delete</button> </div> : <div></div> }
        </div>
     )
 }
            </div>






            {/******************************* SKIN cARE ITEMS PRINT HERE ********************************* */}

            <div className="SkinCare">
       <h2 className> Skin Care </h2>
       {    
     datas.map( ( val , index) =>  
        <div  key={index} >

 {isSkinCare(JSON.parse(val).Category) ? <div className="PrintData" > ID: { JSON.parse(val).id} {"   ||  "} Name: {JSON.parse(val).name}  {"  ||   "} Price: { JSON.parse(val).price} Category : {JSON.parse(val).Category} 
<button type="submit" onClick={ () => delteButton(JSON.parse(val).id)}> Delete</button> </div> : <div></div> }
        </div>
     )
 }
            </div>






       
      
       </div>;
       

return (
    <div>
      <Form  sendValueHere = {getFormDataHere}   />   
      {Valued}
    </div>
)

 } 

 export default DataHandler;
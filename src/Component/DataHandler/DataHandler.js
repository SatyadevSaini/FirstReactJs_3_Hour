  import React from "react";
import Form from "../Form/Form";


 const DataHandler = ()=>{

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
    }
         
       // **************************print Data here from localStorage********************************
       const datas = [];
      for(var i=0; i<localStorage.length; i++){

      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      datas.push(value);
      }
      console.log(datas);
   



     

       const Valued = <div className="Printing_Data">

    

       {   

          datas.map( ( value ) =>  
              <div className="printing_Div" key={value.id} >
             
            
        <div>  ID:{value.id} {"||"} Name:{value.name}  {"||"} Price:{  value.price+"($)"} Category : {value.Category} </div> 
     
                  
           
     
     
              </div>
           )
          
       }
       </div>;
       
     


return (
    <div>
      <Form  sendValueHere = {getFormDataHere}   />   
      {Valued}
    </div>
)

 } 

 export default DataHandler;
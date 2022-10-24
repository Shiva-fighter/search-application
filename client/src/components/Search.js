import React, {useEffect, useState} from "react";
import "../App.css"

export const Search = ()=>{
    const [item , setItem] = useState("");
    const [items, setItems] = useState([]);

    const searhProd =async (e)=>{
        setItem(e.target.value);
        let result = await fetch(`http://localhost:5000/${item}`,{
            // method: 'GET', 
            // mode: 'cors', 
            // cache: 'no-cache', 
            // headers: {
            //     'Content-Type': 'applications/json'
            // }
        });
        let res =await result.json();
          console.log("res",res);
        if(res){
                 setItems(res);
               }
               setItem("");
        
        //    let key = e.target.value;
        //    let result = await fetch(`http://localhost:5000/${key}`);
        //    let res =await result.json();
        //    if(result){
        //     setItem(result);
        //    }
        //    console.log(res);

    }
    return (
        <>
        <div>
            <div>
                <input type = "text" placeholder="search..."  onChange={searhProd}/>
            </div>
            <div>
                
                  {
                    items.map((el)=>{
                        console.log(el);
                        let image_pic = 'garande.png';
                       return (
                        <>
                        <div className="main_div">
                           
                            <div className="in_div">
                                
                                <img src = {el.imageUrl}/>
                                <h3 key = {el._id}>{el.com_name}</h3>
                                <a href = {el.com_url}><p>{el.CTA}</p></a>
                                
                               </div>

           
                        </div>
                        </>
                       )
                    })
                  }
            </div>
        </div>
        </>
    )
}
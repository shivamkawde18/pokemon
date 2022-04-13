import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
import "../view/Style.css"
export interface data{
    name:string,
    url:string
}
interface detailPkemon{
    name:string,
    weight:number,
    image:string
}
const List=()=>{
    const t:detailPkemon={
        name:"",
        weight:1,
        image:""
    }
    const [data,setData]=useState([]);
    const [detail,setDetail]=useState(t)
    //  useEffect(()=>{
    //   fetch("https://pokeapi.co/api/v2/pokemon").then((e)=>{
    //       console.log(e.json());
    //       return e.json()
          

    //   }).then((d)=>{
    //       console.log(d);
          
    //       setData(d)
    //   })
     
 

    // },[])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then((res) => {
            return res.json();
          })
          .then((json) => {
            setData(json.results);
          });
      }, []);
console.log(data);
const getPokemonDetail=(pname:string)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pname}`).then((res)=>{
        return res.json()
    }).then((data)=>{
        const temp :detailPkemon={

             name:pname,
             weight:data.weight,
             image:data.sprites
        }
        setDetail(temp);
    })

}


console.log(detail);


    return(
        <>
        <div style={{display:"flex"}}>
            <div className="items">
            {
             data.length!==0?
               data.map((e:data)=>{
                   
                   return(
                       <>
                       <div className="pokemons"  onClick={()=>{
                           console.log(e.name);
                           
                           getPokemonDetail(e.name)
                       }}> 
                          {
                              e.name
                          }
                          
                       </div>
                       </>
                   )
               })
               :""
            }
          
          </div>
          {Object.keys(detail).length !== 0?
         <div>
              <div>
                <b>Name :{detail.name}</b>
                <p>Weight:{detail.weight}</p>
                {
                    detail.image &&
                    Object.keys(detail.image).map((key:any) => (
                      <img alt="" src={detail.image[key]}></img>
                    ))}
                

              </div>
         </div>
          :   ""}
        </div>
        </>
    )
}
export default List;
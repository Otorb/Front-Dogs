import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from "../redux/axios/index";
import Navbar from './Navbar'
import '../style/Create.css'

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_min: "",
    life_max: "",
    image:"",
    temperament: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    if(input.temperament.includes(e.target.value)  ) return alert("ya estoy seleccionado")
    else{
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
    
  }

  function handleDelete(el) { 
                              
    setInput({                                          
      ...input,                                           
      temperament: input.temperament.filter (cc => cc !== el),     
    })                                                                 
  }
  function handleSubmit(e){
      if(!input.name){
          return alert("I need a Name")
       }else if (
          !input.image
      ){
        return alert("if you don't have IMG use this https://i.gifer.com/origin/8a/8ae7d9dcf1faad6107c974edff70a23e_w200.gif")
      }else{
          const dogCreate = {
            name: input.name,
            height: input.min_height + ' - ' + input.max_height,
            weight: input.min_weight + ' - ' + input.max_weight,
            life: input.life_min + ' - ' + input.life_max,
            image: input.image,
            temperament: input.temperament
          }
          dispatch(postDog(dogCreate))
          alert("Your Dog was created");
          setInput({
            name: "",
            min_height: "",
            max_height: "",
            min_weight: "",
            max_weight: "",
            life_min: "",
            life_max: "",
            temperament: []
          });
      
          navigate("/home");
        }
      }

      return(
          <div>
              <Navbar />
              <div className="creado">

                <h2 className="title-form" >Create a new Dog </h2>
                  <form onSubmit={(e) => handleSubmit(e)} className="form">
                  <label>Name:</label>
                  <input
            name="name"
            placeholder="Name *"
            value={input.name.toLowerCase()}
            onChange={(e) => handleChange(e)}
          />
            <label>Life Minimun: <span>{input.life_min}</span></label>
          <input
            type="range" name="life_min" min="0" max="5" step="1" 
            onChange={(e) => handleChange(e)}
          />

            <label>Life maximo: <span>{input.life_max}</span></label>
             
          <input
            type="range" name="life_max" min="6" max="20" step="2"  
            onChange={(e) => handleChange(e)} 
          />
         


           <label>Height Minimun: <span>{input.min_height}</span> </label>
          <input
            type="range" name="min_height" min="0" max="5"  step="1"  
            onChange={(e) => handleChange(e)}
          />

            <label>Height maximo: <span>{input.min_height}</span> </label>
          <input
            type="range" name="max_height" min="6" max="20" step="2"  
            onChange={(e) => handleChange(e)}
          />


          <label>Weight Minimun: <span>{input.min_weight}</span></label>
          <input
            type="range" name="min_weight" min="0" max="5" step="1"  
            onChange={(e) => handleChange(e)}
          />

            <label>Weight maximo: <span>{input.max_weight}</span></label>
          <input
            type="range" name="max_weight" min="6" max="20" step="2"  
            onChange={(e) => handleChange(e)}
          />

          <input
            name="image"
            placeholder="Url Img"
            value={input.image}
            onChange={(e) => handleChange(e)}
          />
              
          <div>
                  <label>Temperament </label>
                  <select defaultValue="default" onChange={(e) => handleSelect(e)}>
                    <option value="default" disabled hidden>Select Temperaments</option>
                    {temperaments && temperaments.map(  (temperament) => {
                      return (
                        <option key={temperament.id} value={temperament.name}>{temperament.name}</option>
                      )
                    })}
                    
                  </select>
                  {input.temperament?.map((el) => 
        <div > 
        
        <button className='dele' onClick={()=> handleDelete(el)}>x</button>
        <div className="item">
        <p className="caja caja--animada">{el}</p>
        </div>
        </div> 
        )} 
                </div>
          
          <div className="created">
            <button type="submit">Ready</button>
          </div>
                  </form>
                  
              </div>
          </div>
      )
  }


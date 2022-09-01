import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from './Navbar'
import '../style/Detail.css'
import {getDetail} from '../redux/axios'
import loading from '../images/Loading.gif'

export default function Detail() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const detail = useSelector((state) => state.detail)

    const[loader, setLoader]= useState(false)

    useEffect(() => {
        dispatch(getDetail(id))
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [])

    return(
        <div>
            <Navbar />

      <div className="presentacion">
      <div className="detalle">
        {loader ? (
          <img src={loading} alt="loader" />
        ) : (
          <div className="forma">
            <div className="title">
              <h1> Hi! I'm {detail.name}</h1>
            </div>
            <div className="person">
              <img src={detail.image} alt="" className="pero" />
            </div>
            <div className="listado det-2">
            <h3>Weight: {detail.weight} Kgs</h3>
          <h3>Height: {detail.height} cmts</h3>
          <h3>Life: {detail.life}  years</h3>
            </div>
            <div className="types">
              <p>Temperament</p>
              <div className="type">
                <h1>{detail.temperament}</h1>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
        
    )




}
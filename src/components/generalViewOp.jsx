import CardOperator from './cardOperators.jsx'
import React, { useEffect, useState } from "react";
import cx from "classnames";
import Navbar from './navBar.jsx'
import styles from "../../styles/generalView.module.scss";
import {getOperators} from "../server"


const GeneralView = () => {

  const [operators,setOperators] = useState([])

  useEffect(()=>{
    async function getAllOperators(){
      const response = await getOperators()
      console.log("Respuesta All Operators",response)
      if(response.data.operators){
      setOperators(response.data.operators)
    }
  }
  getAllOperators();
  },[])

  const UICards = operators.map(({imageProfile, name, category,startedDate,_id})=>{
    return(<CardOperator key={_id} imageProfile={imageProfile} name={name} category={category} startedDate={startedDate} ></CardOperator>)
  })


  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        {UICards}
      </div>
    </>
  )

}

export default GeneralView;
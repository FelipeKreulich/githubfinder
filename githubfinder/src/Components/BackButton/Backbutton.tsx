import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import styles from './Backbutton.module.css'

const Backbutton = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.back_btn} onClick={() => navigate(-1)}>Voltar</button>
    </div>
  )
}

export default Backbutton
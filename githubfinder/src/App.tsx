import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import { motion } from 'framer-motion'
import Toast from './Components/Toast/Toast'

function App() {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className={styles.app}>
      <h1>Github Finder</h1>
      <Outlet />
      <p>By @FelipeKreulich - 2023</p>
    </motion.div>
  )
}

export default App

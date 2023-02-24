import { Outlet } from 'react-router-dom'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <h1>Github Finder</h1>
      <Outlet />
      <p>By @FelipeKreulich - 2023</p>
    </div>
  )
}

export default App

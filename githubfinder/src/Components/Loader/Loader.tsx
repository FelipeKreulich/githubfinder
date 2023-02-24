import { FaSpinner } from 'react-icons/fa'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.load_div}>
      <FaSpinner className={styles.loader} />
    </div>
  )
}

export default Loader
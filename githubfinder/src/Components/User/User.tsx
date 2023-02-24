import { UserProps } from "../../Types/user"
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom"
import styles from './User.module.css'
import { motion } from 'framer-motion'

const User = ({login, avatar_url, followers, following, location, bio, repos_url}: UserProps) => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className={styles.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <div className={styles.bio}>
        <p>
          {
            bio ? bio : "Bibliografia não encontrada!"
          }
        </p>
      </div>
      <p className={styles.location}>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      <div className={styles.status}>
        <div>
          <p>Seguidores:</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos!</Link>
    </motion.div>
  )
}

export default User
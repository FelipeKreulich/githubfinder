import styles from './Repository.module.css'
import { RepoProps } from '../../Types/reposit'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'

const Repository = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
  description,
}: RepoProps) => {
  return (
    <div>
      <div className={styles.container}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Linguagem Utilizada: {language}</p>
        <div className={styles.starcount}>
          <AiOutlineStar className={styles.iconStar} />
          <span>Estrelas: {stargazers_count}</span>
        </div>
        <div className={styles.forkcount}>
          <AiOutlineFork className={styles.iconFork} />
          <span>Forks: {forks_count}</span>
        </div>
        <a href={`${html_url}`}>Saiba mais!</a>
      </div>
    </div>
  )
}

export default Repository
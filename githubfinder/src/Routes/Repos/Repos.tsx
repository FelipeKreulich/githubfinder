import Repository from "../../Components/Repository/Repository"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RepoProps } from "../../Types/reposit"
import styles from '../Repos/Repos.module.css'
import Backbutton from "../../Components/BackButton/Backbutton"

const Repos = () => {

  const { username } = useParams()
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null) 
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsLoading(true)
      const res = await fetch(`https://api.github.com/users/${username}/repos`)

      const dados = await res.json()
      setIsLoading(false)
      let orderedRepos = dados.sort((a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count)
      orderedRepos = orderedRepos.slice(0, 5);
      setRepos(orderedRepos)
      console.log(dados)
    }
    if (username) {
      loadRepos(username)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Backbutton />
      <h2>Veja os Repositórios de <span>{username}</span></h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repo: RepoProps) => (
            <Repository key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Repos
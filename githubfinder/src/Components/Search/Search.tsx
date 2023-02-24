type SearchProps = {
  loadUser: (userName: string) => Promise<void>
};

import { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Search = ({loadUser}: SearchProps) => {

  const success = () => {
    toast.success("✅ Usuário Encontrado!",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  const failed = () => {
    toast.error("❌ Usuário Não Encontrado!",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  const [userName, setuserName] = useState("")

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      loadUser(userName)
    }
  }

  if (!userName) {}

  return (
    <div className={styles.search}>
      <h2>Busque por um Usuário:</h2>
      <p>Conheça seus melhores repositórios!</p>
      <div className={styles.search_container}>
        <input type="text" placeholder='Digite o nome do Usuário' onChange={(e) => setuserName(e.target.value)} onKeyDown={handleKeyDown}/>
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search
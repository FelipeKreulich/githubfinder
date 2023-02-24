import { UserProps } from '../../Types/user'
import Search from '../../Components/Search/Search'
import User from '../../Components/User/User'
import Erro from '../../Components/Erro/Erro'
import Loader from '../../Components/Loader/Loader'

import { useState } from 'react'

const Home = () => {

  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async(userName: string) => {
    setIsLoading(true)
    setError(false)
    setUser(null)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    setIsLoading(false);

    if(res.status === 404) {
      setError(true)
      return;
    }

    const { avatar_url, login, location, followers, following, bio, repos_url } = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      bio,
      repos_url,
    }

    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Erro />}
    </div>
  )
}

export default Home
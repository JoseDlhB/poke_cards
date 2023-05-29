import React , {useState} from 'react'
import { UseFetchUrl } from './UseFetchUrl'

const Poke = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const status = UseFetchUrl(url)
    const {loading, data} = status
    loading? console.log('loading..'): console.log(data.results)

  return (
    <div>Poke</div>
  )
}

export default Poke
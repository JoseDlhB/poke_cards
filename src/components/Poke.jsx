import React , {useState} from 'react'
import { UseFetchUrl } from './UseFetchUrl'
import { Cards } from './Cards/Cards'

const Poke = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const status = UseFetchUrl(url)
    const {loading, data} = status
    loading? console.log('loading..'): console.log(data.results)

  return (
    <div>
        <h1>CONSUMO DE POKEAPI</h1>

        {
            loading
            ?
            <h1>Loading..</h1>
            :
            <Cards results={data.results}/>
        }
    </div>
  )
}

export default Poke
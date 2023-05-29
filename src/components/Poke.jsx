import React , {useState} from 'react'
import { UseFetchUrl } from './UseFetchUrl'
import { Cards } from './Cards/Cards'

const Poke = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const status = UseFetchUrl(url)
    const {loading, data} = status
  return (
    <div>
        <h1 style={{textAlign:"center"}}>CONSUMO DE POKEAPI</h1>

        {
            loading
            ?
            <h1 style={{textAlign:"center", margin:"150px"}}>Loading..</h1>
            :
            <div>
                <Cards results={data.results}/>
                <div className='container m-auto'>
                    <button className='m-2 btn btn-dark' onClick={()=>setUrl(data.previous)}>Anterior</button>
                    <button className='btn btn-dark' onClick={()=>setUrl(data.next)}>Siguiente</button>
                </div>
            </div>


        }
    </div>
  )
}

export default Poke
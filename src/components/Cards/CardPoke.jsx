import React from 'react'
import { UseFetchUrl } from '../UseFetchUrl'

export const CardPoke = ({url}) => {
    const status = UseFetchUrl(url)
    const {loading, data} = status
  return (
    <div>
        {
            loading
            ?
            <h5>Loading..</h5>
            :
            <div className='card' style={{width:'12rem'}}>
                <div className='card-header'>
                    <h5 className='card-title' style={{textAlign:"center"}}>{data.id}</h5>
                </div>
                <div className='card-body' style={{display:"flex", justifyContent: "center" }}>
                    <img src={data.sprites.front_default} alt="pokemon" />
                </div>
                <div className='card-footer'>
                    <p className='card-text text-capitalize' style={{display:"flex", justifyContent: "center"}}>{data.forms[0].name}</p>
                </div>
            </div>
        }
    </div>
  )
}

import React from 'react'

const FilterNuera=() =>{
  const arr=['ram', 'nag', 'ramesh','raghu']
  const filtered=arr.filter(names=>names.includes('r'))
  return(
    <div>
        <h1>from filter</h1>
      {filtered.map(
        (value,index)=><li key={index}>{value}</li>
      )}
    </div>
  )
}
export default FilterNuera

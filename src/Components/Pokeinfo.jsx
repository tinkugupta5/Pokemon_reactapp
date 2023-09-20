import React from 'react'

const Pokeinfo = ({data}) => {
  console.log(data);
  return (
    <>

    {
      (!data)?"":( 
        <>

<h1>Charmander</h1>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt=''/>
    <div className="abilities">
        <div className="group">
        <h2>blaze</h2>
        </div>
        <div className="group">
        <h2>Solar-power</h2>
        </div>
        
    </div>

    <div className='base-stat'>

        <h3>Hp:30</h3>
        <h3>attack:52</h3>
        <h3>defense:43</h3>
        <h3>Special attack 53</h3>
        <h3>Speed</h3>
        
    </div>


        </>

      )
    }

    
    
    
    
    </>
  )
}

export default Pokeinfo
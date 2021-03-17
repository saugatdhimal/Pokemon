import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetPokemon } from '../actions/PokemonActions';
import _ from 'lodash'
import './Pokemon.css'

function Pokemon(props) {
    const pokemonName = props.match.params.pokemon
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon)

    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, [])

    const showData = () => {
        if(!_.isEmpty(pokemonState.data[pokemonName])){
            const pokeData = pokemonState.data[pokemonName]
            const pokeImage = Object.values(pokeData.sprites)
            console.log(pokeData)
            console.log(pokeImage)
            return (
                <div className="pokemon">
                    
                <div className="pokemon__images">
                <h2>{pokemonName}</h2>
                    <img src={pokeData.sprites.front_default} />
                    <img src={pokeData.sprites.back_default} />
                    <img src={pokeData.sprites.front_shiny} />
                    <img src={pokeData.sprites.back_shiny} />
                </div>
                <div className="pokemon__li">
                <h2>Abilities</h2>
                    <ul>
                    {pokeData.abilities.map(x => {
                        return <li>{x.ability.name}</li>
                    })}
                    </ul>
                </div>
                <div className="pokemon__li">
                <h2>forms</h2>
                    <ul>
                    {pokeData.forms.map(x => {
                        return <li>{x.name}</li>
                    })}
                    </ul>
                </div>
                <div className="pokemon__li">
                <h2>Stat</h2>
                    <ul>
                    {pokeData.stats.map(x => {
                        return <li>{x.stat.name}</li>
                    })}
                    </ul>
                </div>
                </div>       
            )
        }
        if(pokemonState.loading){
            return <p>Loading...</p>
        }
        if(pokemonState.errorMsg !== ''){
            return <p>{pokemonState.errorMsg}</p>
        }
        return <p>Pokemon not Found...</p>
    }
    return (
        <div>
            {showData()}
        </div>
    )
}

export default Pokemon

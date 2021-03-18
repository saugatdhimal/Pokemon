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
                    <h2>{pokemonName.toUpperCase()}</h2>
                    <h3>{`Height: ${pokeData.height}`}</h3>
                    <h3>{`Weight: ${pokeData.weight}`}</h3>
                    <img src={pokeData.sprites.front_default} alt=''/>
                    <img src={pokeData.sprites.back_default} alt=''/>
                    <img src={pokeData.sprites.front_shiny} alt=''/>
                    <img src={pokeData.sprites.back_shiny} alt=''/>
                </div >
                <div className="pokemon__description">
                <div className="pokemon__li">
                <h3>Abilities</h3>
                    {pokeData.abilities.map(x => {
                        return <p>{x.ability.name}</p>
                    })}
                </div>
                <div className="pokemon__li">
                <h3>Types</h3>
                    {pokeData.types.map(x => {
                        return <p>{x.type.name}</p>
                    })}
                </div>
                <div className="pokemon__li">
                <h3>Stats</h3>
                    {pokeData.stats.map(x => {
                        return <p>{x.stat.name}</p>
                    })}
                </div>
                <div className="pokemon__li">
                <h3>Moves</h3>
                    {pokeData.moves.map(x => {
                        return <p>{x.move.name}</p>
                    })}
                </div>
                
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

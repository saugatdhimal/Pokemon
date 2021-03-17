import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { GetPokemonList } from '../actions/PokemonActions';
import { Link } from 'react-router-dom'
import './PokemonList.css'
import ReactPaginate from 'react-paginate'

function PokemonList(props) {
    const [ search, setSearch ] = useState('')
    const dispatch = useDispatch();
    const pokemonList = useSelector( state => state.PokemonList)
    useEffect(() => {
       FetchData()
    }, [])

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }
    const showData = () => {
        if(pokemonList.loading){
            return <p>Loading...</p>
        }
        if(!_.isEmpty(pokemonList.data)){
            return (
                pokemonList.data.results.map(x => {
                   return <div className="pokemonList__item">
                         <p>{x.name}</p>
                         <Link to={`/pokemon/${x.name}`}>view</Link>
                          </div>
                })
            )
        }
        
        if(pokemonList.errorMsg !== ''){
            return <p>{pokemonList.errorMsg}</p>
        }
        return <p>nothing to show</p>
    }
    return (
        <div>
            <div className="pokemonList__search">
                <input type="text" onChange={e => setSearch(e.target.value)} />
                <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>
            {showData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate 
                  pageCount={Math.ceil(pokemonList.count / 15)}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  onPageChange={(data) => FetchData(data.selected + 1)}
                  containerClassName="pagination"
                />
            )}
        </div>
    )
}

export default PokemonList

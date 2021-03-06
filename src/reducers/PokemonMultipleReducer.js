const defaultState = {
    loading: false,
    data: {},
    errorMsg: ""
}

const PokemonMultipleReducer = ( state = defaultState, action ) => {
    switch (action.type){
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "POKEMON_MULTIPLE_SUCCESS":
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.pokemonName] : action.payload
                },
                errorMsg: ""
            }
        case "POKEMON_MULTIPLE_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to get Pokemon"
            }
        default:
            return state
    }
}

export default PokemonMultipleReducer
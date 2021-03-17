const defaultState = {
    loading: false,
    data: [],
    count: 0,
    errorMsg: ''
}

const PokemonListReducer = ( state = defaultState, action) => {
    switch (action.type){
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ''
            }
        case "POKEMON_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                count: action.payload.count,
                errorMsg: ''
            }
        case "POKEMON_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to get Pokemon"
            }
        default:
            return state
    }
}

export default PokemonListReducer
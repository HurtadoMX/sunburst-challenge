
const initialState = {
    vehiculos:[],
    volkswagen:[],
    nissan:[],
    chevrolet:[]

}

//getpokemons

function rootReducer(state=initialState, action){

    switch(action.type){

        case "GET_INFO":
            return{
                ...state,
                vehiculos:action.payload,
                volkswagen:action.payload,
                nissan:action.payload,
                chevrolet:action.payload,
            }

        case "GET_INFO_LISTA":
            return{
                ...state,
                vehiculos: action.payload
            }

            case "GET_VOLKSWAGEN":
                return{
                    ...state,
                    vehiculos: action.payload
                }

                case "GET_NISSAN":
                    return{
                        ...state,
                        vehiculos: action.payload
                    }

                    case "GET_CHEVROLET":
                        return{
                            ...state,
                            vehiculos: action.payload
                        }
                        case 'GET_DETAILS' :
                        return {
                            ...state,
                            vehiculos: action.payload
                            
                        }

        default:
            return state
    }

}

export default rootReducer;
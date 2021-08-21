export default function reducer(state={},action){
    console.log(action)
    switch(action.type){
        case'ADD_ITEM':{
            const newState = action.payload
            return newState
        }
        case'ADD_IND':{
            const newState = [...state.slice(0,action.payload),{...state[action.payload],cart:!state[action.payload].cart},...state.slice(action.payload+1)]
            // return newState
            console.log(newState)
            return newState
        }
        default:
            return state
    }
}
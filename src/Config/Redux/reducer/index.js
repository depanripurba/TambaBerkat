const globalState = {
 progres:"o%",
 urlimg:[]
}
export const Reducer = (state=globalState,action)=>{

  if(action.type === 'UBAHPROGRES'){
    return{
      ...state,
      progres : action.value
    }
  }

  if(action.type === 'UBAHURL'){
    return{
      ...state,
      urlimg:[...state.urlimg,action.value]
    }
  }
  return state
}

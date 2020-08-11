const globalState = {
 progres:"o%",
 urlimg:[],
 barang:[],
 chat:[],
 iduser:''
}
export const Reducer = (state=globalState,action)=>{

  if(action.type === 'UBAHPROGRES'){
    return{
      ...state,
      progres : action.value
    }
  }
  if(action.type === 'UPDATEDATABARANG'){
    return{
      ...state,
      barang : action.value
    }
  }

  if(action.type === 'UPDATEUSERID'){
    return{
      ...state,
      iduser : action.value
    }
  }

  if(action.type === 'UPDATECHAT'){
    return{
      ...state,
      chat : action.value
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

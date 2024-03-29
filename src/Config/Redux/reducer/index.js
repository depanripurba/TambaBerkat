const globalState = {
 progres:"o%",
 urlimg:[],
 barang:[],
 chat:[],
 iduser:'',
 listuser:[],
 judulchatadmin:"",
 statuschatadmin:"",
 listchatadmin:"",
 loading:"false",
 kotakchat:false,
 onoffchatadmin:false,
 login: false
}
export const Reducer = (state=globalState,action)=>{
 
  if(action.type === 'UBAHPROGRES'){
    return{
      ...state,
      progres : action.value
    }
  }
  if(action.type === 'OCA'){
    return{
      ...state,
      onoffchatadmin : true
    }
  }
  if(action.type === 'UPDATEDATABARANG'){
    return{
      ...state,
      barang : action.value
    }
  }

  if(action.type === 'UPDATELISTCHATADMIN'){
    return{
      ...state,
      listchatadmin : action.value
    }
  }

  if(action.type === 'CHANGELOGIN'){
    return{
      ...state,
      login : action.value
    }
  }

    if(action.type === 'UPDATESTATUSCHATADMIN'){
    return{
      ...state,
      statuschatadmin : action.value
    }
  }


  if(action.type === 'JUDULCHATADMIN'){
    return{
      ...state,
      judulchatadmin : action.value
    }
  }

  if(action.type === 'UPDATEUSERID'){
    return{
      ...state,
      iduser : action.value
    }
  }

  if(action.type === 'LISTUSER'){
    return{
      ...state,
      listuser : action.value
    }
  }


if(action.type === 'USERMASIHADA'){
    return{
      ...state,
      iduser : action.value
    }
  }

  if(action.type === 'UPDATELOADING'){
    return{
      ...state,
      loading : action.value
    }
  }

  if(action.type === 'UPDATEKOTAKCHAT'){
    return{
      ...state,
      kotakchat : action.value
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


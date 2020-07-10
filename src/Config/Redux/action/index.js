import firebase from '../.././Firebase'
export const ubahuser = (user)=>(dispatch)=>{
  setTimeout(()=>(dispatch({type:'USER',value:user})),3000)
}

export const ubahlogin = (value)=>(dispatch)=>{
    dispatch({type:'UBAHLOGIN',value:value})
}

export const datauser = (value)=>(dispatch)=>{
    dispatch({type:'UBAHDATAUSER',value:value})
}

export const url = (value)=>(dispatch)=>{
    dispatch({type:'UBAHURL',value:value})
}

export const updatedatabarang = (value)=>(dispatch)=>{
  const starCountRef = firebase.database().ref('barang/')
  return new Promise((resolve,reject)=>{
      starCountRef.on('value', (snapshot)=> {
        const datalengkap = []
        const data  = Object.keys(snapshot.val())
        data.map((id)=>{
          datalengkap.push({
            key:id,
            hasil:snapshot.val()[id]
          })
        })
        resolve(datalengkap)
        dispatch({type:'UPDATEDATABARANG',value:datalengkap})
      })
  }).then((result)=>{
    console.log(result)
  })
}

export const ubahprogres = (value)=>(dispatch)=>{
    dispatch({type:'UBAHPROGRES',value:value})
}

import firebase from '../.././Firebase'
export const ubahuser = (user)=>(dispatch)=>{
  setTimeout(()=>(dispatch({type:'USER',value:user})),3000)
}

export const updatechat = (value)=>(dispatch)=>{
  const starCountRef = firebase.database().ref('chat/')
  return new Promise((resolve,reject)=>{
      starCountRef.on('value', (snapshot)=> {
        if(snapshot.val() === null){

        }else{
          console.log(snapshot.val())
          const datalengkap = []
          const data  = Object.keys(snapshot.val())
          data.map((id)=>{
          datalengkap.push({
            key:id,
            hasil:snapshot.val()[id]
          })
        })
        resolve(datalengkap)
        dispatch({type:'UPDATECHAT',value:datalengkap})
        }
        
      })
  }).then((result)=>{
    console.log(result)
    console.log("ini adalah hasil yang ingin saya tampilkan")
  })
}

export const userid = (value)=>(dispatch)=>{
  const starCountRef = firebase.database().ref('chat/')
  return new Promise((resolve,reject)=>{
      starCountRef.on('value', (snapshot)=> {
        if(snapshot.val() === null){

        }else{
          console.log(snapshot.val())
          const data  = Object.keys(snapshot.val())
          resolve('TES')
          console.log(data.length)
          dispatch({type:'UPDATEUSERID',value:'user' + data.length})
          localStorage.setItem("user", 'user' + data.length);
        }
        
      })
  }).then((result)=>{
    console.log(result)
    console.log("ini adalah hasil yang ingin saya tampilkan")
  })
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

import firebase from '../.././Firebase'
export const ubahuser = (user)=>(dispatch)=>{
  setTimeout(()=>(dispatch({type:'USER',value:user})),3000)
}

export const updatechat = (value)=>(dispatch)=>{
  let useridbaru = localStorage.getItem('user')
  const starCountRef = firebase.database().ref('chat/' + useridbaru)
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

export const listuser = (value)=>(dispatch)=>{
  const starCountRef = firebase.database().ref('chat/')
  return new Promise((resolve,reject)=>{
      starCountRef.on('value', (snapshot)=> {
        if(snapshot.val() === null){

        }else{
          const data  = Object.keys(snapshot.val())
        resolve(data)
        dispatch({type:'LISTUSER',value:data})
        }
        
      })
  }).then((result)=>{
    console.log(result)
    console.log("INI AKAN DI TAMPILKAN SAAT ANDA MEMBUKA CHAT ADMIN")
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
          let Millisecond = new Date().getMilliseconds();
          dispatch({type:'UPDATEUSERID',value:'user' + data.length + Millisecond})
          localStorage.setItem("user", 'user' + data.length + Millisecond);
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

export const tetapkan = (value)=>(dispatch)=>{
    dispatch({type:'USERMASIHADA',value:value})
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

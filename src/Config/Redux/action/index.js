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

export const updatelistchatadmin = (value)=>(dispatch)=>{
  const starCountRef = firebase.database().ref('chat/' + value)
  return new Promise((resolve,reject)=>{
      starCountRef.on('value', (snapshot)=> {
        if(snapshot.val() === null){
          console.log("hasil tidak ditemukan harap coba dengan keyword lain")
        }else{
          const datalengkap = []
          const data  = Object.keys(snapshot.val())
          data.map((id)=>{
          datalengkap.push({
            key:id,
            hasil:snapshot.val()[id]
          })
        })
        resolve(datalengkap)
        dispatch({type:'UPDATELISTCHATADMIN',value:datalengkap})
        }
        
      })
  }).then((result)=>{
    console.log(result)
    console.log("hai nama saya depanri purba senang bertemu dengan anda ya, saya sangat senang saat ini karena saya sedang senang saja")
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


export const changelocalstorage = (value)=>{
  const starCountRef = firebase.database().ref('chat/').once('value')
  starCountRef.then((snapshot)=>{
    if(snapshot.val() === null){
        localStorage.setItem("user", "userpertama")
    }else{
      const data  = Object.keys(snapshot.val())
      let Millisecond = new Date().getMilliseconds();
      localStorage.setItem("user", "user" + data.length + Millisecond)
        } 
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

export const updatejudulchatadmin = (value)=>(dispatch)=>{
    dispatch({type:'JUDULCHATADMIN',value:value})
}

export const statuschatadmin = (value)=>(dispatch)=>{
    dispatch({type:'UPDATESTATUSCHATADMIN',value:value})
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

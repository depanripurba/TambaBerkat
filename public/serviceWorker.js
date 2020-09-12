const CACHE_NAME = "version-1"
const urlToCahce = ["index.html", "offline.html"]

const self = this
console.log(self)
// proses instalasi
self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache)=>{
                console.log("opened the cache")
                return cache.addAll(urlToCahce)
            })


    )
})

// membacar reqruitmen
self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request)
            .then(()=>{
                return fetch(event.request)
                    .catch(()=>caches.match("offline.html"))
            })
    )
})

// mengaktifkan servisworker
self.addEventListener("activate", (event)=>{
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        cache.key().then((cacheNames)=>promise.All(
            cacheNames.map((cachename)=>{
                if(!cacheWhiteList.includes(cachename)){
                    return caches.delete(cachename)
                }
            })
        ))

    )
})

let api = "https://striveschool-api.herokuapp.com/api/deezer/artist"
let endPoint = new URLSearchParams(window.location.search).get("artist");
let url = api + "/" + 'eminem'

let songsOl = document.getElementById('songs-ol')
let artistPickDivNode = document.querySelector('.artist-pick')
let pageBgcontainer = document.querySelector('.header')

const getArtist = async function (url) {
    const response = await fetch(url)
    const artist = await response.json()
    // const songs = artist.songs
   console.log(artist)

   let tracklistUrl = artist.tracklist
   let tracks = await getTracklist(tracklistUrl)
   displaySongs(artist,tracks)
   
   
   
   
   
    
}

const displaySongs = function (artist,tracklist){
   
    tracklist.forEach(track => {
        let artistSongLiNode =document.createElement('li')
        artistSongLiNode.className = 'd-flex'
        artistSongLiNode.classList.add('gap-10')
        artistSongLiNode.innerHTML = `<img src="${track.md5_image}"/>
                                         <p>${track.title}</p>
                                         <div class=" d-flex justify-content-end gap-10">
                                             <p class="time">${track.rank}</p>
                                             <p class="listens">${Math.floor(track.duration / 60)+':'+track.duration%60}</p>
                                         </div>
                                         `
                                         ;
        songsOl.appendChild(artistSongLiNode)
    });
   
    pageBgcontainer.style.backgroundImage = `url(${artist.picture_xl})`
    
}

const displayArtistPick = function (artist,tracklist) {
     let artistPickImg = document.createElement('img')
     artistPickImg.setAttribute('src',object.img)
     artistPickDivNode.appendChild(artistPickImg)
     let artistPickInfo = document.createElement('div')
     artistPickInfo.className = 'd-flex flex-column'
     artistPickInfo.innerHTML = `<p>${object.posted}</p>
                                <h3>${object.TBD}</h3>
                                <p>${object.TBD}<p>`
}

const getTracklist = async function (url) {
    const response = await fetch(url)
    const tracklist = await response.json()
    // const songs = artist.songs
   console.log(tracklist) 
   return tracklist.data
}
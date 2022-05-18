let api = "https://striveschool-api.herokuapp.com/api/deezer/artist"
let endPoint = new URLSearchParams(window.location.search).get("artist");
let url = api + "/" + endPoint
let songsOl = document.getElementById('songs-ol')
let artistPickDivNode = document.querySelector('.artist-pick')
let pageBgcontainer = document.querySelector('.main-content-container')
const getArtist = async function (url) {
    const response = await fetch(url)
    const artist = await response.json()
    // const songs = artist.songs
   console.log(artist)
   displaySongs(artist)
   
   
    
}

const displaySongs = function (artist){
   
    
    let artistSongLiNode =document.createElement('li')
    artistSongLiNode.className = 'd-flex'
    artistSongLiNode.innerHTML = `<img src="${artist.picture}"/>
                                     <p>${artist.name}</p>
                                     <p class="listens">${artist.nb_fan}</p>
                                     <p class="time">${artist.duration}</p>`
                                     ;
    songsOl.appendChild(artistSongLiNode)
    pageBgcontainer.style.backgroundImage = `url(${artist.picture_xl})`
    
}

const displayArtistPick = function (object) {
     let artistPickImg = document.createElement('img')
     artistPickImg.setAttribute('src',object.img)
     artistPickDivNode.appendChild(artistPickImg)
     let artistPickInfo = document.createElement('div')
     artistPickInfo.className = 'd-flex flex-column'
     artistPickInfo.innerHTML = `<p>${object.posted}</p>
                                <h3>${object.TBD}</h3>
                                <p>${object.TBD}<p>`
}
let api = "https://striveschool-api.herokuapp.com/api/deezer/artist"
let endPoint = new URLSearchParams(window.location.search).get("artist");
let url = api + "/" + endPoint
let songsOl = document.getElementById('songs-ol')
let artistPickDivNode = document.querySelector('.artist-pick')
const getArtist = async function (url) {
    const response = await fetch(url)
    const artist = await response.json()
    const songs = artist.songs
   
    
}

const displaySongs = function (array){
   
    array.forEach(element => {
       let artistSongLiNode =document.createElement('li')
       artistSongLiNode.innerHTML = `<img src="${element.img}"/>
                                     <p>${element.name}</p>
                                     <p>${element.listens}</p>
                                     <p>${element.duration}</p>`
                                     ;
    });
    songsOl.appendChild(artistSongLiNode)
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
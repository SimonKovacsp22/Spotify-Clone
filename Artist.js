let api = "https://striveschool-api.herokuapp.com/api/deezer/artist"
let endPoint = new URLSearchParams(window.location.search).get("artist");
let url = api + "/" + 'sia'

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
   displayArtistPick(artist,tracks[2].album)
   
   
   
   
   
    
}

const displaySongs = function (artist,tracklist){
   
    tracklist.forEach(track => {
        let artistSongLiNode =document.createElement('li')
        artistSongLiNode.className = 'd-flex align-items-center pb-3'
        artistSongLiNode.classList.add('gap-10')
        artistSongLiNode.innerHTML  = `   
                                         <div class='d-flex align-items-center'>
                                         <img id='track-image'style="width:40px; height: 40px"src="${track.album.cover_small}"/>
                                         <p id='track-title'>${track.title}</p></div>
                                         <div class="song-rank-and-duration d-flex justify-content-end flex-grow-1 gap-10">
                                             <p class="time m-0">${track.rank}</p>
                                             <p class="listens m-0">${Math.floor(track.duration / 60)+':'+track.duration%60}</p>
                                         </div>
                                         `
                                         ;
        songsOl.appendChild(artistSongLiNode)
    });
   
   
    pageBgcontainer.style.backgroundImage = `url(${artist.picture_xl})`
    let indexContainer = document.querySelectorAll('li div:nth-child(1)')
    for (let index = 0; index < indexContainer.length; index++) {
        
        let indexP = document.createElement('p')
        indexP.setAttribute('id','track-index')
        indexP.innerText = `${index+1}`
        indexContainer[index].appendChild(indexP)
        
        
    }
    
}

const displayArtistPick = function (artist,album) {
     let artistPickImg = document.getElementById('artist-pick-img')
     let artistPickImgRoundedSmall = document.getElementById('artist-pick-img-rounded-small')
     artistPickImgRoundedSmall.setAttribute('src',artist.picture_small)
     artistPickImg.setAttribute('src',album.cover_small)
     let artistPickName = document.getElementById('artist-posted-by')
     artistPickName.innerText += " " + artist.name
     let artistPickBestOf = document.getElementById('artist-pick-bestof')
     artistPickBestOf.innerText = artist.name + " " + "Best Of"
    
}

const getTracklist = async function (url) {
    const response = await fetch(url)
    const tracklist = await response.json()
    // const songs = artist.songs
   console.log(tracklist) 
   console.log(tracklist.data[0].album)
   return tracklist.data
}

getArtist(url)



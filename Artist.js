let api = "https://striveschool-api.herokuapp.com/api/deezer/artist"
let endPoint = new URLSearchParams(window.location.search).get("artist");
let url = api + "/" + 'sia'


let songsOl = document.getElementById('songs-ol')
let artistPickDivNode = document.querySelector('.artist-pick')
let pageBgcontainer = document.querySelector('.header')
let pbSvgs = document.querySelectorAll('.playbar svg')
let allLiWithSongs = document.querySelectorAll('.songs-section li')
let followBtn = document.querySelector('.follow-btn')
let indexContainer = document.querySelectorAll('li div:nth-child(1)')
let SeeMore = document.querySelector('.more-btn')


const getArtist = async function (url) {
    const response = await fetch(url)
    const artist = await response.json()
   console.log(artist)
   return artist  
}

const displaySongs = function (artist,tracklist){
   
    tracklist.forEach(track => {
        let artistSongLiNode =document.createElement('li')
        artistSongLiNode.className = 'd-flex align-items-center mb-2 gap-6 pb-3 pt-2 rounded'
        artistSongLiNode.innerHTML  = `   
                                         <div class='d-flex align-items-center w-350'>
                                         <img id='track-image'style="width:40px; height: 40px"src="${track.album.cover_small}"/>
                                         <p  id='track-title'>${track.title}</p></div>
                                         <div class="song-rank-and-duration d-flex justify-content-end  gap-10">
                                             <p class="time m-0">${track.rank.toLocaleString('en-US')}</p>
                                             <p class="listens m-0">${Math.floor(track.duration / 60)+':'+track.duration%60}</p>
                                         </div>
                                         `
                                         ;
        songsOl.appendChild(artistSongLiNode)
    });
   
   
   
    pageBgcontainer.style.backgroundImage = `url(${artist.picture_xl})`
    
}
const displayIndexesForSongsList = function () {
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
     let artistH1 = document.getElementById('artist-name')
     artistH1.innerText = artist.name
     let pbImageLeft = document.getElementById('pb-img-left')
     pbImageLeft.setAttribute('src',album.cover_medium)
     pbArtistName = document.getElementById('pb-artist-name')
     pbArtistName.innerText = artist.name
     pbSongTitle = document.getElementById('pb-song-title')
     pbSongTitle.innerText = album.title        
}

const getTracklist = async function (url) {
    const response = await fetch(url)
    const tracklist = await response.json()
    console.log(tracklist.data[0])
   return tracklist.data
}



const svgHover = function () {
    pbSvgs.forEach(svg => {
        svg.addEventListener('mouseover',() => {
            svg.classList.add('fill-white')
        })
    svg.addEventListener('mouseout', ()=>{
        svg.classList.remove('fill-white')
    })
    })
}

const fillHeartGreen =  function () {
    let greenHeartFull = document.querySelector('.svg-heart-fill')
    let heartEmpty = document.querySelector('.svg-heart-empty')
    greenHeartFull.addEventListener('click',()=> {
       heartEmpty.classList.remove ('d-none')
       greenHeartFull.classList.add('d-none')
    })
    heartEmpty.addEventListener('click',()=>{
       heartEmpty.classList.add('d-none')
       greenHeartFull.classList.remove('d-none')
    })
}

const makeAlbumPictureBigger = async function () {
    let makeAlbumPicBigBtn = document.querySelector('#svg-make-album-img-big')
    let AlbumPic = document.getElementById('album-pic-big')
    let PicSrc = document.querySelector('#pb-img-left').src

    makeAlbumPicBigBtn.addEventListener('click',()=> {
        makeAlbumPicBigBtn.classList.toggle('already-green')
        AlbumPic.setAttribute('src',PicSrc)
        AlbumPic.classList.toggle('d-none')
    })
}

window.onload = async function () {
    await getArtist(url)
    let artist = await getArtist(url)
    console.log(artist)
    let tracklistUrl = artist.tracklist
   let tracks = await getTracklist(tracklistUrl)
   displaySongs(artist,tracks)
   displayArtistPick(artist,tracks[0].album)
   svgHover()
   fillHeartGreen()
   makeAlbumPictureBigger()
   changeSoundIcon()
   handleFollowBtn()
   scrollNavbar()
   displayHiddenSongs(artist,tracks)
   displayIndexesForSongsList()

   
   
}


const changeSoundIcon =  function () {
    let soundIcon = document.querySelector('.sound-icon')
    let soundIconCrossed = document.querySelector('.sound-icon-crossed')
    soundIconCrossed.addEventListener('click',()=> {
       soundIcon.classList.remove ('d-none')
       soundIconCrossed.classList.add('d-none')
    })
    soundIcon.addEventListener('click',()=>{
       soundIcon.classList.add('d-none')
       soundIconCrossed.classList.remove('d-none')
    })
}


const handleFollowBtn = function () {
  followBtn.addEventListener('click',()=> {
      followBtn.classList.toggle('follow-btn-green')
     
  })
}

window.onscroll = function () {
    scrollNavbar()
  }

function scrollNavbar() {
    let navbarBg = document.querySelector(".nav-top")
  
    //console.log(navLinks);
    if (document.documentElement.scrollTop > 2) {
      navbarBg.classList.add("scroll")
      // Change the color of navLinks on scroll
    } else {
      navbarBg.classList.remove("scroll")
      // Change the color of navLinks back to default
    }
  }

  const displayHiddenSongs = function (artist,tracklist){
   
    tracklist.forEach(track => {
        let artistSongLiNode =document.createElement('li')
        artistSongLiNode.className = 'd-flex align-items-center mb-2 gap-6 pb-3 pt-2 rounded d-none'
        artistSongLiNode.innerHTML  = `   
                                         <div class='d-flex align-items-center w-350'>
                                         <img id='track-image'style="width:40px; height: 40px"src="${track.album.cover_small}"/>
                                         <p  id='track-title'>${track.title}</p></div>
                                         <div class="song-rank-and-duration d-flex justify-content-end  gap-10">
                                             <p class="time m-0">${track.rank}</p>
                                             <p class="listens m-0">${Math.floor(track.duration / 60)+':'+track.duration%60}</p>
                                         </div>
                                         `
                                         ;
        songsOl.appendChild(artistSongLiNode)
    });  
}

SeeMore.addEventListener('click',function(event){
    LiElements = document.querySelectorAll('.songs-section li')
    event.target.innerText = "SEE LESS"
    for (let index = 4; index <LiElements.length; index++) {
        li = LiElements[index];
        li.classList.toggle('d-none')
        
    }
})
 

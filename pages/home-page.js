const arrGenre = [
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
  "https://m.media-amazon.com/images/I/91KlSJe+D9L._SS500_.jpg",
]

// Fetch API link-------------------------------------
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "8680b311b0mshfa595d3b50bced8p16d6f0jsnfe6371eab6a7",
  },
}

//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err)) && textInput.length > 2

let artistContainer = document.querySelector(".artist-container")
let headerCardContainer = document.querySelector(".header-card-container")
let featureDiv = document.querySelector(".feature-div")
function searchTitle() {
  try {
    artistContainer.innerHTML = ""
    let textInput = document.querySelector("#textInput").value

    let query = textInput !== "" ? textInput : "eminem"
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, options)
      .then((data) => data.json())
      // .then((data) => {
      //   console.log(data)
      //   return data
      // })
      .then((album) => {
        // console.log(album.data);

        for (let i = 0; i < album.data.length; i++) {
          let image = album.data[i].album.cover
          let title = album.data[i].title_short
          let albumId = album.data[i].album.id
          let albumName = album.data[i].album.title
          let track = album.data[i].preview
          // console.log(track)
          // console.log(albumId)
          // albumArr.push(title)
          let duration = album.data[i].duration
          let artist = album.data[i].artist.name
          artistContainer.innerHTML += `   
                <div class="card artist-card p-3 mb-1">
                  <img
                    src=${image}
                    class="card-img-top artist-card-img"
                    alt="..."
                  />
                  <div class="card-body artist-card-body p-1">
                    <h6 class="card-title p-0">${albumName}</h6>
                    <p class="card-text p-0">${artist}</p>
                    <small class="card-text p-0">${duration} min</small>
                    
                    <a href="./Artist.html?artist=${artist}">artist</a>
                    <a href="./album-page.html?=${albumId}">
                    <i class="bi bi-play-circle-fill play-button-img"></i>
                    </a>
                  </div>
                </div>`
          headerCardContainer.innerHTML += `
                <div class="card col-2 mb-3 header-card">
                    <div class="row g-0">
                      <div class="col-4">
                        <img
                          src=${image}
                          class="img-fluid rounded-start header-card-img"
                          alt="..."
                        />
                      </div>
                      <div class="col-8">
                        <div class="card-body header-card-body">
                          <p class="card-text">
                          ${title}
                          </p>
                          <p class="card-text">
                            <small class="m-0">${artist}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>`
          featureDiv.innerHTML += `
                    <a class="feature-item my-1">${title}</a>`
        }
      })
  } catch (error) {
    console.log(error)
  }

  document.querySelector("#textInput").value = ""
}

const searchBarShow = () => {
  artistContainer.innerHTML = ""
  console.log("first")
  let searchbar = document.getElementById("searchBar")
  searchbar.classList.toggle("search-bar-show")
  artistContainer.classList.toggle("search-bar-show")

  try {
    let textInput = document.querySelector("#textInput").value

    for (let i = 0; i < arrGenre.length; i++) {
      let genre = arrGenre[i]
      artistContainer.innerHTML += `<div class="category m-2"><img class="musicGenres p-0" src="${genre}"</div>`
    }
  } catch (error) {
    console.log(error)
  }
}

searchTitle()

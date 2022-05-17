//navbar animation--------------------------------------
window.onscroll = function () {
  scrollNavbar()
}
window.onload = () => {
  searchTitle()
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
//-----------------------------------------------------

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
//   .catch((err) => console.error(err))

let artistContainer = document.querySelector(".artist-container")
let headerCardContainer = document.querySelector(".header-card-container")
function searchTitle() {
  let textInput = document.querySelector("#textInput").value
  let best = "eminem"
  if (textInput === "") {
    textInput = best
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${textInput}`,
      options
    )
      .then((data) => data.json())
      // .then((data) => {
      //   console.log(data)
      //   return data
      // })
      .then((album) => {
        // console.log(album.data);
        for (let i = 0; i < album.data.length; i++) {
          let image = album.data[i].album.cover
          let title = album.data[i].title
          let albumId = album.data[i].album.id
          let albumName = album.data[i].album.title
          console.log(albumName)
          console.log(albumId)
          // albumArr.push(title)
          let duration = album.data[i].duration
          let artist = album.data[i].artist.name
          artistContainer.innerHTML += `   
                <div class="card artist-card p-1 mb-1">
                  <img
                    src=${image}
                    class="card-img-top artist-card-img"
                    alt="..."
                  />
                  <div class="card-body artist-card-body p-1">
                    <h6 class="card-title">${albumName}</h6>
                    <p class="card-text">${artist}</p>
                    <small class="card-text">${duration}</small>
                    
                    <a href="./Artist.html?artist=${artist}">artist</a>
                    <a href="./Album.html?=${albumId}">
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
                            <small class="m-0">${artist}</small>
                          </p>
                          <p class="card-text">
                            <small class="m-0">${title}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>`
        }
      })
      .catch((err) => console.error(err))
    document.querySelector("#textInput").value = ""
  }
}

//searchTitle()

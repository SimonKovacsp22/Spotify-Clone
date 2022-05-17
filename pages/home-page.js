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
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//     "X-RapidAPI-Key": "8680b311b0mshfa595d3b50bced8p16d6f0jsnfe6371eab6a7",
//   },
// }

// fetch("https://deezerdevs-deezer.p.rapidapi.com/album/%7Bid%7D", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err))
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "8680b311b0mshfa595d3b50bced8p16d6f0jsnfe6371eab6a7",
  },
}
let artistContainer = document.querySelector(".artist-container")
let headerCardContainer = document.querySelector(".header-card-container")
function searchTitle() {
  try {
  } catch (error) {}
  let textInput = document.querySelector("#textInput").value
  let best = "best"
  if (textInput === "") {
    textInput = best

    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${textInput}`,
      options
    )
      .then((data) => data.json())
      .then((data) => {
        //console.log(data)
        return data
      })
      .then((songs) => {
        // console.log(songs.data);
        for (let i = 0; i < songs.data.length; i++) {
          let image = songs.data[i].md5_image
          let title = songs.data[i].title
          let albumId = songs.data[i].id
          console.log(albumId)
          // songsArr.push(title)
          let duration = songs.data[i].duration
          let artist = songs.data[i].artist.name
          artistContainer.innerHTML += `   
                <div class="card artist-card p-1 mb-1">
                  <img
                    src="https://cdns-images.dzcdn.net/images/cover/${image}/500x500.jpg"
                    class="card-img-top artist-card-img"
                    alt="..."
                  />
                  <div class="card-body artist-card-body p-1">
                    <h6 class="card-title">${title}</h6>
                    <p class="card-text">${artist}</p>
                    <small class="card-text">${duration}</small>
                    
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
                          src="https://cdns-images.dzcdn.net/images/cover/${image}/500x500.jpg"
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

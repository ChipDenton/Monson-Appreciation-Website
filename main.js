const home = document.getElementById("home");
const talks = document.getElementById("talks");
const books = document.getElementById("books");
const gallery = document.getElementById("gallery");

const mainContent = document.getElementById("main-content");
const subHeader = document.getElementById("subHeader");

home.onclick = () => {
  if (selected !== "home") {
    selected = "home";
    mainContent.innerHTML = 
    `
    <p>"Thomas Spencer Monson (August 21, 1927 – January 2, 2018) was an American religious leader, author, and the 16th President of The Church of Jesus Christ of Latter-day Saints (LDS Church). As president, he was considered by adherents of the religion to be a prophet, seer, and revelator. Monson's early career was as a manager at the Deseret News, a Utah newspaper owned by the LDS Church. He spent most of his life engaged in various church leadership positions and public service.</p></br>
    <p>Monson was ordained an LDS apostle at age 36, served in the First Presidency under three church presidents, and was the President of the Quorum of the Twelve Apostles from March 12, 1995, until he became President of the Church on February 3, 2008. He succeeded Gordon B. Hinckley as church president."</p></br>
    <p>&nbsp;&nbsp;&nbsp;-Wikipedia</p></br>
    <p>Learn more about Thomas S. Monson on Wikipedia, or from the Church of Jesus Christ of Latter-day Saints here and here.</p>
    `;
    subHeader.innerHTML = "Prophet of the Latter Days"
  }

  window.onresize = () => {}
}

talks.onclick = () => {

  if (selected !== "talks") {
    selected = "talks";
    mainContent.innerHTML = `
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for talks.."><br>
    <iframe id="video" src="https://www.youtube.com/embed/8VJD2eMcX8M" frameborder="0" allowfullscreen></iframe>
    `;
    subHeader.innerHTML = "Talks";

    let video = document.getElementById("video");
    let videoWidth = video.offsetWidth;
    video.style.height = (videoWidth * 9 / 16).toString() + "px";
  }

  window.onresize = () => {
    console.log('onreize')
    let video = document.getElementById("video");
    let videoWidth = video.offsetWidth;
    video.style.height = (videoWidth * 9 / 16).toString() + "px";
  }
}

books.onclick = () => {
  if (selected !== "books") {
    selected = "books";
    mainContent.innerHTML = "books";
    subHeader.innerHTML = "Books";
  }

  window.onresize = () => {}
}

gallery.onclick = () => {
  if (selected !== "gallery") {
    selected = "gallery";
    mainContent.innerHTML = "gallery";
    subHeader.innerHTML = "Gallery";
  }

  window.onresize = () => {}
}

let selected = "";
home.click();
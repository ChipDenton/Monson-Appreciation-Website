function loadTalk(link) {
  document.getElementById("video").src = link;

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function searchForTalks() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("talkSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("talkTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

const home = document.getElementById("home");
const talks = document.getElementById("talks");
const books = document.getElementById("books");

const mainContent = document.getElementById("main-content");
const subHeader = document.getElementById("subHeader");
const legend = document.getElementById("legend");

home.onclick = () => {
  if (selected !== "home") {
    selected = "home";
    mainContent.innerHTML = 
    `
    <p>"Thomas Spencer Monson (August 21, 1927 - January 2, 2018) was an American religious leader, author, and the 16th President of The Church of Jesus Christ of Latter-day Saints (LDS Church). As president, he was considered by adherents of the religion to be a prophet, seer, and revelator. Monson's early career was as a manager at the Deseret News, a Utah newspaper owned by the LDS Church. He spent most of his life engaged in various church leadership positions and public service.</p></br>
    <p>Monson was ordained an LDS apostle at age 36, served in the First Presidency under three church presidents, and was the President of the Quorum of the Twelve Apostles from March 12, 1995, until he became President of the Church on February 3, 2008. He succeeded Gordon B. Hinckley as church president."</p></br>
    <p>&nbsp;&nbsp;&nbsp;-Wikipedia</p></br>
    <p>Learn more about Thomas S. Monson on <a href="https://en.wikipedia.org/wiki/Thomas_S._Monson" target="_blank">Wikipedia</a>, or from the Church of Jesus Christ of Latter-day Saints <a href="https://www.churchofjesuschrist.org/church/leader/thomas-s-monson?lang=eng" target="_blank">here</a> and <a href="https://history.churchofjesuschrist.org/landing/prophets-of-the-restoration/thomas-s-monson?lang=eng" target="_blank">here</a>.</p>
    `;
    subHeader.innerHTML = "Prophet of the Latter Days"
  }

  window.onresize = () => {}
  legend.innerHTML = "";
}

talks.onclick = async () => {

  if (selected !== "talks") {
    selected = "talks";
    subHeader.innerHTML = "Conference Talks";

    // Create Table of Videos
    tableStart = `
    <table id="talkTable">
      <tr class="tableHeader">
        <th>Name</th>
        <th>Date</th>
        <th class="centered-table-header">Watch</th>
        <th class="centered-table-header">Read</th>
      </tr>
    `

    const jsonData = await fetch("./talks.json").then((response) => {
      if (response.ok) {
        return response.json();
      }
    });

    tableMid = "";

    jsonData.forEach(element => {
      tableMid += "<tr><td>" + element[0] + "</td><td>" + element[1] + '</td><td>'
      
      if (element[2] && element[2] !== "x") {
        tableMid += `<img src="img/youtube.png" height=20px onclick="loadTalk('` + element[2] + `')">`
      }
      else if (element[2] === "x") {
        tableMid += '<p class="centered-text">❌</p>'
      }
      tableMid += '</td>'

      if (element.length > 3 && element[3]) {
        tableMid += `<td><a href=`+element[3]+` target="_blank"><img src="img/read.jpg" height=20px></a></td>`
      }

      tableMid += '</tr>'
    });

    tableEnd = "</table>";

    mainContent.innerHTML = `
    <input type="text" id="talkSearch" onkeyup="searchForTalks()" placeholder="Search for talks.."><br>
    <iframe id="video" src="https://www.youtube.com/embed/8VJD2eMcX8M" frameborder="0" allowfullscreen></iframe>
    ` + tableStart + tableMid + tableEnd;

    let video = document.getElementById("video");
    let videoWidth = video.offsetWidth;
    video.style.height = (videoWidth * 9 / 16).toString() + "px";

    legend.innerHTML = `
    <img src="img/youtube.png" height=20px><p>Watch Video on this Page</p>
    </br><img src="img/read.jpg" height=20px><p>Read Talk Outside this Site</p>
    </br><p>❌</p><p>No Video Available</p>
    `
  }

  window.onresize = () => {
    let video = document.getElementById("video");
    let videoWidth = video.offsetWidth;
    video.style.height = (videoWidth * 9 / 16).toString() + "px";
  }
}

books.onclick = () => {
  if (selected !== "books") {
    selected = "books";
    mainContent.innerHTML = `
    <p>Monson has written a number of books, some of which are compilations of speeches given by him, or of quotes. <br>
    Others discuss particular LDS gospel themes. He also wrote Faith Rewarded which is an autobiographical account  <br>
    about his work in leading the church in Eastern Europe.</p>
    <ul style="list-style-type:square;">
      <a target="_blank" href="https://deseretbook.com/p/pathways-perfection-thomas-s-monson-2762"><li>(1973) - Pathways to Perfection</li></a>
      <a target="_blank" href="https://deseretbook.com/p/search-christmas-spirit-booklet-thomas-s-monson-2758"><li>(1977) - In Search of the Christmas Spirit</li></a>
      <a target="_blank" href="https://deseretbook.com/p/your-best-self-thomas-s-monson-2772"><li>(1979) - Be Your Best Self</li></a>
      <a target="_blank" href="https://deseretbook.com/p/conference-classics-vol-1-thomas-s-monson-2771"><li>(1981) - Conference Classics</li></a>
      <a target="_blank" href="https://deseretbook.com/p/conference-classics-vol-2-thomas-s-monson-2770"><li>(1983) - Conference Classics Volume II</li></a>
      <a target="_blank" href="https://deseretbook.com/p/christmas-gifts-blessings-thomas-s-monson-69000"><li>(1983) - Christmas Gifts, Christmas Blessings</li></a>
      <a target="_blank" href="https://deseretbook.com/p/conference-classics-vol-3-thomas-s-monson-2769"><li>(1984) - Conference Classics Volume III,</li></a>
      <a target="_blank" href="https://deseretbook.com/p/favorite-quotations-collection-thomas-s-monson-2767"><li>(1985) - Favorite Quotations from the Collection of Thomas S. Monson</li></a>
      <a target="_blank" href="https://deseretbook.com/p/live-good-life-thomas-s-monson-2764"><li>(1988) - Live the Good Life</li></a>
      <a target="_blank" href="https://deseretbook.com/p/search-jesus-christmas-message-thomas-s-monson-2761"><li>(1992) - The Search for Jesus</li></a>
      <a target="_blank" href="https://deseretbook.com/p/inspiring-experiences-build-faith-life-ministry-thomas-s-monson-2765"><li>(1994) - Inspiring Experiences That Build Faith: From the Life and Ministry of Thomas S. Monson</li></a>
      <a target="_blank" href="https://deseretbook.com/p/faith-rewarded-personal-account-prophetic-promises-east-german-saints-thomas-s-monson-2768"><li>(1996) - Faith Rewarded: A Personal Account of Prophetic Promises to the East German Saints</li></a>
      <a target="_blank" href="https://deseretbook.com/p/invitation-exaltation-thomas-s-monson-2773"><li>(1997) - Invitation to Exaltation</li></a>
      <a target="_blank" href="https://deseretbook.com/p/meeting-your-goliath-thomas-s-monson-2763"><li>(1997) - Meeting your Goliath</li></a>
      <a target="_blank" href="https://deseretbook.com/p/christmas-dress-ellen-thomas-s-monson-2760"><li>(2004) - A Christmas Dress for Ellen</li></a>
      <a target="_blank" href="https://deseretbook.com/p/teachings-thomas-s-monson-79694"><li>(2011) - Teachings of Thomas S. Monson</li></a>
      <a target="_blank" href="https://deseretbook.com/p/prophets-voice-messages-thomas-s-monson-85372"><li>(2012) - A Prophet's Voice: Messages from Thomas S. Monson</li></a>
      <a target="_blank" href="https://deseretbook.com/p/consider-blessings-thomas-s-monson-89741"><li>(2013) - Consider the Blessings: True Accounts of God's Hand in Our Lives</li></a>
    </ul>
    `;
    subHeader.innerHTML = "Books";
  }

  window.onresize = () => {}
  legend.innerHTML = "";
}

let selected = "";
home.click();
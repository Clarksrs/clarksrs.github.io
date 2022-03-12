//tab Functions
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  };

//Twitch Embed
new Twitch.Embed("twitch-embed", {
  width: 360,
  height: 240,
  channel: "skippyzk",
  parent: ["https://clarksrs.github.io/", "https://pages.github.io/"]
});

var options = {
  width: 360,
  height: 240,
  channel: skippyzk,
  video: "",
  collection: "",
  parent: ["clarksrs.github.io/", "pages.github.io/"]
};

//Toggle Music Track Descriptions
function toggleDescription(trackID){
  document.getElementById(`'"'${trackID}'"'`).toggle();
  console.log("Change Attempted");
};


function toggleDisplay(elemId) {
  var x = document.getElementById(elemId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

// Get the element with id="defaultOpen" and click on it
window.addEventListener("load", function(){
  this.document.getElementById("defaultOpen").click();
});
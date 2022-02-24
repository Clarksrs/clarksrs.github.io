//tabFunction
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

// Get the element with id="defaultOpen" and click on it
window.addEventListener("load", function(){
  this.document.getElementById("defaultOpen").click();
});

new Twitch.Embed("twitch-embed", {
  width: 360,
  height: 240,
  channel: "skippyzk",
  // Only needed if this page is going to be embedded on other websites
  parent: ["https://clarksrs.github.io/", "https://pages.github.io/"]
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  var player = embed.getPlayer();
  player.play();
});
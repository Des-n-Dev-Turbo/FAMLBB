function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    document.getElementsByClassName(pageName)[i].style.display = "block";
  }

}

function navpic() {
  window.location.href = "gameinfo.html#newsTab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("newsTab").click();

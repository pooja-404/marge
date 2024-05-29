function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClass("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function previewImage(event) {
  var input = event.target;
  var reader = new FileReader();

  reader.onload = function () {
    var imgElement = document.getElementById("uploadedImage");
    imgElement.src = reader.result;
    imgElement.style.display = "block";
  };

  reader.readAsDataURL(input.files[0]);
}

// attendance
document.addEventListener("DOMContentLoaded", function () {
  const attendanceList = document.getElementById("attendance-list");
  const markPresentButton = document.getElementById("mark-present");
  window.markPresent = function () {
    const currentTime = new Date().toLocaleString();
    if (!markPresentButton.disabled) {
      addRecord(currentTime);
      markPresentButton.disabled = false;
    }
  };

  function addRecord(time) {
    attendanceList.innerHTML = "";
    const listItem = document.createElement("li");
    listItem.textContent = `  Present at ${time}`;
    attendanceList.appendChild(listItem);
  }
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

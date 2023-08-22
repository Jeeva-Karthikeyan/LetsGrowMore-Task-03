function productUpdate() {
  if (
    document.getElementById("name").value !== "" &&
    document.getElementById("email").value !== "" &&
    document.getElementById("website").value !== "" &&
    document.getElementById("imageLink").value !== ""
  ) {
    productAdd();
    formClear();
    document.getElementById("name").focus();
  } else {
    document.getElementById("errorMsg").innerHTML =
      "Please Fill all the fields";
  }
}

function productAdd() {
  var genderOutput = genderOption();
  var skillOutput = skillSelected();

  var productTable = document.getElementById("tableDetails");

  if (productTable.getElementsByTagName("tbody").length === 0) {
    var tbody = document.createElement("tbody");
    productTable.appendChild(tbody);
  }

  var newRow = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.className = "animated fadeIn";
  td1.style.height = "100px";
  td1.style.fontWeight = "bold";
  td1.style.backgroundColor = "rgb(249, 249, 249, 0.1)";

  td1.innerHTML =
    "Name: " +
    document.getElementById("name").value +
    "<br>" +
    "Gender: " +
    genderOutput +
    "<br>" +
    "Email: " +
    document.getElementById("email").value +
    "<br>" +
    "Website: " +
    '<u style="color:blue">' +
    document.getElementById("website").value +
    "</u>" +
    "<br>" +
    "Skills: " +
    skillOutput;

  var td2 = document.createElement("td");
  td2.className = "animated fadeIn";
  td1.style.backgroundColor = "rgb(249, 249, 249,0.5)";
  var a = document.createElement("a");
  a.href = document.getElementById("imageLink").value;
  a.target = "_blank";
  var img = document.createElement("img");
  img.src = document.getElementById("imageLink").value;
  img.alt = "Photo";

  a.appendChild(img);
  td2.appendChild(a);

  newRow.appendChild(td1);
  newRow.appendChild(td2);

  productTable.querySelector("tbody").appendChild(newRow);
}

function genderOption() {
  const selectedOptions = document.querySelectorAll('input[name="genderOption"]');
  let selectedValue;
  for (const option of selectedOptions) {
    if (option.checked) {
      selectedValue = option.value;
      break;
    }
  }
  return selectedValue;
}

function skillSelected() {
  const selectedOptions = document.querySelectorAll('input[name="skillOption"]');
  let selectedValues = [];
  for (const option of selectedOptions) {
    if (option.checked) {
      selectedValues.push(option.value);
    }
  }
  return selectedValues.join(", ");
}

function formClear() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
  document.getElementById("imageLink").value = "";
  document.getElementById("male").checked = true;
  document.getElementById("js").checked = true;
  document.getElementById("html").checked = false;
  document.getElementById("css").checked = false;
  document.getElementById("errorMsg").innerHTML = "<br>";
}

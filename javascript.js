function addRow() {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var gender = document.getElementById("gender").value;
    var birthdate = document.getElementById("birthdate").value;
    var cells = [firstname, lastname, gender, birthdate];
    for (var i = 0; i < cells.length; i++) {
      var cell = newRow.insertCell(i);
      cell.appendChild(document.createTextNode(cells[i]));
    }
  }


function validateForm() {
    var firstname = document.forms["myForm"]["firstname"].value;
    var lastname = document.forms["myForm"]["lastname"].value;
    var gender = document.forms["myForm"]["gender"].value;
    var birthdate = document.forms["myForm"]["birthdate"].value;
  
    if (firstname == "" || lastname == "" || gender == "" || birthdate == "") {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return false;
    }
  }
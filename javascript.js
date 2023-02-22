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
      if (firstname == "" || lastname == "" || gender == "" || birthdate == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      }
    }
    }
  
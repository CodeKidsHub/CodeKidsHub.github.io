function validate(){
	
  let g = document.forms["form"]["fileToUpload"].value;
  let x = document.forms["form"]["fullname"].value;
  let y = document.forms["form"]["dateofbirth"].value;
  let z = document.forms["form"]["gender"].value;
  let f = document.forms["form"]["phoneContry"].value;
  let w = document.forms["form"]["email"].value;
  
  
  if (g == "" && (x == "" || x.trim()=="") && y =="" && (z.trim()=="" || z=="") && (f== "" || f.trim() == "") && (w == ""|| w.trim() == "")) {
    alert("Please enter the fields!");
    return false;
  }
  
  
  
  if (g == "") {
    alert("Please upload a photo of the child !");
    return false;
  }
    document.getElementById('previousPhoto').style.display = 'none';
    document.getElementById('uploadedPhoto').style.display = 'block';
     displayUploadedPhoto()
  
  if (x == "" || x.trim()=="") {
    alert("Please enter the name !");
    return false;
  }
  var startsWithLetter = /^[A-Za-z]/.test(fullname.value);
  if(!startsWithLetter){
    alert("The name cannot start with numbers or spaces !");
    return false;	
  }
  
  
  const dobYear = new Date(dateofbirth.value).getFullYear();
  if (y==""){
    alert("Please enter the date of birth !");
    return false;	
  }
  if (dobYear > 2017) {
    alert("Children younger than 6 years old are not accepted !");
    return false;
  }
  
  
  
  if (z.trim()=="" || z=="") {
    alert("Please select the gender !");
    return false;
  }
  
  
  
  if (f== "" || f.trim() == "") {
      alert("Please enter the phone number !");
      return false;
  }
  if (!/^\d{10}$/.test(f)){
      alert("Phone number should be 10 digits !");
      return false;
  }		
  
  
  if (w == ""|| w.trim() == "") {
    alert("Please enter the email address !");
    return false;
  }
  
  
  localStorage.setItem('childName', x.value);
  
  // Retrieve the existing array from local storage
  var storedNamesJSON = localStorage.getItem("names");
  
  const childName = document.getElementById("fullname").value;
  
  // Retrieve the existing array from local storage or initialize an empty array
  let namesArray = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : [];
  
  // Add the new name to the array
  namesArray.push(childName);
  
  // Convert the updated array to a JSON string
  const updatedNamesJSON = JSON.stringify(namesArray);
  
  // Store the updated array in local storage
  localStorage.setItem("names", updatedNamesJSON);
  
  
  // Now, the "names" key in local storage holds an array of names
  printChildInfo()
  function printChildInfo() {
    // Retrieve the child information from localStorage
    var childName = document.getElementById('fullname').value;
    var childPhoto = document.getElementById('uploadedPhoto').src; 
    var childDOB = document.getElementById('dateofbirth').value;
    var childGender = document.querySelector('input[name="gender"]:checked').value;
    var childPhone = document.getElementById('phoneContry').value;
    var childEmail = document.getElementById('email').value;
  
    // Create a new window
    var printWindow = window.open('', '_blank');
  
    
      var content = `
          <html>
              <head>
                  <title>Child Information</title>
              </head>
              <body style="border-color:black; border-style:solid; border-width:medium; padding:3% 1% 3% 3%; margin:3em 3em 300px 3em;">
                  <img style="width:50%; height: 70%;" src="${childPhoto }" alt="Child Photo">
                  <p><strong>Child Name:</strong> ${childName}</p>
                  <p><strong>DOB: </strong> ${childDOB}</p>
                  <p><strong>Gender:</strong> ${childGender}</p>
                  <p><strong>Phone:</strong> ${childPhone}</p>
                  <p><strong>Email:</strong> ${childEmail}</p>
              </body>
          </html>
      `;
  
      printWindow.document.write(content);
  
      printWindow.document.close();
  
    
      printWindow.onbeforeunload = function () {
     
          console.log("Print window closed or canceled");
      };
  
      // Print the window
      printWindow.print();
  }
  
  return true;
  
  }//end of the function
  
  
  
  
  
  function displayUploadedPhoto() {
      const fileInput = document.getElementById('fileToUpload');
      const uploadedPhoto = document.getElementById('uploadedPhoto');
      
      if (fileInput.files && fileInput.files[0]) {
          const reader = new FileReader();
  
          reader.onload = function (e) {
              uploadedPhoto.src = e.target.result;
          document.getElementById('previousPhoto').style.display = 'none';
              uploadedPhoto.style.display = 'block';
          };
  
          reader.readAsDataURL(fileInput.files[0]);
      }
  }
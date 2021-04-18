const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const form = document.getElementById("form");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    if(fname.value==="" || lname.value==="")
    {
        alert("Please enter all details")
        e.preventDefault();
    }
  
});

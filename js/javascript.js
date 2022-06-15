console.log("postal code");
let tpo = document.querySelector(".totalPostOffice");
let poffice = document.querySelector(".postOffice");
let message = document.querySelector(".msg");
let tbl = document.querySelector("table");
let length;

document.querySelector(".search").addEventListener('click', function (e) {
    e.preventDefault();
    let cityName = document.querySelector("#cityName").value;
    if (cityName == "") {
        document.querySelector("#cityName").focus();
        document.querySelector(".msg").innerHTML = "Please Enter City Name...";
        document.querySelector("button").style.display = "block";
        document.querySelector(".search img").style.display = "none";
    }
    else {
        document.querySelector("button").style.display = "none";
        document.querySelector(".search img").style.display = "block";
    }

    tbl.innerHTML = `<tr><th>Pincode</th><th>Post Office Name</th><th>Branch Type</th><th>District</th><th>Region</th><th>State</th><th>Country</th></tr>`;
    fetch("https://api.postalpincode.in/postoffice/" + cityName + "")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            message.innerHTML = (data[0]['Message']);
            document.querySelector("button").style.display = "inline";
            document.querySelector(".search img").style.display = "none";
            length = (data[0]['PostOffice']).length;
            console.log(length);
            for (let i = 0; i < length; i++) {
                tbl.innerHTML += `<tr><td>${data[0]['PostOffice'][i]['Pincode']}</td><td>${data[0]['PostOffice'][i]['Name']}</td><td>${data[0]['PostOffice'][i]['BranchType']}</td><td>${data[0]['PostOffice'][i]['District']}</td><td>${data[0]['PostOffice'][i]['Region']}</td><td>${data[0]['PostOffice'][i]['State']}</td><td>${data[0]['PostOffice'][i]['Country']}</td></tr>`
            }
        })

}) 

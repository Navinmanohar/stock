   // api url
   const api_url =
   "http://localhost:3000/main/fetch";

// Defining async function
async function getapi(url) {

   // Storing response
   const response = await fetch(url,{
    method:'GET'})

   // Storing data in form of JSON
   var data = await response.json();
   console.log(data);
   if (response) {
       hideloader();
   }
   show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
   document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
   let tab =
       `<tr>
       <th>Name</th>
       <th>last</th>
       <th>buy</th>
       <th>sell</th>
       <th>volume</th>
       <th>base_unit</th>
       </tr>`;

   // Loop to access all rows
   for (let r of data.data) {
       tab += `<tr>
   <td>${r.name} </td>
   <td>${r.last}</td>
   <td>${r.buy}</td>
   <td>${r.sell}</td>
   <td>${r.volume}</td>		
   <td>${r.base_unit}</td>		
</tr>`;
   }
   // Setting innerHTML as tab variable
   document.getElementById("employees").innerHTML = tab;
}
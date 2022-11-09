
const dis = document.getElementById("catagory");
fetch("../database/database.json")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i <= data.length; i++) {
      dis.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top"
        src="${data[i].image}"
        alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text">${data[i].description}
        </p>
        <a href="#" class="btn btn-primary">View Doctors</a>
      </div>
    </div>
`
    }
  })








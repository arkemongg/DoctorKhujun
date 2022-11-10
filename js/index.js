
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


  const doctorsCard = document.getElementById("box");

  for(let i = 1;i<100;i++){
    doctorsCard.innerHTML +=`<div  class="box${i} box">
    <div class="image-doctor">
        
    </div>
    <!-- <div class="social-doctors">
    <li class="facebook"></li>
    <li class="facebook"></li>
    <li class="facebook"></li>
    <li class="facebook"></li>
    </div> -->

    <div class="doctor-name">
        <h2 class="d-name">Dr.Zinia Zara</h2>
        <h3 class="d-detail">Cardiology</h3>
        <h4 class="d-education">MBBS, M.D of Medicine</h4>
    </div>
    <div class="view-docotor">
        <button class="btn btn-primary">View Details</button>
    </div>
    
</div>`
  }








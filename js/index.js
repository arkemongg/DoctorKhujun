
function getId (url){
  let id = "";
  for(let i = url.length-1 ; i > 0 ;i--){
    if(url[i]=="="){
      break;
    }
      id =url[i]+id;
  }
  return id;
}


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
        <a href="./doctorspage.html?id=${data[i].name}" class="btn btn-primary">View Doctors</a>
      </div>
    </div>
`
    }
  })


  // doctors card /  doctorspage.html;

  const doctorsCard = document.getElementById("box");

  const url = window.location.href;

  let id = getId(url);
  
  fetch("../database/doctors.json")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i <= data.length; i++) {
      if(data[i].designation.includes(id)){
        console.log(data[i]);
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
        <h3 class="d-name">${data[i].name}</h3>
        <h5 class="d-detail">${data[i].designation}</h5>
        <p class="d-education">${data[i].description}</p>
    </div>
    <div class="view-docotor">
        <a href="./doctordetails.html?id=${data[i].id}" class="btn btn-primary">View Details</a>
    </div>
    
</div>`
      }
    }
  })

  const doctordetails = document.querySelector(".doctor-details");
  
  fetch("../database/doctors.json")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i <= data.length; i++) {
        if(data[i].id==id){
          console.log(data[i]);
          doctordetails.innerHTML = `
          <div class="doctor-details-wrapper">
              <div id="doctor-details-box" class="doctor-dtails-flex-container">
                  
                  <div class="doctor-details-left">
                      <div class="doctor-details-left-img-area">
                          <div class="doctor-details-left-img">
      
                          </div>
                          <div class="doctor-details-left-name-area">
                              <h4 class="doctor-name">Name : ${data[i].name}</h4>
      
                              <h5 class="doctor-category">${data[i].designation}</h5>
      
                              <h5 class="doctor-education">${data[i].description}</h5>
      
                          </div>
      
                      </div>
                      <div class="doctor-details-left-personal-area">
                          <h1> Personal Info </h1>
                          
                          <div class="doctor-underline">
      
                          </div>
                          <h4 class="doctor-email">Email: Not Available </h4>
                          <h5 class="doctor-office">Phone: Not Available</h5>
                          Office: N/A;
                      </div>
      
                      <div class="doctor-details-left-emergency-area">
                          <div class="doctor-details-left-emergency-img">
                          
                          </div>
      
                          <div class="doctor-details-left-emergency-number">
                          <h4>Emergency Cases</h4>
      
                          <h5 class="emergency-number">
                              999
                          </h5>
                          <h5 class="emergency-number">
                              16263
                          </h5>
                          </div>
      
                      </div>
                  </div>
      
                  <div class="doctor-details-right">
                      <div class="doctor-details-right-education-area">
                          <h3>Education :</h3>
                          <div class="education-underline">
      
                          </div>
                          <div class="education-year-institute-degree odd">
                              <li class="education-year">Year</li>
                              <li class="education-Degree">Degree</li>
                              <li class="education-institute">Institute</li>
                          </div>
      
                          <div class="education-year-institute-degree even">
                              <li class="education-year">****</li>
                              <li class="education-Degree">MBBS</li>
                              <li class="education-institute">MymenSingh Medical Collegee</li>
                          </div>
                          <div class="education-year-institute-degree odd">
                              <li class="education-year">****</li>
                              <li class="education-Degree">DDV</li>
                              <li class="education-institute">DEU</li>
                          </div>
      
      
                      </div>
      
                      <div class="doctor-details-right-experience-area">
                          <h3>Experienced :</h3>
                          <div class="experience-underline">
      
                          </div>
                          <div class="experience-department-position-hospital odd">
                              <li class="experience-department">Department</li>
                              <li class="experience-position">Position</li>
                              <li class="experience-hospital">Hospital</li>
                          </div>
      
                          <div class="experience-department-position-hospital even">
                              <li class="experience-department">Cardiology</li>
                              <li class="experience-position">....,...., Specalist</li>
                              <li class="experience-hospital">MymenSingh Medical Collegee</li>
                          </div>
                          
                          <div class="experience-department-position-hospital odd">
                              <li class="experience-department">Cardiology</li>
                              <li class="experience-position">....,...., Specalist</li>
                              <li class="experience-hospital">MymenSingh Medical Collegee</li>
                          </div>
      
      
                      </div>
      
                      <div class="doctor-details-right-visiting-area">
                          
                          <h3>Visiting Hour<span class="h3-visit">(time updated according to their visiting card)</span></h3>
                          
                          <div class="underline-appointment">
      
                          </div>
                          <p><span class="h3-visit">Time updated according to their visiting card.</span></p>
                          <div class="doctor-details-right-appointment-area-visiting-area">
                              <div class="doctor-details-right-visiting-area-time odd">
                              <li class="visiting-day">Day</li>
                              
                              <li class="visiting-to">Time</li>
                              </div>
                              <div class="doctor-details-right-visiting-area-time even">
                                <li class="visiting-day">Regular</li>
                                
                                <li class="visiting-time">2PM to 5PM</li>
                                </div>
                          </div>
      
                      </div>
      
                      <div class="doctor-details-right-address-area">
                          
                        <h3>Booking and Address</h3>
                        
                        <div class="underline-address">
      
                        </div>
                        
                        <div class="doctor-details-right-address">
                          <div class="doctor-details-right-address-area-booking odd">
                            <li class="booking one">Booking No : </li>
                            
                            <li class="booking-num two">${data[i].booking}</li>
                            </div>
                            <div class="doctor-details-right-address-area-booking even">
                              <li class="booking-hospital one">Hospital Name: </li>
                              
                              <li class="booking-hospital-name two"> ${data[i].hospital} </li>
                            </div>
                            <div class="doctor-details-right-address-area-booking odd">
                              <li class="hospital-address-ad one">Address : </li>
                              
                              <li class="hospital-address two">${data[i].address}</li>
                            </div>
                            <div class="doctor-details-right-address-area-booking even">
                              <li class="hospital-hotline one">Hospital Hotline : </li>
                              
                              <li class="hospital-hotline-number two">+8801545454215</li>
                            </div>
                        </div>
      
                    </div>
      
                      
                  </div>
                      
              </div>
              </div>
          </div>`
          break;
        }
        
    }
  })

  

  
  
 








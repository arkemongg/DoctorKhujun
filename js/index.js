

let slidebtns = document.querySelector("body > div.page-two.container-fluid > div > div.click-flex > div");

slidebtns.addEventListener('click',(x)=>{
    if(x.target.classList=='others'){
        let item = x.target;
        let items = item.parentElement.children;

        for(let i = 0 ; i < items.length;i++){
            items[i].className = "others";
        }
        item.className = "active";
    }
})

const slider = document.querySelector(".horizontal-slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});




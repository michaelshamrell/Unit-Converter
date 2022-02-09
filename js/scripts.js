

let meter = 0
let feet = 0
let mtf = 0




function meterToFeetCalculator() {
  meter = Number(document.getElementById("meterToFeetInput").value);
  let feet = 3.281
  mtf = meter * feet
  console.log(mtf)
  let mtfEl = document.getElementById("mtf-el")
  mtfEl.textContent = mtf
  console.log(mtfEl)
  
}
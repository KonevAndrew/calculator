window.addEventListener("load", function () {
    let inp1 = document.querySelector(".inp1");
    let inp2 = document.querySelector(".inp2");
    let btn = document.querySelector(".go");
    let res = document.querySelector(".res");
    let select = document.querySelector(".select");
    let clear = document.querySelector(".clear");
    let form = document.querySelector(".form");
  
    btn.addEventListener("click", function () {
      if (select.value === "+") {
        let sum = parseInt(inp1.value) + parseInt(inp2.value);
        res.innerHTML = sum;
      } else if (select.value === "-") {
        let sum = parseInt(inp1.value) - parseInt(inp2.value);
        res.innerHTML = sum;
      } else if (select.value == "/") {
        let sum = parseInt(inp1.value) / parseInt(inp2.value);
        res.innerHTML = sum;
      } else if (select.value == "*") {
        let sum = parseInt(inp1.value) * parseInt(inp2.value);
        res.innerHTML = sum;
      } 
    });
  
    clear.addEventListener("click", function () {
      res.innerHTML = "";
      inp1.value = "";
      inp2.value = "";
      btn.disabled = true;
      clear.disabled = true;
    });
  
  //   form.addEventListener("click", function () {
  //     // if (inp1.value && inp2.value !== "") {
  //     //   console.log("kk");
  //     //   btn.disabled = false;
  //     //   clear.disabled = false;
  //     // } 
  
  //   });
  // inp1.addEventListener("input", function() {
  // 	console.log("one")
  // 	btn.disabled = false;
  //   });
  
    inp2.addEventListener("input", function() {
      console.log("two")
      clear.disabled = false;
      btn.disabled = false;
    });
  
  });
  
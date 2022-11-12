var dark = document.getElementById("dark");

 dark.onclick = function(){
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-theme")
    var theme;


    if(SetTheme.classList.contains("dark-theme")){
        console.log("Dark mode");
        theme = "DARK";
        
    }else{
        console.log("Light mode");
        theme = "LIGHT";
      
        
    }
    
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if(GetTheme === "DARK"){
        document.body.classList = "dark-theme";
        dark.checked = true; 
    }else{
        document.body.classList = "";
        dark.checked = false;
    }
}, 0);


document.getElementById("info_label").innerHTML = ((navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].replace(/_/g,".").replace("OS","iOS") + " - ANAS V1.0"); 





function show(elementID) {
  const ele = document.getElementById(elementID);
  if (!ele) {
    alert("no such element");
    return;
  }

 
  const pages = document.getElementsByClassName('page');
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }



ele.style.display = 'block';


  
}


var trans = document.getElementById("trans");

 trans.onclick = function(){

trans.style.transform = 'translateX(-20vw)';

}

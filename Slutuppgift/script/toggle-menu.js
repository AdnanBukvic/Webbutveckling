function visaMeny() {
    var header = document.getElementById("header");


    if (header.style.visibility === "hidden") {
        header.style.visibility = "visible";
    } else {
        header.style.visibility = "hidden";
    }
    
}
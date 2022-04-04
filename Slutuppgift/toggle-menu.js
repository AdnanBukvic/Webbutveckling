function visaMeny() {
    var meny = document.getElementById("meny");
    var header = document.getElementById("header");
    if (meny.style.display === "none") {
        meny.style.display = "block";
        header.style.color = "white";

    } else {
        meny.style.display = "none";
    }
}
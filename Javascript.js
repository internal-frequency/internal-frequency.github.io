var colLinks = document.getElementsByClassName("col-links");
var colContents = document.getElementsByClassName("col-contents");

function openCol(colname){
    for(colLink of colLinks){
    colLink.classList.remove("active-link");
    
    }
    
    for(colContent of colContents){
    colContent.classList.remove("active-col");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(colname).classList.add("active-col");
}
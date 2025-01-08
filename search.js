import {
    Accounts,
    Volibear,
    Malphite,
    Nocturn,
    QuestionMark
} from './Champion.js';




var pages = [
    {title: "Accounts", content: Accounts},
    {title: "Volibear", content: Volibear},
    {title: "Malphite", content: Malphite},
    {title: "Nocturn", content: Nocturn},
    {title: "??", content: QuestionMark},

]













//sorting pages
var sortedTitle = pages.sort((a, b) => a.title.localeCompare(b.title));

var searchBar = document.getElementById("mainSearchBar");
var indexHeader = document.getElementById("index-header");
var linksContainer = document.getElementById("links");
var suggestions = document.getElementById("searchSuggestions");
var logo = document.getElementById("logo");
var returnDiv = document.getElementById("return_div");
searchBar.setAttribute("placeholder", "Search Hero to Counter")



var closeButton = document.getElementById("close_btn");
var overlay = document.getElementById("shadow_wrapperOff");
var popupTitle = document.getElementById("pop_upTitle");
var popUpDiv = document.getElementById("pop_up");



searchBar.addEventListener("keyup", (e) => {
    var searchValue = searchBar.value.toLowerCase();
    suggestions.innerHTML = "";
    var pagesTitles = pages.filter((e) => {
        return e.title.toLowerCase().includes(searchValue) || e.content.toLowerCase().includes(searchValue);
    })
    pagesTitles.forEach((i)=>{
        var a = document.createElement("a");
        a.innerHTML = i.title;
        suggestions.appendChild(a)
        a.addEventListener("click", (links) =>{
            suggestions.innerHTML = "";
            links.preventDefault();
            overlay.setAttribute("id", "shadow_wrapperOn");
            document.title = `Lucky | ${i.title}`;
            popupTitle.innerHTML = i.title;
            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "iContent");
            newDiv.innerHTML = i.content;
            popUpDiv.appendChild(newDiv)
        })
    })
    if(searchValue == ""){
        suggestions.innerHTML = "";
    } //clear if blanks
})



function addLinks(){
    pages.forEach((i)=>{
        var a = document.createElement("a");
        a.innerHTML = i.title;
        a.setAttribute("href", "#")
        linksContainer.appendChild(a);   
        a.addEventListener("click", (links) =>{
            links.preventDefault();
            overlay.setAttribute("id", "shadow_wrapperOn");
            document.title = `Lucky | ${i.title}`;
            popupTitle.innerHTML = i.title;
            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "iContent");
            newDiv.innerHTML = i.content;
            popUpDiv.appendChild(newDiv)
        })
    })
}
addLinks();


closeButton.addEventListener("click", (e) =>{
    overlay.setAttribute("id", "shadow_wrapperOff");
    popUpDiv.removeChild(document.getElementById("iContent"))
    searchBar.value = "";
    document.title = "Lucky";
})
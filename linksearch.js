
var itemSets = [
    {link: "https://youtube.com/playlist?list=PL03dM5mTrjVHMSAyZli34O72bCwui6u7E&si=NyC2LY8vnsrwYKJ1", title: "French Movies"},
    {link: "https://www.youtube.com/", title: "Youtube"},
    {link: "https://youtu.be/deRSkCehkWI?si=XnGew9h56_pezj4g", title: "XQC Content Warning"},
    {link: "https://www.youtube.com/watch?v=rTqgicJOJkc", title: "XQC Core Core"},
    {link: "", title: ""},
    {link: "", title: ""},
    {link: "", title: ""},
    {link: "", title: ""},
]





var linkSection = document.getElementById("linkSection");
var SearchBar = document.getElementById("linkSearch");
var linkSuggestions = document.getElementById("linkSuggestions");



SearchBar.addEventListener('keyup', () => {

    var input = SearchBar.value.toLowerCase(); 

    var titles = itemSets.filter((titless) => {
        return titless.title.toLowerCase().startsWith(SearchBar.value.toLowerCase())
    })
    
    linkSuggestions.innerHTML = "";
    titles.forEach((sets) =>{
        var a = document.createElement("a");
        a.setAttribute("href", `${sets.link}`)
        a.setAttribute("target", "_blank")
        a.innerHTML = `<br>${sets.title}`
        linkSuggestions.appendChild(a)
    })
    if(input == ""){
        linkSuggestions.innerHTML = "";
    } //clear if blanks
})


function integrateLinks(){
    itemSets.forEach((sets) =>{
        var a = document.createElement("a");
        a.setAttribute("href", `${sets.link}`)
        a.setAttribute("target", "_blank")
        a.innerHTML = `<br>${sets.title}`
        linkSection.appendChild(a)
    })
}

integrateLinks();
//Access Key from UnSplash Api
const accessKey = "_FwXrbV1fTzTwX5DkQL959BYhkdQdS9-7FCJYCK9lV4";


// creating variable for the element

const searchForm   = document.getElementById("search-form");
const searchBox    = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn  = document.getElementById("show-more-btn");

// Variable for search and from page
let keyword = "";
let page = 1;

//calling the Api
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    

    //response 
    const response = await fetch(url);
    const data = await response.json();

    if(page == 1){
        searchResult.innerHTML = "";
    }

    //Showing the result that get from the search
    const results = data.results;
   
    results.map((result)=>{

        const image = document.createElement("img"); // create a new element with the img tag
        image.src = result.urls.small; // this will get from console tags

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html; //add link in the anchor "a" tag
        imageLink.target = "_blank"; //image will be open in new browser

        //image will be append in the "a" tag
        imageLink.appendChild(image);

        //will be displayed in result
        searchResult.appendChild(imageLink);

    })
    
    //show more btn will be displayed after the load images
    showMoreBtn.style.display = "block";

}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();

})
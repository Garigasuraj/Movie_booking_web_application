const movie_div =  document.getElementById("movie_body")
const movie_expand = document.getElementById("more_movies")

const slide_image = document.getElementById("slide_img")
const location = document.getElementById("location")

init()
function init(){
    var x = window.matchMedia("(max-width: 500px)")
    movie_expand.addEventListener("click",()=>{
        if(movie_div.style.height == "1600px"){
            document.getElementById("more_movies").innerHTML = `See All <i class="fa-solid fa-angle-right"></i>`
            
            movie_div.style.overflow = "hidden"
            movie_div.style.height = "520px"
        }else{
            if(x.matches){
                document.getElementById("more_movies").innerHTML = `See All <i class="fa-solid fa-angle-down"></i>`
                movie_div.style.height = "5600px"
                movie_div.style.overflow = "visible"
            }
            else{
                document.getElementById("more_movies").innerHTML = `See All <i class="fa-solid fa-angle-down"></i>`
                movie_div.style.height = "1600px"
                movie_div.style.overflow = "visible"
            }
           
        }
    })
    // slide_image.addEventListener("mouseover",()=>{
    //     slide_image.style.webkitAnimationPlayState = "paused"
    // })
    // slide_image.addEventListener("mouseout",()=>{
    //     slide_image.style.webkitAnimationPlayState = "running"
    // })
    get_data()
    
}
async function get_data(){
    const data  = await fetch("https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2023-03-05&primary_release_date.lte=2023-04-10&api_key=ff19bfe41b529c552ef39e747fc0fc02&language=en-US")
    const response = await data.text()
    const response_string = JSON.parse(response)
    console.log(response_string)
    render_data(response_string)
    // save_data()
    const movie_ele = document.querySelectorAll("#movie_body #movie_div")
    movie_ele.forEach((ele,index)=>{
        ele.addEventListener("click",()=>{
            console.log(ele.children[2].firstElementChild.innerHTML)
            window.localStorage.setItem("movie_name",ele.children[2].firstElementChild.innerHTML)
            window.localStorage.setItem("movie_image",ele.firstElementChild.firstElementChild.firstElementChild.currentSrc)
        })
    })
}

// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2023-01-15&primary_release_date.lte=2023-02-22&api_key=ff19bfe41b529c552ef39e747fc0fc02&language=en-US

function render_data(data){
    let html = ""
    for(let i=0; i<15; i++){
        html += `<div id="movie_div">
        <a href="Seating.html"> <div id="movie_list">
            <img src=https://image.tmdb.org/t/p/original${data.results[i].poster_path}>
        </div></a>
        <div id="movie_rating">
            <i class="fa-solid fa-thumbs-up"></i> ${data.results[i].popularity} K
        </div>
        <div id="movie_name">
            <b style="font-size: 18px;">${data.results[i].original_title}</b>
            <div>Action/Adventure/crime</div>
        </div>
    </div>`}
    // adding the elements to the div
    movie_div.innerHTML = html

    let html_1 = "" ; let index = 0;
    html_1 += 
    `  <div id="images">
    <img src=https://image.tmdb.org/t/p/original${data.results[index].backdrop_path}>
    </div>
    <div id="images">
        <img src=https://image.tmdb.org/t/p/original${data.results[index+1].backdrop_path}>
    </div>
    <div id="images">
        <img src="https://image.tmdb.org/t/p/original${data.results[index+2].backdrop_path}">
    </div>
    <div id="images">
        <img src="https://image.tmdb.org/t/p/original${data.results[index+3].backdrop_path}">
    </div>
    <div id="images">
        <img src="https://image.tmdb.org/t/p/original${data.results[index+4].backdrop_path}">
    </div>`
    // adding the elements to the div

    slide_image.innerHTML = html_1
}
location.addEventListener("click",()=>{
    window.localStorage.setItem("location",location.value)
})
const Qr = document.getElementById("qr_generator")

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let movie_name = 
init()
function init(){
    let movie_data = window.localStorage.getItem("movie_name")
    get_data(movie_data)
    random_num_gen()
    get_movie_info()
}
function get_data(data){
    Qr.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Thanks For Booking ${data} Movie!">`
}
function random_num_gen(){
    let num = ""
    for(let i=0; i<8; i++){
        num += alphabet.charAt(Math.ceil(Math.random()*36))
    }
    document.getElementById("qr_code").innerHTML = num
}
function get_movie_info(){

    document.getElementById("moviename").innerHTML = window.localStorage.getItem("movie_name")

    document.getElementById("time").innerHTML = window.localStorage.getItem("date")

    document.getElementById("image").innerHTML = `<img src="${window.localStorage.getItem("movie_image")}">`

    let seat = window.localStorage.getItem("seat_number")
    document.getElementById("quantity").innerHTML = `Quantity: ${Math.floor(seat.length/4.5)}`
    document.getElementById("seat_num").innerHTML = `CLASSIC - ${seat}`

    let ticket_price = Number(window.localStorage.getItem("final_price"))
    let tax_price =  Number(window.localStorage.getItem("convenience_fee"))
    document.getElementById("price").innerHTML = `RS. ${ticket_price}`
    document.getElementById("tax_price").innerHTML = `RS. ${tax_price}`
    document.getElementById("f_price").innerHTML = `RS. ${(ticket_price+tax_price).toFixed(2)}`
}


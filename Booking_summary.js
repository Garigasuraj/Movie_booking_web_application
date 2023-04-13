const price = document.getElementById("final_price")
const seat = document.getElementById("seat_number")

let base_value = 0
let gst_value = 0
let Tickets_price = window.localStorage.getItem('final_price')

init()
function init(){
    get_data()
    cal_base_Gst()
    final_price()
}

function get_data(){
    seat.innerHTML = `GOLD- ${window.localStorage.getItem("seat_number")} (${Math.floor(window.localStorage.getItem('seat_number').length/4.5)} Tickets)
    <div>SCREEN 1</div>`
    document.getElementById('main_ticket_price').innerHTML = `<div><i class="fa-solid fa-indian-rupee-sign fa-xs"></i> ${window.localStorage.getItem("final_price")}</div>` 
}
function cal_base_Gst(){
    base_value = (Tickets_price*9.5)/100
    gst_value = (base_value*18)/100

    document.getElementById("base_price").innerHTML = `<i class="fa-solid fa-indian-rupee-sign fa-xs"></i>${base_value}`
    document.getElementById("gst_price").innerHTML = `<i class="fa-solid fa-indian-rupee-sign fa-xs"></i>${gst_value}`
    document.getElementById("tax").innerHTML = `<i class="fa-solid fa-indian-rupee-sign fa-xs"></i>${base_value+gst_value}`

    window.localStorage.setItem("convenience_fee",base_value+gst_value)
}
function final_price(){
    let final_price = base_value+gst_value+Number(Tickets_price)
    document.getElementById("final_price").innerHTML =`<i class="fa-solid fa-indian-rupee-sign fa-xs"></i>${parseFloat(final_price.toFixed(5))}` 
}

alert("Maximum 7 Tickets Per Transaction")
document.getElementById("movie_name").innerHTML = window.localStorage.getItem("movie_name")
const time = document.getElementById("movie_timming")

let date = new Date()

const seat_left = document.getElementById("seating_left")
const L_seat_row =  document.getElementById("L-row")
const R_seat_row =  document.getElementById("R-row")
const seat_right = document.getElementById("seating_right")

const price = document.querySelector("#ticket_price")

const seat_no = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

init()
function init(){
    render_seats()
    row()
    let movie_date = `INOX: GSM Mall, ${window.localStorage.getItem("location")} | ${day[date.getDay()]}, ${date.getDate()+3} ${month[date.getMonth()]}, 01:30pm`
    document.getElementById("movie_timming").innerHTML = movie_date

    window.localStorage.setItem("date",movie_date)
}
const seat = document.querySelectorAll("#seat_1")

let value = 0
seat_book_and_price_update()
let seat_data = [] 

function seat_book_and_price_update(){
    seat.forEach((ele,b)=>{
        seat[b].addEventListener("click",()=>{
            const event =  new Event("custom_event")
            seat[b].dispatchEvent(event)
            
            if(seat[b].style.color == "white" &&  seat[b].style.background != "grey"){
                value -= (b+1*200)-b
                // for css styles
                seat[b].style.background = "white"
                seat[b].style.color = "rgb(100, 204, 59)"
                seat_data.pop()
                seat_data.pop()
            }
            else if(seat[b].style.color = "rgb(100, 204, 59)"){
                value += (b+1*200)-b
                // for css styles
                seat[b].style.background = "rgb(100, 204, 59)"
                seat[b].style.color = "white"
            }
            if(value == 0){
                price.style.visibility = "hidden"
            }
            else if(value != 0){
                price.style.visibility = "visible"
            }
            console.log("the total value",value)
            price.innerHTML = `<div>Pay RS.${value}.00 </div>`
            save_seat_data_in_storage()
        })
    })
    saving_seat_number()
}
function save_seat_data_in_storage(){
    window.localStorage.setItem("final_price",value)
    window.localStorage.setItem("seat_number",seat_data)
}
function row(){
    let html = ""
    for(let i=0; i<9; i++){
       html += `<div>${seat_no[i]}</div>`
    }
    if(L_seat_row){
        L_seat_row.innerHTML = html
        R_seat_row.innerHTML = html
    }
}
function render_seats(){
    let html = ""; 
    for(let i=0; i<9; i++){
        for(let j=1; j<9; j++){
            html += `<i id="seat_1" class="selected fa-sharp fa-${j}"></i>`
        }
        html += `<br>` 
    }
    if(seat_left){
        seat_left.innerHTML = html
        seat_right.innerHTML = html
    }
}
function saving_seat_number(){
        seat.forEach((ele,b)=>{
        seat[b].addEventListener("custom_event",()=>{
            if(b<=7 || b>=72 && b<=79){
                if(b>=72 ){
                    b -= 71
                    seat_data.push(` ${seat_no[0]}-${b.toString()[0]}`)
                }else{
                    seat_data.push(` ${seat_no[0]}-${b+1}`)
                }
            }
            else if(b>=8 && b<=15 || b>=80 && b<=87){
                if(b>=80){
                    b -= 69
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }else{
                    b += 3
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }
            }
            else if(b>=16 && b<=23 || b>=88 && b<=95){
                if(b>=88){
                    b -= 67
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }else{
                    b += 5
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }
            }
            else if(b>=24 && b<=31 || b>=96 && b<=103){
                if(b>=96){
                    b -= 65
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }else{
                    b += 7
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }
            }
            else if(b>=32 && b<=39 || b>=104 && b<=111){
                if(b>=104){
                    b -= 63
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }else{
                    b += 9
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }
            }
            else if(b>=40 && b<=47 || b>=112 && b<=119){
                 if(b>=112){
                    b -= 61
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }else{
                    b += 11
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }
            }
            else if(b>=48 && b<=55 || b>=120 && b<=127){
                if(b>=120){
                    b -= 59
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }else{
                    b += 13
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }
            }
            else if(b>=56 && b<=63 || b>=128 && b<=135){
                if(b>=128){
                    b -= 57
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }else{
                    b += 15
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }
            }
            else if(b>=64 && b<=71 || b>=136 && b<=143){
                if(b>=136){
                    b -= 55
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }else{
                    b += 17
                    seat_data.push(` ${seat_no[b.toString()[0]]}-${b.toString()[1]}`)
                }
            }
        })
    })
}
/// block some seats using for loop
seat_booked()
function seat_booked(){
    for(let i=3; i<seat.length; i = i+5){
        seat[i].style.background = "grey"
        seat[i].style.borderColor = "grey"
        seat[i].style.color = "white"
        seat[i].style.cursor = "no-drop"
    }
 
}

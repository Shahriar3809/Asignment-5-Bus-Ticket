console.log("Connected");



const allSeat = document.getElementById('busSeat').childNodes;
let availableSeat = 40;
let increase = 0;
let total = 0;
let seatPrice = 550;
for(let seat of allSeat) {
        seat.addEventListener('click', function(event) {
            
            if(!(increase >= 4) && !seat.classList.contains("clicked")) {
                const remains = document.getElementById('availableSeat');
                seat.classList.add('clicked');
                availableSeat--;
                remains.innerText = availableSeat;

                event.target.style.backgroundColor = 'green';
                event.target.style.color = 'white';

                const increased = document.getElementById('incresed');
                increase++;
                increased.innerText = increase;     
                if(increase === 4) {
                    document.getElementById('applyBtn').removeAttribute('disabled');
                } else {
                    document.getElementById('applyBtn').setAttribute('disabled', true);
                }
            } else {
                alert("You can't Buy More Than 4 Tickets");
            }
            total = increase * seatPrice;
            const totalAmount = document.getElementById('total');
            totalAmount.innerText = total;   
        })
}







document.getElementById('applyBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('couponField').value;
    let discount = 0;

    
if(inputValue.toUpperCase() === "NEW15") {
    
    
        discount = total * 15/100;
        const displayDisc = document.getElementById('displayDiscount');
        const p = document.createElement('p');
        p.innerText = `Your discount is: ${discount}`;
        displayDisc.appendChild(p);
        console.log("15")
        document.getElementById('couponArea').classList.add('hidden');


        

    
} else  if(inputValue.toUpperCase() === "COUPLE20"){
    
        discount = total * 20/100;
        const displayDisc = document.getElementById('displayDiscount');
        const p = document.createElement('p');
        p.innerText = `Your discount is: ${discount}`;
        displayDisc.appendChild(p);
        console.log("20")
        document.getElementById('couponArea').classList.add('hidden');
} else {

}
})

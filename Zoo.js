var Totalprice; // Declare Totalprice globally

function calculatePrice() {
    var age = document.getElementById('age').value;
    age = parseInt(age); 

    if (age >= 0 && age <= 3) {
        Totalprice = 0;
    } else if (age >= 4 && age <= 12) {
        Totalprice = 80;
    } else if (age > 12 && age <= 18) {
        Totalprice = 100;
    } else if (age > 18 && age <= 65) {
        Totalprice = 150;
    } else if (age > 65) {
        Totalprice = 0;
    } else {
        document.getElementById('price').innerHTML = 'Please enter valid age';
        return; // Exit the function if age is invalid
    }

    document.getElementById('price').innerHTML = "Entry Price: R" + Totalprice;
    document.getElementById('kamo').style.display='block';
}

function purchasePrice() {
    const quantity = document.getElementById('quantityInput').value;
    
    var total=quantity*Totalprice;
    document.getElementById('itq').innerHTML='Total Ticket Price is: R' + total;
}






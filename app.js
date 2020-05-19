let distance = document.getElementById('distanceInput');
let hours = document.getElementById('hoursInput');
let minutes = document.getElementById('minutesInput');
let seconds = document.getElementById('secondsInput');

const distanceSelect = document.querySelector('select');

const averageSpeedBtn = document.getElementById('averageSpeedBtn');

const para = document.querySelector('p');



averageSpeedBtn.addEventListener('click', function speed() {
        //if (choice === 'miles') {
            let mile = distance.value;
                    
                    let time = (+hours.value) + (+minutes.value) / 60.0 + (+seconds.value) / 3600.0;
        
                    let formula = mile / time;

                    let rounded1 = Math.round(formula);
        
                    para.textContent = 'average speed : ' + rounded1 + ' Mph'; 
                
                });
            






                    
                
               
    








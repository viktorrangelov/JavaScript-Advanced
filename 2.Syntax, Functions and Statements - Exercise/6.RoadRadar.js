function checkSpeed(speed,place) {
    let speedLimit = 0;
    let status;

    function getStatus(speedLimit,speed) {
        let difference = speed - speedLimit;
        if(speedLimit-speed >= 0){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }else if (speed - speedLimit <=20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
        }else if (speed - speedLimit > 20 && speed - speedLimit <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
        }else{
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
        }
        
    }
    switch (place) {
        case 'motorway':
            speedLimit = 130;
            getStatus(speedLimit,speed);

        break;
        case 'interstate':
            speedLimit = 90;
            getStatus(speedLimit,speed);
        break;
        case 'city':
            speedLimit = 50;
            getStatus(speedLimit,speed);
        break;
        case 'residential':
            speedLimit = 20;
            getStatus(speedLimit,speed);
        break;
    
        default:
            break;
    }

}

checkSpeed(120, 'interstate')
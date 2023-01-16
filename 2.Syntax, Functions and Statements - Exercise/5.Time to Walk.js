function findTime(numberOfSteps,footPrintinMeters,speedKmH) {
    let totalDistance = numberOfSteps*footPrintinMeters/1000;
    let numberOfBreaks = Math.floor(totalDistance/0.5);
    let metersPerHour = speedKmH;
    

    let timeInMinutes = (totalDistance/metersPerHour)*60;
    
    console.log(timeInMinutes);
    
    
}
findTime(4000, 0.60, 5)
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(stat in statistics){
    // console.log(statistics[stat])
    if (stat.charAt(0) === 'r' ||  statistics[stat] % 2 == 1) {
        console.log(statistics[stat]);
    }
}
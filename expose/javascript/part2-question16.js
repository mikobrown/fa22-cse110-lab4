let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const carCategory in statistics) {
    if (carCategory[0] == 'r' || statistics[carCategory] % 2 == 1) {
        console.log(statistics[carCategory])
    }
}
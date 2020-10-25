let sportsOne: string[] = ["golf", "cricket", "tennis", "swimming"];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

for (let tempSport of sportsOne) {
    if (tempSport == "tennis") {
        console.log(`${tempSport} << my favorite!`);
    } else {
        console.log(tempSport);
    }
}
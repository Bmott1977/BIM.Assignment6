
//// node timeofday

const getTimeOfDay = time => {
    time = new Date().getHours()
    if (time >= 4 && time < 12) { return 'Morning' }
    else if (time >= 12 && time < 17) { return 'Afternoon' }
    else if (time >= 17 || time < 4) { return 'Evening' }
}

const isMorning = time => {
    time = new Date().getHours()
    if (time >= 4 && time < 12) {return true}
    else return false
}

const isAfternoon = time => {
    time = new Date().getHours()
    if (time >= 12 && time < 17) {return true}
    else return false
}

const isEvening = time => {
    time = new Date().getHours()
    if (time >= 17 || time < 4) {return true}
    else return false
}

//getTimeOfDay()

// console.log(isMorning())
// console.log(isAfternoon())
// console.log(isEvening())

module.exports = {getTimeOfDay, isMorning, isEvening, isAfternoon}
const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const eventOpening = '05 dec 2024'

function countDown(){
    const dateEventOpening = new Date(eventOpening)
    const today = new Date()
    const timeLeft = (dateEventOpening - today)/1000

    const dayLeft = Math.floor(timeLeft/60/60/24)
    const hourLeft = Math.floor(timeLeft/60/60) % 24
    const minuteLeft = Math.floor(timeLeft/60) % 60
    const secondLeft = Math.floor(timeLeft) % 60

    day.innerHTML = addZero(dayLeft) + 'D'
    hour.innerHTML = addZero(hourLeft) + 'H'
    minute.innerHTML = addZero(minuteLeft) + 'M'
    second.innerHTML = addZero(secondLeft) + 'S'
}

function addZero(number){
    if(number < 10){
        number = '0' + number
    }

    return number
}

countDown()
setInterval(countDown, 1000)
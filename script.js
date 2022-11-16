setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentTime = new Date()
  const seconds = currentTime.getSeconds() / 60
  const minutes = (seconds + currentTime.getMinutes()) / 60
  const hours = (minutes + currentTime.getHours()) / 12
  setRotation(secondHand, seconds)
  setRotation(minuteHand, minutes)
  setRotation(hourHand, hours)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
const timeLeft = document.getElementById('time-left')

const birthday_date = new Date('06/19/2023') //month day year

const second = 1000   //milliseconds
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown() {
  const today = new Date()
  const timeSpan = birthday_date - today

  if (timeSpan <= -day) 
  {
    timeLeft.innerHTML = ' We Hope you had a nice Birthday!!'
    clearInterval(timerId)
    return
  }

  if (timeSpan <= 0)
  {
    timeLeft.innerHTML = 'Happy Birthday!! Have a Blast Today'
    clearInterval(timerId)
    return
  }


  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  timeLeft.innerHTML = days + '-Days  ' + hours + '-Hours  ' + minutes + '-Minutes  and ' + seconds + '-Seconds left'
}

timerId = setInterval(countDown, second)
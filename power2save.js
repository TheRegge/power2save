let power2Data = []
exports.set = (data) => {
  power2Data = []
  let index = 1
  for (let i = 0; i < data.length; i++) {
    power2Data[index] = data[i]
    index *= 2
  }
}

exports.get = (val) => {
  const maxValue = Math.pow(2, power2Data.filter((n) => n).length)
  const days = []
  for (i = maxValue; i >= 1; i *= 0.5) {
    if ((val & i) === i && power2Data[i]) {
      days.push(power2Data[i])
    }
  }
  return days.reverse()
}

exports.getValue = (days) => {
  let val = 0
  const cache = []
  days.forEach((day) => {
    if (power2Data.indexOf(day) > -1 && cache.indexOf(day) === -1) {
      cache.push(day)
      val += power2Data.indexOf(day)
    }
  })
  return val
}

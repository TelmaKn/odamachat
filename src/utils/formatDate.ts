export const formatDateToLocalTime = (date: Date): string => {
  let hour = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hour >= 12 ? "PM" : "AM"
  hour = hour % 12
  hour = hour ? hour : 12
  minutes = minutes < 10 ? parseInt("0" + minutes) : minutes
  return `${hour}:${minutes} ${ampm}`
}

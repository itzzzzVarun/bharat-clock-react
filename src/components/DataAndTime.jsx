function DateAndTime () {
  let date  = new Date()
  console.log(date)
  return <p className="lead">This is the current time : {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
}

export default DateAndTime
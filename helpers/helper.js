module.exports = {
  simpleDate: function(date) {
    let _date = new Date(date)
    let yyyy = _date.getFullYear()
    let mm = ('0' + (_date.getMonth()+1)).slice(-2)
    let dd = ('0' + (_date.getDate())).slice(-2)
    let hh = ('0' + (_date.getHours())).slice(-2)
    let nn = ('0' + (_date.getMinutes())).slice(-2)
    return `${yyyy}-${mm}-${dd} ${hh}:${nn}`
  },
  toCurrency: function(num) {
    if (typeof num == 'number')
      return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, '$1.')
    return num
  },
  statusDeposit: function(status) {
    let msg = ['Cancel', 'Verified', 'Confirmed', 'Pending']
    let btn = ['btn-danger', 'btn-success', 'btn-primary', 'btn-warning']
    return { status: msg[status], btn: btn[status] }
  }
}
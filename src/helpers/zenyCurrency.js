module.exports = function(value) {
  value = parseFloat(value)

  if (!isFinite(value) || (!value && value !== 0)) return ""

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "Ƶ"
}

export function formatCurrency(value) {
  value = parseFloat(value);

  if (!isFinite(value) || (!value && value !== 0)) return "";

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "Ƶ";
}

export function formatItemName(value) {
  return value.replace(/_/g, " ");
}

export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

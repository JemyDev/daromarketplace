export function getImageItem(id) {
  return `https://site.daro.fr/getImg/large/${id}.gif`;
}

export function getImageMap(name) {
  return `https://site.daro.fr/getImg/maps_xl/${name}.gif`;
}

export function serialize(obj) {
  let str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }

  return str.join("&");
}

export function removeEmpty(obj) {
  const o = JSON.parse(JSON.stringify(obj)); // Clone source oect.

  Object.keys(o).forEach(key => {
    if (o[key] && typeof o[key] === "object") o[key] = removeEmpty(o[key]);
    else if (o[key] === undefined || o[key] === null || o[key] === '')
      // Recurse.
      delete o[key]; // Delete undefined and null.
    else o[key] = o[key]; // Copy value.
  });

  return o; // Return new object.
};

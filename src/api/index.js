import Vue from "vue";

export default {
  getItem(cb) {
    Vue.http.get("https://daro.fr/api/api.php?m=shop&filtre=card").then(
      response => cb(response.body),
      response => {
        console.error("Api call failed");
      }
    );
  },
  getShopsByItems(cb, searchTerm) {
    Vue.http
      .get(`https://daro.fr/api/api.php?m=shop&filtre=${searchTerm}`)
      .then(
        response => cb(response.body),
        response => {
          console.error("Api call failed");
        }
      );
  },
  getShop(cb, id) {
    Vue.http.get(`https://daro.fr/api/api.php?m=shopd&shopID=${id}`).then(
      response => cb(response.body),
      response => {
        console.error("Api call failed");
      }
    );
  }
};

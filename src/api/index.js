import Vue from "vue";

export default {
  async getShopsByItems(q) {
    let response = await Vue.http
      .get(`?m=shop&filtre=${q}`)
      .then(
        response => response.body,
        response => {
          console.error("Api call failed");
        }
      );

      return response;
  },
  async getShop(id) {
    let response = await Vue.http.get(`?m=shopd&shopID=${id}`).then(
      response => response.body,
      response => {
        console.error("Api call failed");
      }
    );

    return response;
  },
  async allShops() {
    let response = await Vue.http.get('?m=shopList').then(
      response => response.body,
      response => {
        console.error("Api call failed");
      }
    );

    return response;
  }
};

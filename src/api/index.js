import Vue from "vue";

export default {
  async getShopsByItem(item) {
    let response = await Vue.http
      .get(`?m=shop&filtre=${item}`)
      .then(
        response => response.body,
        response => {
          console.error("Api call failed");
        }
      );

      return response;
  },
  async getShopById(id) {
    let response = await Vue.http.get(`?m=shopd&shopID=${id}`).then(
      response => response.body,
      response => {
        console.error("Api call failed");
      }
    );

    return response;
  },
  async getAllShops() {
    let response = await Vue.http.get('?m=shopList').then(
      response => response.body,
      response => {
        console.error("Api call failed");
      }
    );

    return response;
  }
};

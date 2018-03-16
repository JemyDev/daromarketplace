import Vue from "vue";

export default {
  async getShopsByItems(searchTerm) {
    let response = await Vue.http
      .get(`?m=shop&filtre=${searchTerm}`)
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
  }
};

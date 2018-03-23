import Vue from "vue";
import { serialize } from "@/helpers/helpers";

export default {
  async getShopsByItem(params) {
    let query = serialize(params);
    let response = await Vue.http.get(`?m=shop&${query}`).then(
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
    let response = await Vue.http.get("?m=shopList").then(
      response => response.body,
      response => {
        console.error("Api call failed");
      }
    );

    return response;
  }
};

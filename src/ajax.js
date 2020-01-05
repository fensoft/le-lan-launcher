import axios from "axios";
import store from "./store";

const host = "http://localhost:8384/rest";
axios.defaults.headers.common["X-API-Key"] = store.state.apikey;

store.subscribe(mutation => {
  if (mutation.type == "apikey" && mutation.payload) {
    axios.defaults.headers.common["X-API-Key"] = mutation.payload;
  }
});

export default {
  Syncthing: {
    System: {
      ping: () => {
        return axios.get(host + "/system/ping");
      },
      shutdown: () => {
        return axios.post(host + "/system/shutdown");
      },
      status: () => {
        return axios.get(host + "/system/status");
      }
    }
  }
};
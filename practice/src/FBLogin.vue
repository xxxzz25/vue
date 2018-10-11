<template>
  <div id="app">
    <span>{{connected}}</span>
    <button 
      v-if="!connected" 
      @click="connect"
    >
      Connect
    </button>
    <div v-else>
      <h4>{{username}}</h4>
      <img :src="picture">
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      connected: false,
      username: "",
      picture: ""
    };
  },

  methods: {
    connect() {
      FB.login(this.statusGet);
    },
    statusGet(result) {
      if ((this.connected = result.status === "connected")) {
        this.connected = true;
        FB.api(
          "/me",
          "GEt",
          {
            fields: ["picture", "name"]
          },
          rs => {
            this.username = rs.name;
            this.picture = rs.picture.data.url;
          }
        );
      }
    }
  },

  mounted() {
    FB.init({
      appId: 339545486779046,
      // appId: 182706955649650,
      version: "v3.1"
    });
    FB.getLoginStatus(this.statusGet);
  }
};
</script>
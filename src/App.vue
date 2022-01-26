<template>
  <v-app class="container-background">
    <v-container class="py-10">
      <FruitsList
        title="FeldM Fruit Nutritions"
        :data="data"
        :headers="headers"
      />
    </v-container>
  </v-app>
</template>

<script>
import FruitsList from "./views/FruitsList.vue";

import axios from "axios";
export default {
  name: "App",
  components: {
    FruitsList,
  },
  data: () => ({
    data: [],
    headers: [],
  }),

  async created() {
    axios
      .get("https://www.fruityvice.com/api/fruit/all")
      .then((response) => {
        this.data = response.data;
        var headerData = response.data[0];
        for (const item in headerData) {
          this.headers.push({
            text: item,
            value: item,
            class: "success--text text-capitalize",
          });
        }
      })
      .catch((e) => console.log(e));
  },
};
</script>
<style scoped>
.container-background {
  background: #f4f5f6 !important;
}
</style>

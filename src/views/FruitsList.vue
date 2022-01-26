<template>
  <v-card elevation="0" class="px-10">
    <v-card-title>
      <Header :title="title" :searchText="searchText" :onSearch="onSearch" />
    </v-card-title>

    <v-data-table
      :headers="headers"
      :loading="data.length ? false : true"
      loader-height="2"
      :items-per-page="10"
      :items="searchText !== '' ? filteredData : data"
      disable-sort
    >
      <template v-slot:[`item.nutritions`]="{ item }">
        <div class="d-flex justify-space-between py-2">
          <div
            v-for="[key, nutrition] of Object.entries(item.nutritions)"
            :key="key"
          >
            <div class="ml-4 ml-md-0">
              <div class="font-weight-bold">
                {{ nutrition }}
              </div>
              <div class="nutrition-key">
                {{ key }}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { filterNutritionsByNutritionValue } from "../utils/SearchFunction";
import Header from "../components/Header.vue";

export default {
  props: ["data", "title", "headers"],
  components: { Header },
  methods: {
    onSearch(value) {
      this.searchText = value;
    },
    filteredFruits() {
      this.filteredData = filterNutritionsByNutritionValue(
        this.data,
        this.searchText
      );
    },
  },
  watch: {
    searchText: function () {
      this.filteredFruits();
    },
  },

  data() {
    return {
      searchText: "",
      filteredData: [],
    };
  },
};
</script>

<style scoped>
.nutrition-key {
  color: #71717a;
  text-transform: capitalize;
  font-size: 12px;
}
</style>

<template>
  <v-row class="align-center mb-5">
    <v-col md="8" sm="6" cols="12">
      <h2 class="header-title">{{ title }}</h2>
    </v-col>
    <v-col md="4" sm="6" cols="12">
      <v-text-field
        class="search-field"
        :value="searchText"
        @input="onSearch"
        type="number"
        append-icon="mdi-magnify"
        color="primary"
        placeholder="Search Fruits by nutritional values ..."
        single-line
        hide-details
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["title", "searchText", "onSearch"],
};
</script>

<style>
.header-title {
  color: #00b45f;
}
.theme--light.v-input.search-field input::placeholder {
  font-size: 14px;
  font-weight: 400;
}
</style>

<template>
  <div>
    <q-card square flat class="fill-width bg-primary" style="height: 25vh">
      <q-card-section>
        <q-input
          filled
          v-model="textSearch"
          label="Search for users"
          class="bg-white text-primary"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-select
          square
          filled
          v-model="genderFilter"
          :options="options"
          label="Select gender"
          class="bg-white text-primary"
        >
        </q-select>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "SearchInput",
  data: () => {
    return {
      textSearch: window.localStorage.getItem("searchText") || "",
      genderFilter: (window.localStorage.getItem("genderFilter")) ? JSON.parse(window.localStorage.getItem("genderFilter")) : ref("Both"),
      options: [
        {
          label: "Both",
          value: null,
        },
        {
          label: "Female",
          value: "female",
        },
        {
          label: "Male",
          value: "male",
        },
      ],
    };
  },
  watch: {
    textSearch(newVal) {
      window.localStorage.setItem("searchText", newVal);
      this.$emit("search", newVal);
    },
    genderFilter(newVal) {
      window.localStorage.setItem("genderFilter", JSON.stringify(newVal));
      this.$emit("genderFilter", newVal);
    },
  }
};
</script>
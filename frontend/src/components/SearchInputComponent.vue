<template>
  <q-card square flat class="fill-width" style="height: 25vh">
    <q-card-section>
      <q-input filled v-model="textSearch" label="Search for users">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-select square filled v-model="genderSelect" :options="options" label="Select gender"> </q-select>
    </q-card-section>
  </q-card>
</template>
<script>
import { ref } from 'vue'
export default {
  name: "SearchInput",
  data: () => {
    return {
      textSearch: "",
      genderSelect: ref("Both"),
      options: [
        {
          label: "Both",
          value: "",
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
};
</script>
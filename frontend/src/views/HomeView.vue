<template>
  <div class="row">
    <div class="col-12 col-sm-4 window-height">
      <!-- Search Input -->
      <SearchInputComponent />
      <q-scroll-area style="height: 75vh">
        <!-- Search results -->
        <SearchResultComponent v-for="n in 25" :key="n" />
        <q-card square flat class="fill-width">
          <!-- "show more" - button -->
          <q-card-section
            class="row wrap justify-center items-center content-center"
          >
            <q-btn
              color="deep-orange"
              class="fill-width"
              glossy
              label="Deep Orange"
              @click="showDetails = true"
            />
          </q-card-section>
        </q-card>
      </q-scroll-area>
    </div>
    <!-- Details of selected entry for desktop -->
    <div class="col-sm-8 gt-xs">
      <UserDetailsComponent />
    </div>
    <!-- Details of selected entry for mobile -->
    <q-dialog v-model="showDetails" class="lt-sm">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
          <UserDetailsComponent />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import SearchResultComponent from "@/components/SearchResultComponent.vue";
import SearchInputComponent from "@/components/SearchInputComponent.vue";
import UserDetailsComponent from "@/components/UserDetailsComponent.vue";
export default {
  name: "HomeView",
  components: {
    SearchResultComponent,
    SearchInputComponent,
    UserDetailsComponent,
  },
  data: () => {
    return {
      showDetails: false,
    };
  },
};
</script>
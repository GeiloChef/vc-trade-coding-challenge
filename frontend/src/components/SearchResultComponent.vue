<template>
  <q-card
    class="q-py-sm cursor-pointer bg-primary text-white"
    flat
    square
    @click="selectUser"
    :id="user.login.uuid"
  >
    <q-card-section>
      <div class="row wrap justify-center items-center content-center">
        <div class="col-3">
          <q-avatar>
            <img :src="user.picture.thumbnail" />
          </q-avatar>
        </div>
        <div class="col-9">
          <div class="text-subtitle1 break-word">
            {{ capitalizeFirstLetter(user.name.first) }}
          </div>
          <div class="text-subtitle1 break-word">
            {{ capitalizeFirstLetter(user.name.last) }}
          </div>
          <div class="text-subtitle1 break-word">
            {{ user.email }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            
        </div>
      </div>
    </q-card-section>
  </q-card>
  <q-separator color="white" />
</template>

<script>
export default {
  name: "SearchResult",
  methods: {
    selectUser() {
      this.$emit("select_user", this.user);
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <q-card square flat class="window-height" dark>
    <q-card-section>
      <div class="row wrap justify-center items-center content-center">
        <div class="col-12 row wrap justify-center items-center content-center">
          <q-avatar size="150px">
            <img :src="user.picture.large" />
          </q-avatar>
        </div>
        <div class="col-12 text-center q-mt-sm">
          <div class="text-h6">{{ user.name.first }} {{ user.name.last }}</div>
          <div class="text text-subtitle1">{{ user.email }}</div>
        </div>
      </div>
    </q-card-section>
    <q-separator color="white" />
    <q-card-section>
      <div class="row wrap justify-center items-center content-center">
        <q-list separator dark>
          <q-item
            clickable
            class="row wrap justify-center items-center content-center"
          >
            <div class="row">
              <div class="col-12 text-center">
                <div class="text text-subtitle2">Adress</div>
              </div>
              <div class="col-12 text-center">
                <div class="text text-subtitle1">
                  {{ user.location.street.name }}
                  {{ user.location.street.number }}, {{ user.location.city }},
                  {{ user.location.state }}
                </div>
              </div>
            </div>
          </q-item>
          <q-item
            clickable
            class="row wrap justify-center items-center content-center"
          >
            <div class="row">
              <div class="col-12 text-center">
                <div class="text text-subtitle2 text-center">Phone</div>
              </div>
              <div class="col-12 text-center">
                <div class="text text-subtitle1">{{ user.cell }}</div>
              </div>
            </div>
          </q-item>
          <q-item
            clickable
            class="row wrap justify-center items-center content-center"
          >
            <div class="row">
              <div class="col-12 text-center">
                <div class="text text-subtitle2">Birthday</div>
              </div>
              <div class="col-12 text-center">
                <div class="text text-subtitle1">
                  {{ moment(user.dob.date).format("DD.MM.YYYY") }}
                </div>
              </div>
            </div>
          </q-item>

          <q-item
            clickable
            class="row wrap justify-center items-center content-center"
          >
            <div class="row">
              <div class="col-12 text-center">
                <div class="text text-subtitle2">User-ID</div>
              </div>
              <div class="col-12 text-center">
                <div class="text text-subtitle1">
                  {{ user.login.uuid }}
                </div>
              </div>
            </div>
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import moment from "moment";

export default {
  name: "UserDetails",
  methods: {
    moment,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
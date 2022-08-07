<template>
  <div class="row">
    <div class="col-12 col-sm-5 window-height bg-primary">
      <!-- Search Input -->
      <SearchInputComponent
        @search="searchChanged"
        @genderFilter="setGenderFilter"
      />
      <q-scroll-area style="height: 75vh" ref="scrollTargetRef">
        <q-infinite-scroll
          @load="onLoad"
          style="height: 75vh"
          :offset="100"
          :debounce="500"
        >
          <!-- Search results -->
          <SearchResultComponent
            v-for="user in usersFiltered"
            :key="user.id.value"
            v-bind:user="user"
            @select_user="selectUser"
          />

          <div
            class="row wrap justify-center items-center content-center q-pa-sm"
          >
            <div
              class="text-subtitle1 text-white text-center"
              v-if="filtered && usersFiltered && usersFiltered.length > 0"
            >
              You can't load more entries while using filters.
            </div>
            <div
              class="text-subtitle1 text-white text-center"
              v-if="usersFiltered && usersFiltered.length === 0"
            >
              No users found with the current filter.
            </div>
          </div>
          <q-card square flat>
            <!-- "show more" - button -->
            <q-card-section
              v-if="!filtered"
              class="
                row
                wrap
                justify-center
                items-center
                content-center
                bg-primary
              "
            >
              <q-btn
                color="white"
                class="fill-width text-black"
                label="More results..."
                @click="loadAdditionalUser"
              />
            </q-card-section>
          </q-card>
        </q-infinite-scroll>
      </q-scroll-area>
    </div>
    <!-- Details of selected entry for desktop -->
    <div class="col-sm-7 gt-xs">
      <UserDetailsComponent v-if="userSelected" v-bind:user="userSelected" />
    </div>
    <!-- Details of selected entry for mobile -->
    <q-dialog v-model="showDetails" class="lt-sm">
      <q-card dark>
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
          <UserDetailsComponent
            v-if="userSelected"
            v-bind:user="userSelected"
          />
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
      users: null,
      usersFiltered: [],
      userSelected: null,
      genderFilter: window.localStorage.getItem("genderFilter")
        ? JSON.parse(window.localStorage.getItem("genderFilter")).value
        : null,
      searchText: window.localStorage.getItem("searchText") || null,
      filtered: true,
      blockInifniteScroll: false,
      page: window.localStorage.getItem("page") || 1,
    };
  },
  methods: {
    selectUser(selectedUser) {
      this.userSelected = selectedUser;
      this.showDetails = true;
      window.localStorage.setItem(
        "selected_user",
        JSON.stringify(selectedUser)
      );
    },

    async loadUsersOnLoad(results) {
      try {
        this.fetchUsers(`&results=${results}`)
          .then((data) => {
            this.users = data.results;

            this.userSelected =
              JSON.parse(window.localStorage.getItem("selected_user")) ||
              this.users[0];

            this.filtered = false;
            this.filterUser();
          })
          .then(() => {
            if (document.getElementById(this.userSelected.login.uuid)) {
              document
                .getElementById(this.userSelected.login.uuid)
                .scrollIntoView({ behavior: "smooth" });
            }
          });
      } catch (e) {
        console.warn(e);
      }
    },

    async loadAdditionalUser() {
      this.page = parseInt(this.page) + 1;
      window.localStorage.setItem("page", this.page);
      this.blockInifniteScroll = true;
      try {
        this.fetchUsers(`&page=${this.page}&results=25`).then((data) => {
          data.results.map((user) => this.users.push(user));
          this.blockInifniteScroll = false;
          return;
        });
        this.filterUser();
      } catch (e) {
        console.warn(e);
      }
    },

    onLoad(index, done) {
      if (!this.filtered && !this.blockInifniteScroll) {
        this.loadAdditionalUser().then(done());
      } else {
        done();
      }
    },

    searchChanged(searchText) {
      this.searchText = searchText !== "" ? searchText : null;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.filterUser();
      }, 500);
    },

    setGenderFilter(gender) {
      this.genderFilter = gender.value;
      this.filterUser();
    },

    filterUser() {
      if (!this.searchText && !this.genderFilter) {
        this.usersFiltered = this.users;
        this.filtered = false;
      } else {
        this.filtered = true;
        this.usersFiltered = this.users.filter((user) => {
          if (
            (this.genderFilter && user.gender === this.genderFilter) ||
            !this.genderFilter
          ) {
            if (
              user.name.first.toLowerCase().includes(this.searchText) ||
              user.name.last.toLowerCase().includes(this.searchText) ||
              !this.searchText
            ) {
              return user;
            }
          }
        });
      }
    },
  },
  created() {
    const results = this.page * 25;
    this.loadUsersOnLoad(results);
  },
};
</script>
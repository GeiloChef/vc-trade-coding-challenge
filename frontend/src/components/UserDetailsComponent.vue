<template>
  <q-card flat>
    <q-card-section>
      <div class="row wrap justify-center items-center content-center">
        <div class="col-12 row wrap justify-center items-center content-center">
          <q-avatar size="150px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
        <div class="col-12 text-center q-mt-sm">
          <div class="text-h6">Firstname Lastname</div>
          <div class="text text-subtitle1">Firstname.Lastname@mail.com</div>
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="row wrap justify-center items-center content-center">
        <q-list separator>
          <q-item clickable>
            <div class="row">
              <div class="col-12 text-center">
                <div class="text text-subtitle2">Adress</div>
              </div>
              <div class="col-12 text-center">
                <div class="text text-subtitle1">Adress</div>
              </div>
            </div>
          </q-item>
          <q-item clickable>
            <div class="row">
              <div class="col-12 text-center">
                <div class="text text-subtitle2">Phone</div>
              </div>
              <div class="col-12 text-center">
                <div class="text text-subtitle1">Adress</div>
              </div>
            </div>
          </q-item>
          <q-item clickable>
            <div class="row">
              <div class="col-12 text-center">
                <div class="text text-subtitle2">Birthday</div>
              </div>
              <div class="col-12 text-center">
                <div class="text text-subtitle1">Adress</div>
              </div>
            </div>
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "UserDetails",
};
</script>
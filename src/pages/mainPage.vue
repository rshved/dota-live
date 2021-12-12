<template>
  <div class="wrap">
    <v-app-bar
      absolute
      color="indigo darken-2"
      dark
      height="50px"
      shrink-on-scroll
      prominent
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>
      <v-tabs align-with-title>
          <v-tab @click="$router.push({ path: '/previousmatches' })">Prev</v-tab>
          <v-tab @click="$router.push({ path: '/livematches' })">Live</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <div class="wrap__content mt-15">
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  
};
</script>

<style lang="scss" scoped>

</style>

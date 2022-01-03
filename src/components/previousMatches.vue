<template>
  <v-card elevation="24" class="mx-auto">
    <v-system-bar lights-out></v-system-bar>
    <v-carousel :continuous="false" :cycle="cycle" hide-delimiters>
      <v-carousel-item v-for="(slide, i) in gamesInfo" :key="i">
        <v-sheet color="#efe2ba" height="100%" tile>
          <v-row class="fill-height" justify="center">
            <v-col class="d-flex justify-space-between pt-10 text-h5" cols="12">
              <div class="d-flex flex-column text-center pl-3">
                <span>{{ slide.dire_name }}</span>
                <span>{{ slide.dire_score }}</span>
                <v-avatar class="mx-auto mt-3" v-if="matchInfo"
                  ><img :src="matchInfo.dire_team.logo_url"
                /></v-avatar>
                <p>Players:</p>
              </div>
              <p class="d-flex flex-column text-center">
                <span>vs</span>
                <span>Duration: {{ Math.floor(slide.duration / 60) }} min</span>
              </p>
              <div class="d-flex flex-column text-center pr-3">
                <span>{{ `${slide.radiant_name}` }}</span>
                <span>{{ slide.radiant_score }}</span>
                <v-avatar class="mx-auto mt-3" v-if="matchInfo"
                  ><img :src="matchInfo.radiant_team.logo_url"
                /></v-avatar>
              </div>
            </v-col>
            <v-col cols="12" class="text-h4 text-center"> </v-col>
            <v-btn @click="showMore(slide.match_id)">Show More</v-btn>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PreviousMatches",

  data() {
    return {
      cycle: false,
      teamLeft: null,
    };
  },

  created() {
    this.getGamesInfo();
  },
  computed: {
    ...mapGetters({ gamesInfo: "gamesInfo", matchInfo: "matchInfo" }),
  },

  methods: {
    ...mapActions({
      getGamesInfo: "getGamesInfo",
      getMatchInfo: "getMatchInfo",
    }),
    showMore(id) {
      this.getMatchInfo(id);
      this.teamLeft = this.matchInfo.players.slice(4, 9);
      console.log(this.teamLeft);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  &__content {
    background: white;
    height: 100%;
  }
}
</style>

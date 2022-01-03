<template>
  <v-card elevation="24" max-width="600" class="mx-auto">
        <!-- <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          height="500"
          hide-delimiters
        >
          <v-carousel-item v-for="(slide, i) in liveMatches" :key="i">
            <v-sheet color="#efe2ba" height="100%" tile>
              <v-row class="fill-height" justify="center">
                <v-col
                  class="d-flex justify-space-between pt-10 text-h5"
                  cols="12"
                >
                  <p class="d-flex flex-column text-center pl-3">
                    <span>{{ slide.dire_name }}</span>
                    <span>{{ slide.dire_score }}</span>
                    <v-avatar class="mx-auto mt-3" v-if="matchInfo"
                      ><img :src="matchInfo.dire_team.logo_url"
                    /></v-avatar>
                  </p>
                  <p>vs</p>
                  <p class="d-flex flex-column text-center pr-3">
                    <span>{{ `${slide.radiant_name}` }}</span>
                    <span>{{ slide.radiant_score }}</span>
                    <v-avatar class="mx-auto mt-3" v-if="matchInfo"
                      ><img :src="matchInfo.radiant_team.logo_url"
                    /></v-avatar>
                  </p>
                </v-col>
                <v-col cols="12" class="text-h4 text-center">
                  Average MMR: {{ slide.average_mmr }}
                </v-col>
                <v-btn @click="showMore(slide.match_id)">Show More</v-btn>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel> -->
        Live not supported
      </v-card> 
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'LiveMatches',
  
  created() {
    // this.getLiveMatches()
  },

  computed: {
    ...mapGetters({ liveMatches: "liveMatches" }),
  },

  methods: {
    ...mapActions({
      getLiveMatches: 'getLiveMatches'
    }),
  },
    
}
</script>
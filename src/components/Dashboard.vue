<template>
  <v-layout column>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>

            <v-flex xs6>
              <v-card>
                <v-card-media height="200px">
                  <v-container fill-height fluid>
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>

            <v-flex xs6>
              <v-card>
                <v-card-media height="200px">
                  <v-container fill-height fluid>
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>

            <v-flex xs12 @click="navigate('ChartView')">
              <v-card>
                <v-card-media height="200px">
                  <v-container fill-height fluid>
                    <chart></chart>
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
  </v-layout>
</template>

<script>
  import Chart from './Chart'
  
  export default {
    mounted: function() {},
    data: () => ({
      cards: [{
          title: 'Pre-fab homes',
          src: '/static/doc-images/cards/house.jpg',
          flex: 12,
        },
        {
          title: 'Favorite road trips',
          src: '/static/doc-images/cards/road.jpg',
          flex: 6,
        },
        {
          title: 'Best airlines',
          src: '/static/doc-images/cards/plane.jpg',
          flex: 6,
        },
      ],
    }),
    methods: {
      navigate(route) {
        this.$router.push('ChartView')
      }
    },
    components: { Chart },
  }
</script>

<style scoped>
  
</style>

<template>
  <v-layout column fluid>
    <div class="button-group-top">
      <div class="left">
        <v-btn @click="back()" outline dark color="black">
          <v-icon dark>arrow_back</v-icon>
        </v-btn>
      </div>
      <div class="right">
        <v-btn @click="dialog = true" outline dark color="black">
          <v-icon dark>create</v-icon>
        </v-btn>
      </div>
    </div>
    <v-dialog v-model="dialog" transition="dialog" :overlay="true" class="extra-info-dialog" scrollable>
      <v-card tile>
        <v-card-text class="chart-button-row">
          <v-text-field v-model="newRouteName" label="Ruttnamn">
            hej
          </v-text-field>
          <v-btn
          style="float:right"
          @click.native="create"
          :disabled="newRouteName === ''"
          color="green"
          class="white--text">Lägg till waypoints</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  mounted: async function() {
    const routes = localStorage.getItem('routes')
    if (routes) {
      this.routes = JSON.parse(routes)
    }
  },
  data: () => ({
    routes: [],
    dialog: false,
    newRouteName: ''
  }),
  methods: {
    back: function() {
      window.history.back()
    },
    create(route) {
      this.$router.push(({ name: 'CreateRoute', params: { name: this.newRouteName } }))
    },
  },
  components: {},
}
</script>

<style scoped>
.button-group-top {
  margin-top: 10px;
}
</style>

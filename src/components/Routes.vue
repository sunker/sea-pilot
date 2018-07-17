<template>
  <v-layout column fluid
  v-touch="{ left: () => swipeLeft(),
            right: () => swipeLeft() }">
    <div class="button-group-top">
      <div class="left">
        <v-btn @click="back()" outline dark color="black">
          <v-icon dark>arrow_back</v-icon>
        </v-btn>
      </div>
      <div class="right">
        <v-btn @click="dialog = true" outline dark color="black">
          <v-icon dark>add</v-icon>
        </v-btn>
      </div>
      <div class="right">
        <v-btn @click="editMode = !editMode" outline dark :color="editMode ? 'green' : 'black'">
          <v-icon dark>create</v-icon>
        </v-btn>
      </div>
    </div>


     <v-flex class="routes-wrapper" xs12 sm6 offset-sm3>
      <v-card>

        <v-list two-line subheader>
          <v-subheader inset>På din enhet</v-subheader>

          <v-list-tile
            v-for="item in routes"
            :key="item.id"
            avatar
            @click="routeClick(item)"
            v-touch="{ left: () => console.log('esda'),
            right: () => swipeLeft() }">
            <v-list-tile-avatar>
              <v-icon>map</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.totalDistance }} NM</v-list-tile-sub-title>
            </v-list-tile-content>
             <v-list-tile-action v-if="editMode">
              <v-btn icon ripple @click.stop="deleteRoute(item)">
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>

    </v-flex>
     <v-dialog
      v-model="deleteDialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Ta bort rutt?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="deleteDialog = false"
          >
            Avbryt
          </v-btn>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="deleteDialog = false"
          >
            Ja
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="routeClickDialog" transition="dialog" :overlay="true" class="extra-info-dialog" scrollable>
      <v-card tile>
        <v-card-text class="chart-button-row">
          <v-btn
          color="secondary" @click.native="edit(current)">Ändra</v-btn>
          <v-btn color="primary" @click.native="start(current)">Starta navigering</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

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
import { mapGetters } from 'vuex'

export default {
  mounted: async function() {
    this.init()
  },
  data: () => ({
    editMode: false,
    current: null,
    routes: [],
    dialog: false,
    deleteDialog: false,
    routeClickDialog: false,
    newRouteName: '',
  }),
  computed: {
    ...mapGetters(['splitView']),
  },
  methods: {
    init() {
      const routes = localStorage.getItem('routes')
      if (routes) {
        this.routes = Object.values(JSON.parse(routes))
      }
    },
    routeClick(route) {
      this.current = route
      this.routeClickDialog = true
    },
    swipeLeft() {
      console.log('test')
      this.deleteDialog = true
    },
    back: function() {
      window.history.back()
    },
    create(route) {
      this.$router.push({
        name: 'CreateRoute',
        params: { name: this.newRouteName, id: this.guid() },
      })
    },
    edit(route) {
      this.routeClickDialog = false
      this.$router.push({
        name: 'CreateRoute',
        params: { name: route.name, id: route.id },
      })
    },
    deleteRoute(route) {
      const routesItem = localStorage.getItem('routes')
      const routes = routesItem ? JSON.parse(routesItem) : {}
      delete routes[route.id]
      localStorage.setItem('routes', JSON.stringify(routes))
      this.init()
    },
    start(route) {
      this.routeClickDialog = false
      this.$router.push({
        name: 'ChartRoute',
        params: {
          routeId: route.id,
        },
      })
    },
    guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
      }
      return (
        s4() +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        s4() +
        s4()
      )
    },
  },
  components: {},
}
</script>

<style scoped>
.button-group-top {
  margin-top: 10px;
}

.routes-wrapper {
  margin-left: 0;
}
</style>

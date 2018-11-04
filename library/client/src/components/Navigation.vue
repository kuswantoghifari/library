<template>
  <div>
    <v-toolbar style="background-color:blue;margin-bot:50px" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to='/'>Home</v-btn>
        <v-btn flat to='/about'>About</v-btn>
        <v-btn flat to='/contact'>Contact</v-btn>
        <v-btn flat @click="dialog=true">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>

      <v-navigation-drawer
        v-model="drawer"
        temporary
        absolute
        fixed
        class="cyan lighten-1"
      >
        <!-- <v-toolbar flat class="transparent"> -->
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        <!-- </v-toolbar> -->

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.to"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="Legal first name*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
      return {
        drawer: null,
        dialog: false,
        items: [
          { title: 'Home', icon: 'dashboard', to:'/'},
          { title: 'About', icon: 'question_answer', to:'/about' }
        ],
        right: null
      }
    }
}
</script>


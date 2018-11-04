<template>
  <div>
    <h3 v-if='isLoading'>Loading..</h3>
    <v-container grid-list-md fluid v-if='!isLoading'>
      <v-layout align-center justify-center row wrap>
        <v-flex
          v-for="(card, index) in cards"
          xs3
          :key="index"
        >
          <v-card>
              <v-container
                fill-height
                fluid
                pa-2
              >
                <v-layout>
                  <v-flex xs12>
                    <span class="headline">{{card.title | capitalize}}</span><br/>
                    <span class="body">{{card.body}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            <div v-text="card.description" align="center"></div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="info" @click="editPost(card.id)">
                Edit
              </v-btn>
              <v-btn color="error">
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout> 
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Edit Post</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="title" v-model="card.title"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="body" v-model="card.body"></v-text-field>
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
  data: () => ({
    card:{},
    cards: [],
    isLoading: true,
    dialog:false,
  }),

  mounted(){
    this.fetchData();
  },
  
  methods:{
    fetchData() {
      this.axios.get('posts')
        .then((res) => {
          console.log(res.data)
            this.cards = res.data;
            this.isLoading = false;
        })
        .catch((err) => {
          console.log(err)
        });
    },

    readPost(id){
      this.axios.get(`posts/${id}`)
        .then((res) => {
          this.card = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    editPost(id){
      this.readPost(id);

      this.dialog = true;
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

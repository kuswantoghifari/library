<template>
<div>
  <v-container fluid>
    <v-timeline align-top>
      <v-timeline-item
      v-for="(item, i) in items"
      :color="item.color"
      :icon="item.icon"
      :key="i"
      fill-dot
      >
      <v-card
          :color="item.color"
          dark
      >
          <v-card-title class="title" v-text="item.title"></v-card-title>
          <v-card-text class="white text--primary">
          <p v-text="item.description"></p>
          <v-btn
              :color="item.color"
              class="mx-0"
              outline
          >
              Details
          </v-btn>
          </v-card-text>
      </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-1',
          icon: 'mdi-instagram',
          title: 'Instagram',
          description: 'bisa di add di @tester alpha'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-google',
          title: 'Email',
          description: 'blazehawk64@gmail.com'

        },
        {
          color: 'green lighten-1',
          icon: 'mdi-phone',
          title: 'Phone',
          description: '0218447652'
        },
        {
          color: 'indigo',
          icon: 'mdi-map',
          title: 'Address',
          description: 'jln.akses ui'
        }
      ]
    })
  }
</script>
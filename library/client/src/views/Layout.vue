<template>
  <div>
    <Navigation />

    <v-content>
      <router-view />
    </v-content>

    <v-footer class="pa-3" style="background-color:blue" dark fixed>
      <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  components: {
    Navigation,
  },
};
</script>

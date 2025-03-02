<template>
  <div id="app" class="all">
    <Header />

    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header, Footer
  },
  methods: {
  
  }


}
</script>

<style>

@import '@/assets/css/fonts.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;

}

.all {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

a {
  text-decoration: none;
  color: inherit;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hidden {
  display: none;
}

.visible {
  display: block;

}

.blur {
  filter: blur(10px);
}

</style>

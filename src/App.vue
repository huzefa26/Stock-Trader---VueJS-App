<template>
  <div id="app" class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition name="slide"
          mode="out-in">
          <router-view></router-view>
          <!-- enter-active-class="animate__animated animate__slideInLeft" 
          leave-active-class="animate__animated animate__slideOutRight" -->

          <!-- enter-active-class="animate__animated animate__lightSpeedInLeft" 
          leave-active-class="animate__animated animate__lightSpeedOutRight" -->
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      appHeader: Header
    },
    created () {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style scoped>
  
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: silde-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    } to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    } to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
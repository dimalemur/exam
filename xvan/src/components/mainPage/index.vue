<template>
  <div class="Main">
    <Header v-bind:currentMode="currentMode" v-bind:setPageMode="setPageMode" />
    <Main>
      <Processors v-if="currentMode === 1" v-bind:currentMode="currentMode" />
      <Motherboards v-if="currentMode === 2" v-bind:currentMode="currentMode" />
      <Mainpage v-if="currentMode === 0" v-bind:currentMode="currentMode" />
    </Main>

    <Foot />
  </div>
</template>

<script>
import Header from "../header";
import Processors from "../processors";
import Motherboards from "../motherboards";
import Mainpage from "../main";
import Foot from "../footer";

export default {
  name: "HelloWorld",
  data() {
    return {
      currentMode: 0
    };
  },
  components: {
    Header,
    Processors,
    Motherboards,
    Mainpage,
    Foot
  },
  methods: {
    setPageMode(mode) {
      this.currentMode = mode;
    }
  }
};
</script>

<style scoped>
.Main {
  font-family: "MuseoModerno", cursive;
}
</style>
   
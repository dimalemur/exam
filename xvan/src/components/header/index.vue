<template>
  <div class="Header">
    <md-content class="md-primary">
      <div class="Header-Title">
        <img src="../../assets/logo.png" />
        <h1>Магазин компьютерной электроники</h1>
      </div>
      <md-tabs class="md-primary List" md-alignment="centered">
        <md-tab id="tab-hom" class="List-Item" md-label="Главная" @click="setPageMode(0)"></md-tab>
        <md-tab id="tab-prc" class="List-Item" md-label="Процессоры" @click="setPageMode(1)"></md-tab>
        <md-tab
          id="tab-mthboards"
          class="List-Item"
          md-label="Материнские платы"
          @click="setPageMode(2)"
        ></md-tab>
      </md-tabs>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    currentMode: Number,
    setPageMode: Function
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;200;300;400;500;600;700;800&display=swap");
.Header {
  font-family: "MuseoModerno", cursive;
}
.Header-Title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Header-Title img {
  widows: 50px;
  height: 50px;
}
h1 {
  font-size: 2em;
  text-align: center;
  margin: 0;
  margin-left: 10px;
  padding: 20px 0;
  line-height: 1.5em;
}

@media screen and (max-width: 570px) {
  h1 {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 350px) {
  h1 {
    font-size: 1.2em;
  }
  .List-Item button {
    font-size: 0.3em;
  }
}
</style>

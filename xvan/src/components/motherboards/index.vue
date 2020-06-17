<template>
  <div class="Motherboards">
    <md-list-item>
      <b>Название</b>
      <b>
        <code>Цена (₽)</code>
      </b>
    </md-list-item>

    <Motherboard
      v-for="motherboard in motherboards"
      :key="motherboard.id"
      v-bind:name="motherboard.name"
      v-bind:link="motherboard.link"
      v-bind:payment="motherboard.payment"
    />

    <div class="Processors-Addblock">
      <md-button class="md-raised md-primary" @click="showDialog = true">Добавить</md-button>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Добавить материнскую плату</md-dialog-title>

      <md-field class="Dialog-Input">
        <label>Название</label>
        <md-input v-model="name" type="string"></md-input>
      </md-field>

      <md-field class="Dialog-Input">
        <label>Цена</label>
        <md-input v-model="paynemt" type="string"></md-input>
      </md-field>

      <md-field class="Dialog-Input">
        <label>Ссылка</label>
        <md-input v-model="link" type="string"></md-input>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="addMotherboard(name,paynemt,link)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import Motherboard from "../motherboard";

export default {
  name: "Motherboards",
  data() {
    return {
      motherboards: [],
      showDialog: false
    };
  },
  created() {
    this.getNewMotherboardsData();
  },
  methods: {
    async getNewMotherboardsData() {
      try {
        this.motherboards = await this.getAllMotherboards();
        console.log(this.motherboards);
      } catch (error) {
        console.log(error);
      }
    },
    async addMotherboard(name, payment, link) {
      this.showDialog = false;
      let id = await this.getAllMotherboards();

      id = id.length + 1;

      const add = await fetch(`http://localhost:3000/motherboard`, {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({ id, name, payment, link })
      })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);

      console.log(add);

      this.getNewMotherboardsData();
    },
    getAllMotherboards() {
      return fetch(`http://localhost:3000/motherboard`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
    }
  },
  components: {
    Motherboard
  }
};
</script>

<style scoped>
.Processors-Addblock {
  text-align: right;
}
li {
  list-style-type: none;
}
.Dialog-Input {
  max-width: 90%;
  margin: 0 auto;
}
</style>

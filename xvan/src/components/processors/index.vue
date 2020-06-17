<template>
  <div class="Processors">
    <md-list-item>
      <b>Название</b>
      <b>
        <code>Цена (₽)</code>
      </b>
    </md-list-item>
    <Processor
      v-for="processor in processors"
      :key="processor.id"
      v-bind:name="processor.name"
      v-bind:link="processor.link"
      v-bind:payment="processor.payment"
    />
    <div class="Processors-Addblock">
      <md-button class="md-raised md-primary" @click="showDialog = true">Добавить</md-button>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Добавить процессор</md-dialog-title>

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
        <md-button class="md-primary" @click="addProcessor(name,paynemt,link)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import Processor from "../processor";

export default {
  name: "Processors",
  data() {
    return {
      processors: [],
      showDialog: false
    };
  },
  created() {
    this.getNewProcessorsData();
  },
  methods: {
    async getNewProcessorsData() {
      try {
        this.processors = await this.getAllProcessors();
        console.log(this.processors);
      } catch (error) {
        console.log(error);
      }
    },

    async addProcessor(name, payment, link) {
      this.showDialog = false;
      let id = await this.getAllProcessors();

      id = id.length + 1;

      const add = await fetch(`http://localhost:3000/processors`, {
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

      this.getNewProcessorsData();
    },
    getAllProcessors() {
      return fetch(`http://localhost:3000/processors`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
    }
  },
  components: {
    Processor
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

<template>
  <div class="Processor">
    <a :href="link">
      <md-list>
        <md-content class="md-accent">
          <md-list-item>
            {{name}}
            <code>{{payment}} ₽</code>
          </md-list-item>
        </md-content>
      </md-list>
    </a>
  </div>
</template>

<script>
export default {
  name: "Processor",
  props: {
    name: String,
    payment: Number,
    link: String
  }
};
</script>

<style scoped>
</style>

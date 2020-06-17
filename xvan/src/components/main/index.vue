<template>
  <div class="Mainpage">
    <img src="../../assets/computer.png" alt srcset />
    <div class="Mainpage-Text">
      <p>
        <b>Это главная страница ....</b>
      </p>
      <br />Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Deleniti provident dignissimos quis architecto dolore magnam numquam
      incidunt accusantium distinctio tempora corrupti rerum quod sunt, quia
      doloribus voluptatem repellat blanditiis, qui assumenda iure unde porro
      inventore. Exercitationem voluptatibus eveniet natus! Inventore nemo ab
      nisi minima earum assumenda optio eius, in porro.
    </div>
  </div>
</template>

<script>
export default {
  name: "Mainpage"
};
</script>

<style scoped>
img {
  max-width: 30vw;
  float: left;
  object-fit: contain;
}
.Mainpage {
  display: flex;
  padding-top: 30px;
}

@media screen and (max-width: 570px) {
  .Mainpage-Text {
    font-size: 0.8em;
  }
}
</style>
   
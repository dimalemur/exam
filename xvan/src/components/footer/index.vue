<template>
  <div class="Foot">
    <div class="md-layout">
      <div class="md-layout-item">
        <ul>
          <li>
            <b>Информация об исполнителе:</b>
            <br />
            <br />
          </li>
          <li>Има:Хван Дмитрий Алексеевич</li>
          <li>Группа:181-362</li>
          <li>Дата:17.06.2020</li>
        </ul>
      </div>
      <div class="md-layout-item">
        <ul>
          <li>
            <b>Ссылки на ресурсы:</b>
            <br />
            <br />
          </li>
          <li>
            <a target="_blank" href="https://vuematerial.io/">Сайт фреймворка vuematerial</a>
          </li>
          <li>
            <a target="_blank" href="https://fcenter.ru/product/type/2">Пример сайта</a>
          </li>
          <li>
            <a target="_blank" href="https://vuejs.org/">Vue.js</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1j_qdvrId0gf5KCLSROfjgnPotOLGtCb6/view?usp=sharing/"
            >Задание(9 вариант)</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style scoped>
.Foot {
  margin-top: 30px;
  padding: 30px;

  background: lightsteelblue;
}
a {
  text-decoration: none;
  color: black;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
</style>
   
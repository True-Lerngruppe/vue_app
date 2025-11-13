<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>
      True-Lerngruppe
    </h1>
    <section id="section-table">
      <li>
        <ul><a href="#escape-room">Escape Room</a></ul>
      </li>
    </section>
    <h2>
      Patricks lustige Idee
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.
    </p>
    <h2>
      Impressum
    </h2>

    <h2>
      Svg to Svg converter
    </h2>
    <h2 id="escape-room">
      Escape Room
    </h2>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
      qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
      fugiat quo voluptas nulla pariatur?
    </p>
  </div>
</template>

<style scoped>
.container {
  margin-left: 30%;
  margin-right: 30%;
  padding: 0 20px;
}

h1 {
  font-size: 5em;
}

h2 {
  font-size: 3em;
}

#section-table {
  transition: height 0.5s ease;
  /*animation: hidemenue 5s infinite;*/
}

@keyframes hidemenue {
  0% { height: 0; }
  100% { height: auto; }
  /*0%   { height: 0%; background: red;}
  25%  {height: 25%; background: blue;}
  50%  {height: 50%; background: yellow;}
  75%  {height: 75%; background: green;}
  100% {height: 100%; background: red;}*/
}

@media(max-width: 768px) {
  .container {
    margin-left: 5%;
    margin-right: 5%;
    padding: 0 15px;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.8em;
  }
}
</style>

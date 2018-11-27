<template>
<main role="main">
  <div class="jumbotron">
    <div class="container">
      <video id="video" controls width="100%" height="55%"></video>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for"item in newreleases">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" v-bind:src="item.poster" alt="">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <button v-on:click="loadPlayer" >Play</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
</script>

<style>
</style>

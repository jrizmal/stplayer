<template>
  <b-row class="mb-3" @click="showDetails">
    <b-col cols="auto">
        <b-img class="cursor-pointer" width="250" src="@/assets/image/playlist_placeholder.png"></b-img>
    </b-col>
    <b-col>
      <h4 class="cursor-pointer">{{ playlist.title }}</h4>
      <p>{{ "Avtor. not implemented" }}</p>
      <p>{{ playlist.date }}</p>
      <h2 :class="{ negative: playlist.rating<0, positive: playlist.rating>0 }">{{ playlist.rating }}</h2>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Object,
      default: null
    }
  },
  methods: {
      showDetails(){
          this.$router.push(`/playlist/${this.playlist.id}`)
      }
  }
};
</script>

<style>
.negative{
    color: red;
}
.positive{
    color: olivedrab;
}
.neutral{
    color: black;
}
.cursor-pointer{
    cursor: pointer;
}

</style>
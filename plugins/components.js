import Vue from "vue"
import PlaylistDisplay from "../components/PlaylistDisplay.vue"
import SongDisplay from "../components/SongDisplay.vue"
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.component("playlist-display", PlaylistDisplay)
Vue.component("song-display", SongDisplay)

Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })
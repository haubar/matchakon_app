<template lang="pug">
  header.masthead
    .mx-auto.text-center.d-none.d-sm-block
    #map-wrap(style={height:'100vh'})
      no-ssr
        l-map(:zoom=13 :center="[25.0418254,121.5149875]")
          l-tile-layer(url="http://{s}.tile.osm.org/{z}/{x}/{y}.png")
          l-marker(:lat-lng="[25.0418254,121.5149875]")
</template>
<script>
export default {
  // layout: 'map'
  // page component definitions
}
</script>
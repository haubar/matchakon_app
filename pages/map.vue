<template lang="pug">
  header.masthead
    .mx-auto.text-center.d-none.d-sm-block
      h1.mx-auto.my-0 matchakon
      h2.mx-auto.text-black-50.mt-2.mb-5 抹茶甜點的相關分布
    #map-wrap.container.d-flex.h-100.align-items-center
      no-ssr
        l-map(:zoom=13 :center="[25.0418254,121.5149875]")
          l-tile-layer(url="http://{s}.tile.osm.org/{z}/{x}/{y}.png")
          l-marker(:lat-lng="[47.413220, -1.219482]")
</template>
<script>
export default {
  // layout: 'map'
  // page component definitions
}
</script>
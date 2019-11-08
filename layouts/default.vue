<template>
  <div>
    <header/>
      <nuxt/>
    <footer/>
  </div>
</template>


<script>
    import header from '~/components/header.vue'
    import footer from '~/components/footer.vue'

    export default {
        components: {
            header,
            footer
        }
    }
</script>
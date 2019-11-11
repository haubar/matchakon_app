<template>
  <div>
    <Header/>
      <nuxt/>
    <footer/>
  </div>
</template>


<script>
    import Header from '~/components/header.vue'
    import footer from '~/components/footer.vue'

    export default {
        components: {
            Header,
            footer
        }
    }
</script>
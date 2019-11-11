<template>
  <div>
    <header/>
      <nuxt/>
    <footer/>
  </div>
</template>


<script>
    import Header from '~/components/header.vue'
    import Footer from '~/components/footer.vue'

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>
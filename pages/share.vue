<template lang="pug">
 .masthead.h-auto.mh-auto
  .mx-auto.text-center.d-none.d-sm-block
    h1.mx-auto.my-0 matchakon
    h2.mx-auto.text-black-50.mb-4.texr-share 分享 / SHARE
  section#about.about-section.text-center.bg-location
    .container.container--wide
      form.form-inline.d-flex
        input.form-control.flex-fill.mb-3(placeholder='Search')
      .d-flex.row
        .image-grid.are-images-unloaded(data-js='image-grid', v-for="article in data")
          .image-grid__col-sizer
          .image-grid__gutter-sizer
            instagram-embed(
              :url="'https://www.instagram.com/p/'+article.shortcode+'/'"
              :max-width='150'
              :hide-caption="true"
              :class-name="'instagram-embed'"
            )

      .scroller-status
        .loader-ellips.infinite-scroll-request
          span.loader-ellips__dot
          span.loader-ellips__dot
          span.loader-ellips__dot
          span.loader-ellips__dot
        //- p.scroller-status__message.infinite-scroll-last End of content
        //- p.scroller-status__message.infinite-scroll-error No more pages to load


</template>
<script>
// import axios from '~/plugins/axios'
import axios from 'axios'
import InstagramEmbed from 'vue-instagram-embed';

export default {
  data () {
    return { }
  },
  components: {
    InstagramEmbed
  },
  async asyncData({ params }) {
    const {data} = await axios.get('https://us-central1-matchakon-api.cloudfunctions.net/matcha')
    if (params.code){
       const {data} = await axios.get('https://us-central1-matchakon-api.cloudfunctions.net/matcha/'+params.code)
    }
      return { 
        data:data,
      }
      // await console.log(id)
      // await console.log(999)
    
    // console.log(article.data)
  }
}
</script>
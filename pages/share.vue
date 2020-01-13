<template lang="pug">
 .masthead.h-auto.mh-auto
  .mx-auto.text-center.d-none.d-sm-block
    h1.mx-auto.my-0 matchakon
    h2.mx-auto.text-black-50.mb-4.texr-share 分享 / SHARE
  section#about.about-section.text-center.bg-location
    .container.container--wide
      form.form-inline.d-flex
        input.form-control.flex-fill.mb-3(placeholder='Search')
      .d-flex.row.justify-content-between
        .image-grid.are-images-unloaded(data-js='image-grid', v-for="article in list")
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
    infinite-loading(
      @infinite="infiniteHandler"
    )

</template>
<script>
// import axios from '~/plugins/axios'
import axios from 'axios'
import InstagramEmbed from 'vue-instagram-embed'


const apiPath = 'https://us-central1-matchakon-api.cloudfunctions.net/matcha';

export default {
  data () {
    return { 
      page: 1,
      list: [],
    }
  },
  components: {
    InstagramEmbed
  },
  methods: {
    infiniteHandler($state) {
      axios.get(apiPath, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.length > 1) {
          this.page += 1;
          
          data.forEach((value, index) => {
              this.list.push(value);
          })
          $state.loaded();
        } else {
          $state.complete();
        }
      })
    },
  },
  computed: {
    autoLoadDisabled() {
        return this.loading || this.commentsData.length === 0;
    },
  },
  async asyncData({ params }) {
    const {data} = await axios.get(apiPath)
    if (params.code){
       const {data} = await axios.get(apiPath+params.code)
    }
      return { 
        list:data,
      }
  }
}
</script>
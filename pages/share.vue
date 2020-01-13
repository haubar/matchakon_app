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
      page: 0,
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
        // console.info('get page result',data)
        // console.info('data length',data.length)
        // console.info('this list', this.list)
        if (data.length > 1) {
          this.page += 12;
          

          let testdata = {
            "_id": "5ddba7fe348789396a5be6a5",
            "id": "2184593140337145352",
            "shortcode": "B5RO-L8jPYI",
            "timestamp": "1574643817",
            "display_url": "https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/71849977_1437830006386031_761390898414370838_n.jpg?_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=111&oh=497e053511416dc187fdd76b7599dd26&oe=5E7B685F",
            "thumbnail_src": "https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/71849977_1437830006386031_761390898414370838_n.jpg?_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=111&oh=0b63a09b2c3b34d096efbf3c5240672b&oe=5E875BCC",
            "owner_id": "1565937",
            "tag": "抹茶控",
            "sort": 1,
            "enable": true,
            "created_date": "2019-11-25 9:3:37",
            "__v": 0,
            "address": null,
            "lat": "25.05839",
            "lng": "121.53257",
            "location_id": "890951091030686",
            "location_name": "木白甜點咖啡店",
            "on_place": true
          }

          // this.list = data;
          this.list.push(testdata) 

          

          // this.$set(this.$data.list, this.$data.list.length, data)
          // this.$set(this.$data, 'list', this.$data.list)
          // console.log(this.$data)
          console.info('get list',this.list)
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
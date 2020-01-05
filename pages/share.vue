<template lang="pug">
 .masthead.h-auto.mh-auto
  .mx-auto.text-center.d-none.d-sm-block
    h1.mx-auto.my-0 matchakon
    h2.mx-auto.text-black-50.mb-4.texr-share 分享 / SHARE
  section#about.about-section.text-center.bg-location
    .container.container--wide
      form.form-inline.d-flex
        input.form-control.flex-fill.mb-3(placeholder='Search')
      .image-grid.are-images-unloaded(data-js='image-grid')
        .image-grid__col-sizer
        .image-grid__gutter-sizer
        //- if !!article
          //- each val, index in article
          //-   .image-grid__item(data-toggle='modal', data-target='#exampleModal')
          //-     img.image-grid__image.rounded(src='https://www.instagram.com/p/'+index.shortcode, alt='')
            
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
import axios from '~/plugins/axios'

export default {
  async asyncData(context) {
    const {data} = await axios.get('matcha')
    // .then((res)=>{
      return { article:data }
    // })
    console.log(article.data)
  }
}
</script>
<template lang="pug">
  nav#mainNav.navbar.navbar-expand-lg.navbar-light.fixed-top.shadow
      .container
          a.navbar-brand.js-scroll-trigger(href='#page-top')
            img.img-fluid(src='/img/matchakon_logo.png', alt='matchakon-logo')
          b-button.navbar-toggler.navbar-toggler-right(v-b-toggle="'navbarResponsive-2'") 
            | Menu 
            i.fas.fa-bars
          b-collapse#navbarResponsive.collapse.navbar-collapse
            ul.navbar-nav.ml-auto.matchakon_topnav
              li.nav-item
                a.nav-link.js-scroll-trigger(href='/map') 地圖
              li.nav-item
                a.nav-link.js-scroll-trigger(href='/share') 分享
              li.nav-item
                a.nav-link.js-scroll-trigger(href='/contact') 聯絡我們
</template>

<template lang="pug">
    section#signup.signup-section
      .container
        .row
          .col-md-10.col-lg-8.mx-auto.text-center
            i.far.fa-paper-plane.fa-2x.mb-2.text-white
            h2.text-white.mb-5 聯絡我們 / CONTACT
            form.form-inline.d-flex
              input#inputEmail.form-control.flex-fill.mr-0.mr-sm-2.mb-3.mb-sm-0(type='email', placeholder='輸入您的信箱')
              button.btn.btn-primary.mx-auto(type='submit') 送出
</template>
<script>
export default {
  // layout: 'contact'
  // page component definitions
}
</script>
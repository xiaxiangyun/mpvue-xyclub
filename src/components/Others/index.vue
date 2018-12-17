<template>
  <div>
    <div>其它</div>
    <logincheck  :tips="'登录后可体验更多功能'"/>
  </div>
  
</template>

<script>
import logincheck from '../LoginCheck'

export default {
  components: { logincheck },

  data () {
    return {}
  },

  computed: {},

  methods: {}
}
</script>

<style>

</style>

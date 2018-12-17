<template>
  <div>
    <div>名片</div>
    <logincheck :tips="'登录后可查看'"/>
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

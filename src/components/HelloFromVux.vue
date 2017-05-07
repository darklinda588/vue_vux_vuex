<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
    <group>
      <x-input title='呵呵' v-model="inputValue" @on-change="change"></x-input>
    </group>
    <x-button type="primary" @click.native="submit">primary</x-button>
  </div>
</template>

<script>
import { Group, Cell, XInput, XButton } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XInput,
    XButton
  },
  data () {
    return {
      msg: 'Hello World!',
      inputValue: '我我我'
    }
  },
  methods: {
    change (val) {
      this.$store.state.user_name = val
    },
    submit () {
      this.$store.commit('showUserName')
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>

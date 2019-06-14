<template>
  <div>
    <div>
      <Multiselect :options="allData"></Multiselect>
    </div>
    <div>

    </div>
  </div>
</template>

<script>

import dataArray from '@/data'
import Multiselect from 'vue-multiselect'
export default {
  name: 'home',
  components: { Multiselect },
  data () {
    return {

    }
  },
  computed: {
    allData () {
      return dataArray
    }
  }

}
</script>

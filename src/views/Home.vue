<template>
    <div>
        <input type="text" v-model="inputFilter">
        <div v-for="item in justCheck">
            <div>
                <div style="background: wheat">
                    {{item.group}}
                </div>
                <div v-for="val in item.values" :key="val.name">
                    {{val.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import dataArray from '@/data'

  export default {
    name: 'home',
    data () {
      return {
        inputFilter: '',
        newFilter: []
      }
    },
    methods: {
      filerItem (items, term) {
        if (!term) {
          return items
        }
        term = term.toUpperCase()
        let filtered = []
        let savedItems = JSON.parse(JSON.stringify(items))
        savedItems.forEach(data => {
          let dataValues = data.values
          let filterdObjects = []
          dataValues.forEach(items => {
            if (typeof items.name === 'string' && items.name.toUpperCase().indexOf(term) !== -1) {
              filterdObjects.push(items)
            }
          })
          data.values = [...filterdObjects]
          if (data.values.length) {
            filtered.push(data)
          }
        })
        return filtered
      },

    },
    computed: {
      allData () {
        let newArray = []
        dataArray.forEach((item, i) => {
          if (item.group === 'Custom metrics') {
            dataArray.splice(i, 1);
            dataArray.unshift(item);
            newArray = dataArray
          }
        })
        return newArray
      },

      justCheck () {
        return this.filerItem(this.allData, this.inputFilter)
      },

    },

  }
</script>

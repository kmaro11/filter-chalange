<template>
    <div>
        <div>
<!--            <Multiselect :options="filterData">-->
<!--              <template slot="option" slot-scope="item">-->
<!--                <p>{{item.group}}</p>-->
<!--                <p></p>-->
<!--              </template>-->
<!--            </Multiselect>-->
        </div>
      <input type="text" v-model="filter">
        <div v-for="item in justCheck" :key="item.group">
            <div>
                <div>
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

  // import Multiselect from 'vue-multiselect'

  export default {
    name: 'home',
    // components: {Multiselect},
    data () {
      return {
        filter: ''
      }
    },
    methods: {
      filerItem (items, term, fields) {
        if (!term) {
          return items
        }
        term = term.toUpperCase()
        let filtered = []

        for (let index in items) {
          if (!items.hasOwnProperty(index)) {
            continue
          }

          let item = JSON.parse(JSON.stringify(items[index])) // cloning object Justin Case

          let included = false

          for (let prop in item) {
            if (!item.hasOwnProperty(prop) || fields.indexOf(prop) === -1 || included) {
              continue
            }

            let property = item[prop]
            if (typeof property === 'string' && property.toUpperCase().indexOf(term) !== -1) {
              filtered.push(item)
              included = true
            } else if (typeof property === 'object') {
              // If given field is array of strings
              if (property !== null && property.find(item => item.toUpperCase().indexOf(term) !== -1)) {
                filtered.push(item)
                included = true
              }
            }
          }
        }
        return filtered
      }
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
        return this.filerItem(this.allData, this.filter, ['group'])
      },

    },

  }
</script>

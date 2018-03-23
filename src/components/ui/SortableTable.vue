 <template>
 <div class="table-wrapper">
   <form class="form-inline" v-if="hasSearch">
        <div class="form-group">
            <div class="input-group">
                <label>Rechercher dans la liste : </label>
                <input class="form-control mr-sm-2" name="query" v-model="filterKey">
            </div>
        </div>
    </form>

   <table class="table">
    <thead>
      <tr>
        <th v-for="(obj, index) in columns" :key="index"
          @click="sortBy(obj.name)"
          :class="{ active: sortKey == obj.name, 'text-right': obj.align === 'right' }" class="pointer">
          {{ obj.label }}
          <span class="arrow" :class="sortOrders[obj.name] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in filteredData" :key="index" @click="onBodyRowClick(entry)" class="pointer">
        <td v-for="(obj, index) in columns" :key="index"
          :class="{ 'text-right': obj.align === 'right' }">
          <img :src="getImageSrc(entry.item_id)" alt="" v-if="obj.name === 'name'" width="48">

          {{entry[obj.name]}}
        </td>
      </tr>
    </tbody>
  </table>
   <div v-if="filteredData.length === 0">
        <p>Aucun résultat</p>
    </div>
 </div>
</template>

<script>
import Vue from 'Vue'
import { getImageItem } from '@/helpers/helpers'
import VueClipboard from "vue-clipboard2";

export default Vue.component('sortable-table', {
  directives: {
    VueClipboard
  },
  props: {
    datas: { default: () => [], type: [Array, Object, String] },
    columns: Array,
    hasSearch: Boolean
  },
  data () {
    let sortOrders = {}

    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })

    return {
      sortKey: '',
      sortOrders: sortOrders,
      filterKey: null,
      copyData: 'copy child'
    }
  },
  computed: {
    localFilterDatas() {
      let filteredDatas = JSON.parse(JSON.stringify(this.datas))

      filteredDatas.map((item, index) => {
        for (let key in item) {
          if (!item.hasOwnProperty(key)) continue

          this.columns.map(column => {
            if (column.name !== key || !column.filters)
              return

            column.filters.map((filter) => {
              if (this.$root.$options.filters[filter] instanceof Function) {
                filteredDatas[index][key] = this.$root.$options.filters[filter](item[key])
              } else {
                filteredDatas[index][key] = item[key]
              }
            })
          })
        }
      })

      return filteredDatas;
    },
    filteredData() {
      let sortKey = this.sortKey
      let filterKey = this.filterKey && this.filterKey.toLowerCase()
      let order = this.sortOrders[sortKey] || 1
      let datas = this.localFilterDatas

      if (filterKey) {
        datas = datas.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }

      if (sortKey) {
        datas = datas.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }

      return datas
    }
  },
  methods: {
    onBodyRowClick(data) {
      this.$emit('onRowClick', data.id);
    },
    getImageSrc(itemId) {
      if (!itemId) return

      return getImageItem(itemId);
    },
    getShopLocationCommand(map, x, y) {
      return `/nav ${map} ${x}/${y}`
    },
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

</script>

<style>
  .pointer {
      cursor: pointer;
  }
</style>

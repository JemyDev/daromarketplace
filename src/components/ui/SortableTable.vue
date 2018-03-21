 <template>
 <div class="table-wrapper">
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

          {{obj.filters ? dynamicFilters(entry[obj.name], obj.filters) : entry[obj.name]}}

          <copy-clipboard-button :message="getShopLocationCommand(entry.map, entry.x, entry.y)" v-if="obj.name === 'map'">Copy command</copy-clipboard-button>
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
import helpers from '@/helpers/helpers'
import CopyClipboardButton from '@/components/ui/CopyClipboardButton.vue'

export default Vue.component('sortable-table', {
  props: {
    datas: { default: () => [], type: [Array, Object, String] },
    columns: Array,
    filterKey: String
  },
  components: {
    CopyClipboardButton
  },
  data () {
    let sortOrders = {}

    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })

    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData () {
      let sortKey = this.sortKey
      let filterKey = this.filterKey && this.filterKey.toLowerCase()
      let order = this.sortOrders[sortKey] || 1
      let datas = this.datas

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

      return helpers.getImageItem(itemId);
    },
    getShopLocationCommand(map, x, y) {
      return `/nav ${map} ${x}/${y}`
    },
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    dynamicFilters(value, filters) {
      let filteredVal = filters.map((filter) => {
        if (this.$root.$options.filters[filter] instanceof Function) {
          return this.$root.$options.filters[filter](value)
        } else {
          return value
        }
      })

      return filteredVal.toString();
    }
  }
})

</script>

<style>
  .pointer {
      cursor: pointer;
  }
</style>

 <template>
 <div class="table-wrapper">
   <table class="table">
    <thead>
      <tr>
        <th v-for="(obj, index) in columns" :key="index"
          @click="sortBy(obj.name)"
          :class="{ active: sortKey == obj.name, 'text-right': obj.align === 'right' }">
          {{ obj.label }}
          <span class="arrow" :class="sortOrders[obj.name] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in filteredData" :key="index" @click="onSingleRowClick(entry)" class="pointer">
        <td v-for="(obj, index) in columns" :key="index"
          :class="{ 'text-right': obj.align === 'right' }">
          {{entry[obj.name]}}
          {{dynamicFilters(entry[obj.key], obj.filters)}}
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

export default Vue.component('sortable-table', {
  props: {
    datas: { default: () => [], type: [Array, Object, String] },
    columns: Array,
    filterKey: String,
    onRowClick: Function
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
    onSingleRowClick(data) {
      this.$emit('onRowClick', data.id);
    },
    getImageSrc(itemId) {
        return helpers.getImageItem(itemId);
    },
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    dynamicFilters: function (value, filters) {
      if (!filters)
        return value;

      value = filters.map((filter) => {
        console.log(this.$root.$options.filters);
        return Vue.filter(filter, this.$root.$options.filters)
      })

      return value;
    }
  }
})

</script>

<style>
  .pointer {
      cursor: pointer;
  }
</style>

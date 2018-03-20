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
      <tr v-for="(entry, index) in filteredData" :key="index">
        <td v-for="(obj, index) in columns" :key="index"
          :class="{ 'text-right': obj.align === 'right' }">
          {{entry[obj.name]}}
          <!-- {{dynamicFilters(entry[obj.key], obj.filters)}}   -->
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

export default Vue.component('sortable-table', {
  props: {
    data: { default: () => [], type: [Array, Object] },
    columns: Array,
    filterKey: String
  },
  data: function () {
    let sortOrders = {}

    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })

    return {
      sortKey: '',
      sortOrders: sortOrders,
      localData: this.data
    }
  },
  computed: {
    filteredData: function () {
      let sortKey = this.sortKey
      let filterKey = this.filterKey && this.filterKey.toLowerCase()
      let order = this.sortOrders[sortKey] || 1

      console.log(this.localData);

      let data = this.localData;

      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  methods: {

    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }/* ,
    dynamicFilters: function (value, filters) {
      if (!filters)
        return value;

      value = filters.map((filter) => {
        return Vue.filter(filter)(value)
      })

      return value;
    } */
  }
})

</script>

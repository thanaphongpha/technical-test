<template>
  <div class="">
    <h2>ข้อที่ 4</h2>

    <table width="100%">
      <tr>
        <td width="50%" align="center"><bar-chart :chart-data="datacollection" ></bar-chart></td>
        <td width="50%" align="center"><pie-chart :chart-data="datacollection"></pie-chart></td>
      </tr>
    </table>
  </div>
</template>

<script>

import axios from 'axios'
import PieChart from './PieChart'
import BarChart from './BarChart'

export default {
  components: {
    BarChart,
    PieChart,
  },
  data() {
    return {
      datas: [],
      datacollection: null
    }
  },
  created() {
    this.getdata()
  },
  mounted() {

  },
  methods: {
    getdata() {
      const url = 'https://www.trcloud.co/test/api.php'
      axios
          .get(url)
          .then((respone) => {
            if (respone.status === 200) {
              this.datas = respone.data
              console.log('respone', this.datas123)
              this.fillData()
            }
          })

    },
    fillData() {
      let city = []
      let population = []
      console.log('yuyuyu', this.datas)
      for (let i = 0; i < this.datas.length; i++) {
        console.log('aaa')
        city.push(this.datas[i].City)
        population.push(this.datas[i].Population)
        console.log('data', city)
      }
      this.datacollection = {
        labels: city,
        datasets: [
          {
            label: 'Range by Country',
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(159, 244, 0, 0.2)',
              'rgba(94, 86, 89, 0.2)',
              'rgba(223, 134, 244, 0.2)',
              'rgba(140, 238, 140, 0.2)'],
            data: population
          }
        ]
      }
    },

  }
}
</script>

<style>
div{
  align-content: center;
}
.small {
  max-width: 600px;
  margin: 150px auto;
}
#bar-chart{
  width: 700px !important;
  height: 600px !important;
}
#pie-chart{
  width: 500px !important;
  height: 500px !important;
}

</style>

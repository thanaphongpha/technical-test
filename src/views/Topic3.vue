<template>
  <div class="" id="topic3">
    <h2>ข้อที่ 3</h2>
    <br>
    Array1
    <table >
      <tr>
        <th align="center">Code</th>
        <th align="center">Name</th>
      </tr>
      <tr v-for="(item,index) in array1" :key="index">
        <td align="center">{{ item.code }}</td>
        <td align="center">{{ item.name }}</td>
      </tr>
    </table>
    <br>
    Array2
    <table>
      <tr>
        <th align="center">Code</th>
        <th align="center">Name</th>
      </tr>
      <tr v-for="(item,index) in array2" :key="index">
        <td align="center">{{ item.code }}</td>
        <td align="center">{{ item.city }}</td>
      </tr>
    </table>
    <br>
    <hr>
    <br>
    Output
    <table>
      <tr>
        <th align="center">Code</th>
        <th align="center">Name</th>
        <th align="center">City</th>
      </tr>
      <tr v-for="(item,index) in array3" :key="index">
        <td align="center">{{ item.code }}</td>
        <td align="center">{{ item.name }}</td>
        <td align="center">{{ item.city }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array1: [{code: 101, name: 'AAA'},
        {code: 102, name: 'BBB'},
        {code: 103, name: 'CCC'}],
      array2: [{code: 103, city: 'Singapore'},
        {code: 102, city: 'Tokyo'},
        {code: 101, city: 'Bangkok'}],
      array3: [],
      code: null
    }
  },
  created() {
    this.addobject()
  },
  methods: {
    findcode(code) {
      return code.code === this.code
    },
    addobject() {
      let find
      let merge
      // find = this.array1.findIndex(this.test)
      for (let i = 0; i < this.array2.length; i++) {
        console.log('tests')
        this.code = this.array2[i].code
        find = this.array1.findIndex(this.findcode)
        console.log('test', find)
        if (find !== -1) {
          merge = Object.assign(this.array1[find], this.array2[i])
          this.array3.push(merge)
        }
      }


// this.array3 = Object.assign(this.array1[0],this.array2[0])

    }
  }
}
</script>
<style scoped>
#topic3{
  text-align: left;
}
table {

  border: 1px solid;
  border-collapse: separate;
  width: 30%;
}

tr {
  border: 1px solid;
}

td {
  border: 1px solid;
}

th {
  border: 1px solid;
}
</style>

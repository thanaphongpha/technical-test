<template>
  <div>
    <h2>ข้อที่ 2</h2>
    <table>
      <tr>
        <th width="20%">100</th>
        <th width="20%">7</th>
        <th width="20%">107</th>
        <th width="20%">3</th>
        <th width="20%">104</th>
      </tr>
      <tr>
        <td><input type="number" v-model="td1" @change="setvalue(td1,1)"></td>
        <td><input type="number" v-model="td2" @change="setvalue(td2,2)"></td>
        <td><input type="number" v-model="td3" @change="setvalue(td3,3)"></td>
        <td><input type="number" v-model="td4" @change="setvalue(td4,4)"></td>
        <td><input type="number" v-model="td5" @change="setvalue(td5,5)"></td>
      </tr>
    </table>
    <br>
    <div class="">
      <button @click="calculator()" >Go</button>
      <button class="button" @click="reset">Clear</button>

    </div>



  </div>
</template>
<script>
export default {
  data() {
    return {
      result: 0,
      input: 0,
      field: 0,
      td1: 0,
      td2: 0,
      td3: 0,
      td4: 0,
      td5: 0
    }
  }, methods: {
    setvalue(value, field) {
      if (field === 1) {
        this.input = value
        this.field = field
      }
      if (field === 2) {
        this.input = value
        this.field = field
      }
      if (field === 3) {
        this.input = value
        this.field = field
      }
      if (field === 4) {
        this.input = value
        this.field = field
      }
      if (field === 5) {
        this.input = value
        this.field = field
      }


    },
    calculator() {

      let ratio

      if (this.field === 1) {
        ratio = (this.input - 100) / 100
        console.log('ratio', ratio)
        this.td1 = 100 + (ratio * 100)
        this.td2 = 7 + ratio * 7
        this.td3 = 107 + ratio * 107
        this.td4 = 3 + ratio * 3
        this.td5 = 104 + ratio * 104

      }
      if (this.field === 2) {
        ratio = (this.input - 7) / 7
        this.td1 = 100 + ratio * 100
        this.td2 = 7 + ratio * 7
        this.td3 = 107 + ratio * 107
        this.td4 = 3 + ratio * 3
        this.td5 = 104 + ratio * 104

      }
      if (this.field === 3) {
        ratio = (this.input - 107) / 107
        this.td1 = 100 + ratio * 100
        this.td2 = 7 + ratio * 7
        this.td3 = 107 + ratio * 107
        this.td4 = 3 + ratio * 3
        this.td5 = 104 + ratio * 104

      }
      if (this.field === 4) {
        ratio = (this.input - 3) / 3
        this.td1 = 100 + ratio * 100
        this.td2 = 7 + ratio * 7
        this.td3 = 107 + ratio * 107
        this.td4 = 3 + ratio * 3
        this.td5 = 104 + ratio * 104

      }
      if (this.field === 5) {
        ratio = (this.input - 104) / 104
        this.td1 = 100 + ratio * 100
        this.td2 = 7 + ratio * 7
        this.td3 = 107 + ratio * 107
        this.td4 = 3 + ratio * 3
        this.td5 = 104 + ratio * 104
      }

    },
    reset() {
      this.td1 = 0
      this.td2 = 0
      this.td3 = 0
      this.td4 = 0
      this.td5 = 0
    }

  }
}
</script>
<style>
table {

  border: 1px solid;
  border-collapse: separate;
  width: 100%;
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

 .button{
   margin-left: 4px ;
 }

</style>

<template>
  <div>
    <h2>ข้อที่ 1</h2>
    Number of Star: <input v-model="numberInput">

    <button class="button" @click="showstar">Go</button>
    <div  v-for="(star,index) in array" :key="index">{{ star }}</div>


  </div>

</template>

<script>
export default {
  data() {
    return {
      numberInput: null,
      mod:null,
      array: []
    }
  },
  methods: {
    showstar(){
      this.mod = this.numberInput %2

      if (this.mod === 0){
        this.showstarup()
      }

      if(this.mod > 0){
        this.showstardown()
      }
    },
    showstarup() {
      this.array = []
      let a = {}
      a = {a: '*'}
      console.log('1111', a)
      for (let i = 0; i < this.numberInput; i++) {
        console.log('2222', a)
        this.array.push(a.a)
        console.log('iiiii', i)
        console.log('33333', this.array)

        a.a = a.a + '*'

      }


    },
    showstardown() {
      this.array = []
      let a = {}
      a = {a: '*'}

      console.log('1111', a)
      for (let i = 0; i < this.numberInput; i++) {
        console.log('2222', a)
        // this.array.push(a.a)
        console.log('iiiii', i)
        console.log('33333', this.array)


        if (i === this.numberInput - 1) {
          this.array.push(a.a)
        }
        a.a = a.a + '*'
      }

      console.log('aaaaaaa', this.array)
      for (let i = 0; i < this.numberInput; i++) {
        if (this.array) {
          // console.log('uuuu',this.array.a.substr(1,4))
          let r = this.array[0]

          let s = r.substr(1, this.numberInput - (i + 1))
          this.array.push(s)
          console.log('sssssss', s)
        }

        // this.array.a.substr(1,4-(i+1))
        // this.array.push(a.a)
        console.log('rr')
      }


    }
  }
}
</script>
<style scoped>
.button{
  margin-left: 4px ;
}
</style>


<template>
  <div class="hello">
    <h1>{{ msg }}</h1>   
    <h2>{{$store.state.counter}}</h2> 
    <button @click='plus'>++</button>
    <button @click="minus">--</button>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data () {
    return {
      msg: 'HelloVuex',
    }
  },
  methods:{
    plus(){
      this.counter++;
    },
    minus(){
      this.counter--;
    }
  }

}
</script>


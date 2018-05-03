import Dep from "./src/Dep";
import Vue from './src/Vue'

let o = new Vue({
    data:{
        test:'I am test'
    }
})

o._data.test = 'hello test1'
o._data.test = 'hello test2'
o._data.test = 'hello test3'
o._data.test = 'hello test4'
o._data.test = 'hello test5'
o._data.test = 'hello test6'

Dep.target = null
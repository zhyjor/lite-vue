import Watcher from './Watcher'
import Dep from './Dep'

export default class Vue{
    constructor (options){
        this._data = options.data
        observer(this._data)
        new Watcher()
        console.log('render~',this._data.test)

    }
}

function observer(value)  {
    if(!value||(typeof value!=='object')){
        return
    }
    Object.keys(value).forEach((key)=>{
        defineReactive(value,key,value[key])
    })
}

function defineReactive (obj,key,val) {
    const dep = new Dep()

    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:function reactiveGetter() {
            dep.addSubs(Dep.target)
            return val
        },
        set:function reactiveSetter(newVal) {
            if(val === newVal){
                return
            }
            dep.notify()
        }
    })
}
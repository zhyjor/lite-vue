import Observable from './src/Observable'
import Watcher from './src/Watcher'

const hero = new Observable({
    health: 3000,
    IQ: 150
})

new Watcher(hero,'type',()=>{
    return hero.health>4000?'坦克':'脆皮'
},(val)=>{
    console.log(`我的类型是${val}`)
})

// 这里必须先调用一次，不然就不能依赖收集
console.log(`英雄初始类型：${hero.type}`)

hero.health = 5000
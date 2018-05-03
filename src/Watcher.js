import Dep from './Dep'

export default class Watcher {
    constructor () {
        Dep.target = this
    }

    update(){
        console.log('视图更新了')
    }
}
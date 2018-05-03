/**
 * 订阅者
 */

export default class Dep {
    constructor () {
        // 用来存放watcher对象的数组
        this.subs = []
    }

    // subs中添加watcher对象
    addSubs(sub){
        console.log(this.subs.length)
        this.subs.push(sub)
    }

    // 通知所有的watcher对象更新视图
    notify(){
        this.subs.forEach((sub)=>{
            sub.update()
        })
    }
}
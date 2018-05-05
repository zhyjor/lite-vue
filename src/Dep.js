/**
 * 订阅者
 */

export default class Dep {
    constructor () {
        // 用来存放watcher对象的数组
        this.deps = []
    }

    depend () {
        if (Dep.target && this.deps.indexOf(Dep.target) === -1) {
            this.deps.push(Dep.target)
        }
    }

    // 通知所有的watcher对象更新视图
    notify () {
        this.deps.forEach((dep) => {
            dep()
        })
    }
}

Dep.target = null
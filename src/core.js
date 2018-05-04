/**
 * 定义一个依赖收集器
 * @type {{target: null}}
 */
const Dep = {
    target: null
}

/**
 * 将一个对象的某个属性转换为可观测属性
 * @param {Object} obj 对象
 * @param {String} key 对象的key
 * @param {Any} val 对应key的value
 * @returns {*}
 */
function defineReactive (obj, key, val) {
    const deps = []
    Object.defineProperty(obj, key, {
        get () {
            // 触发getter
            console.log(`我的${key}属性被读取了！`)
            if (Dep.target && deps.indexOf(Dep.target) === -1) {
                deps.push(Dep.target)
            }
            return val
        },
        set (newVal) {
            // 触发setter
            console.log(`我的${key}属性被修改了！`)
            val = newVal
            deps.forEach((dep) => {
                dep()
            })
        }
    })
}

/**
 * 把一个对象的每一项都转化为可观测对象
 * @param obj 对象
 */
function observable (obj) {
    Object.keys(obj).forEach((key) => {
        defineReactive(obj, key, obj[key])
    })
    return obj
}

// 计算属性

/**
 * 计算属性的值被更新
 * @param val
 */
function onComputedUpdate (val) {
    console.log(`我的类型是${val}`)
}

function watcher (obj, key, cb) {
    // 定义一个被动触发函数，当这个被观测对象的依赖更新时调用
    const onDepUpdated = () => {
        const val = cb()
        onComputedUpdate(val)
    }
    Object.defineProperty(obj, key, {
        get () {
            Dep.target = onDepUpdated
            // 执行cb的时候会用到Dep.target
            // 当cb执行完后就重置Dep.target为null
            const val = cb()
            Dep.target = null
            return val
        },
        set () {
            console.log('计算属性无法被赋值！')
        }
    })
}

const hero = observable({
    health: 3000,
    IQ: 150
})



//

// 别忘了，我们现在是通过手动读取hero.type来获取这个英雄的类型，
// 并不是他主动告诉我们的。如果我们希望让英雄能够在health属性被修改后，
// 第一时间主动发起通知，又该怎么做呢？这就涉及到本文的核心知识点——依赖收集。


// 我们需要借助一个第三方来帮助我们把监听器和可观测对象连接起来

// 计算属性
watcher(hero, 'type', () => {
    return hero.health > 4000 ? '坦克' : '脆皮'
})

console.log(`英雄初始类型：${hero.type}`)
hero.health = 5000





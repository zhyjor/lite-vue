/**
 * 将一个对象的某个属性转换为可观测属性
 * @param {Object} obj 对象
 * @param {String} key 对象的key
 * @param {Any} val 对应key的value
 * @returns {*}
 */
function defineReactive (obj, key, val) {
    Object.defineProperty(obj, key, {
        get () {
            // 触发getter
            console.log(`我的${key}属性被读取了`)
            return val
        },
        set (newVal) {
            // 触发setter
            console.log(`我的${key}属性被修改了`)
            val = newVal
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
    Object.defineProperty(obj, key, {
        get () {
            const val = cb()
            onComputedUpdate(val)
            return val
        },
        set () {
            console.log('计算属性无法被赋值！')
        }
    })
}

const hero = {
    health: 3000,
    IQ: 150
}

observable(hero)
watcher(hero, 'type', () => {
    return hero.health > 4000 ? '坦克' : '脆皮'
})

hero.type

hero.health = 5000

hero.type




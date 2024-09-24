const app = Vue.createApp({
    data: function () {
        return {
            counter: 10
        }
    },
    methods: {
        increase() {
            this.counter++
        }
    }
})

app.mount('#root')
//document.querySelector('#root')

const app1 = Vue.createApp({
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            this.count++
        }
    }
})
app1.mount('#app')


const mainApp = Vue.createApp({
    components: []
})
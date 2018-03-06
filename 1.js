new Vue({
    // state    驱动应用的数据源
    data() {
        return {
            count: 0
        }
    },
    // view     以声明方式将state映射到视图    
    template: `
        <div>({count})</div>
    `,
    // actions  响应在View上的用户输入导致的状态变化
    methods: {
        increment() {
            this.count++
        }
    }
})
export default {
    template: `
        <div>
            <h4>{{msg}}</h4>
            {{name}} 的按钮点击事件：
            <button @click='btnClick'>按钮</button>
        </div>
    `,
    data() {
        return {
            msg: '这是 webpack 配置的 vue 实例',
            name: 'LiMing',
        };
    },
    methods: {
        btnClick() {
            console.log('按钮被点击了');
        }
    }
};
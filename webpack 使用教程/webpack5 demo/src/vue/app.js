export default {
    template: `
        <div>
        <h2>this is from app.js</h2>
        <h2>{{message}}</h2>
        </div>
    `,
    data() {
        return {
            message: "webpack5 with vue2.6"
        }
    },
};
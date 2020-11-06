const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ],
    },
    computed: {
        totalPrice() {
            return this.books.reduce(function (total, curValue) {
                console.log('totalPrice:' + JSON.stringify(total));
                console.log('curValue:' + JSON.stringify(curValue));
                return total + curValue.price * curValue.count;
            }, 0);
        },
    },
    methods: {
        getFinalPrice(price) {
            return '￥' + price.toFixed(2);
        },
        add(ind) {
            console.log(ind);
            this.books[ind].count++;
        },
        sub(ind) {
            console.log(ind);
            // if (this.books[ind].count > 1)   //加入条件可以限制最小数量不能小于多少
            this.books[ind].count--;
        },
        remove(ind) {
            let m = this.books.splice(ind, 1);
            // console.log(JSON.stringify(m));
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }

});
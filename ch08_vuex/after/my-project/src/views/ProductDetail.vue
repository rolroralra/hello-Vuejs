<template>
    <div class="content-area">
        <br />

        <h2>상품 상세 항목</h2>
        <table id="pdlist">
            <tr>
                <th id="mainheader" colspan="2">Product Detail</th>
            </tr>
            <tr>
                <th>ID</th>
                <td>{{item.id}}</td>
            </tr>
            <tr>
                <th>NAME</th>
                <td>{{item.name}}</td>
            </tr>
            <tr>
                <th>CATEGORY</th>
                <td>{{item.category}}</td>
            </tr>
            <tr>
                <th>PRICE</th>
                <td>{{item.price}}</td>
            </tr>
            <tr>
                <th>AMOUNT</th>
                <td>{{item.amount}}</td>
            </tr>
            <tr>
                <th>DESCRIPTION</th>
                <td>{{item.description}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import itemlist from "../itemlist";

export default {
    data: function() {
        return {
            id: 0,
            items: itemlist.items
        };
    },
    created: function() {
        // route 동적 세그먼트 값
        this.id = this.$route.params.id;
    },
    // watch 수행
    watch: {
        $route: function(to) {
            // to 는 현재 router 객체
            this.id = to.params.id;
        }
    },

    computed: {
        item: function() {
            var id = this.id;
            var selected = this.items.filter(function(c) {
                return c.id == id;
            });

            return selected.length == 1 ? selected[0] : {};
        }
    }
};
</script>

<style>
#pdlist td,
th {
    padding: 15px;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
}
#pdlist th {
    width: 160px;
}
#mainheader {
    background-color: cornflowerblue;
    color: white;
}
#pdlist tr:nth-child(even) {
    background-color: whitesmoke;
}
#pdlist tr:nth-child(odd) {
    background-color: #fff;
}
</style>

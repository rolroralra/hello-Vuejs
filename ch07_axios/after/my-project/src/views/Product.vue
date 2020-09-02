<template>
    <div class="content-area">
        <br />
        <h2>상품 리스트</h2>
        <table id="plist">
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            <tr v-for="item in items" :key="item.id">
                <td>
                    <!-- router link 추가 -->
                    <router-link v-bind:to="'/product/'+item.id">{{item.id}}</router-link>
                </td>
                <td>{{item.name}}</td>
            </tr>
        </table>
        <!-- 중첩라우트 router-view -->
        <router-view></router-view>
    </div>
</template>

<script>
import itemlist from "../itemlist";

export default {
    data: function() {
        return {
            items: itemlist.items
        };
    }
};
</script>

<style>
table {
    width: 500px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-collapse: collapse;
    border-bottom: 1px solid cornflowerblue;
}
#plist th {
    padding: 15px;
    background-color: cornflowerblue;
    color: #fff;
}
#plist td {
    padding: 15px;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
}
h2 {
    font-weight: bold;
}
.router-link-exact-active {
    font-weight: bold;
    color: #5b4df0;
}
</style>

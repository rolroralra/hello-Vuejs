<template>
    <div class="content-area">
        <br />
        <div style="display:inline-block">
            <!-- sum component -->
            <sum />
            <br />
            <hr />
            <!-- discount component -->
            <discount />
            <br />
            <hr />
            <order />
        </div>
    </div>
</template>

<script>
/* 사용할 컴포넌트 선언  */
import sum from "@/components/vuex/Sum_vuex.vue";
import discount from "@/components/vuex/Discount_vuex.vue";
import order from "@/components/vuex/Order_vuex.vue";

export default {
    /* 사용할 컴포넌트 등록  */
    components: { sum, discount, order }
};
</script>

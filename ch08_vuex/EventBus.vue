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
import sum from "@/components/eventBus/Sum_bus.vue";
import discount from "@/components/eventBus/Discount_bus.vue";
import order from "@/components/eventBus/Order_bus.vue"

export default {
    /* 사용할 컴포넌트 등록  */
    components: { sum, discount, order }
};
</script>

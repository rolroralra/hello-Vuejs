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
        </div>
    </div>
</template>

<script>
/* 사용할 컴포넌트 선언  */
import sum from "@/components/Sum.vue";
import discount from "@/components/Discount.vue";

export default {
    /* 사용할 컴포넌트 등록  */
    components: { sum, discount }
};
</script>

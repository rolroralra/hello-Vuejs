<template>
    <div>
        <h4>10% 할인가격:: {{amount}}</h4>
    </div>
</template>

<script>
export default {
    data: function() {
        return { amount: 540 };
    },
    created: function() {
        this.$eventBus.$off("changeTotal");
        this.$eventBus.$on("changeTotal", this.discountAmount);
    },
    methods: {
        discountAmount: function(sum) {
            this.amount = sum * 0.9;
            this.$eventBus.$emit('chgDiscAmt', this.amount);
        }
    }
};
</script>

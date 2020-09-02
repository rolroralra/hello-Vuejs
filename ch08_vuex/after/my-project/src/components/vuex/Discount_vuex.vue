<template>
    <div>
        <h4>10% 할인가격:: {{amount}}</h4>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: mapState({ amount: state => state.chargeAmount })
};
</script>

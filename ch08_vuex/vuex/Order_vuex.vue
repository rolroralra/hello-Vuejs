<template>
    <div>
        <div>
            <button @click="calcTransFee">배송비 계산</button>
            <table>
                <caption>5000원 이상이면 배송비 무료</caption>
                <tr>
                    <td class="species">주문금액</td>
                    <td class="amount">{{chargeAmount}}</td>
                </tr>
                <tr>
                    <td class="species">배송비</td>
                    <td class="amount">{{transFee}}</td>
                </tr>
                <tr v-if="isCalc">
                    <td class="species">총 금액</td>
                    <td class="amount">{{total}}</td>
                </tr>
            </table>
        </div>
        <br />
        <br />
        <div>
            <button @click="promotion">프로모션</button>
            <div v-if="isPromotion">프로모션 적용중~@</div>
        </div>
        <br />
        <br />
        <button @click="order">주문</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transFee: 0,
            isCalc: false,
            isPromotion: false,
            promotionAmount: 1000
        };
    },
    computed: {
        total() {
            return this.transFee + this.chargeAmount;
        },
        chargeAmount() {
            return this.$store.state.chargeAmount;
        }
    },
    methods: {
        calcTransFee() {
            this.isCalc = true;
            this.transFee = 0;
            if (this.chargeAmount < 5000) {
                this.transFee = 1000;
            }
        },
        promotion() {
            if (!this.isPromotion) {
                this.isPromotion = true;
            } else {
                this.isPromotion = false;
            }
            this.$store.dispatch("changePromotion", {
                isPromotion: this.isPromotion,
                amount: this.promotionAmount
            });
        },
        order() {
            if (!this.isCalc) {
                alert("배송비를 계산해주세요.");
            } else {
                alert("주문완료!! 주문금액:" + this.total);
            }
        }
    }
};
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 300px;
    margin: auto;
}

table,
tr,
td {
    border: solid 1px black;
}

.amount {
    text-align: right;
}

.species {
    text-align: center;
    width: 100px;
}
</style>

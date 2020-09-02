<template>
    <div class="content-area">
        <h3>1.이미지 GET 테스트</h3>
        <img :src="imgSrc" />
        <br />
        <button @click="changeRandomImg">Change Random Image</button>
        <hr />
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            imgSrc: "https://picsum.photos/200/200/?image=100",
        };
    },
    methods: {
        changeRandomImg() {
            // 0~255사이의 랜덤값을 GET 요청
            this.$axios
                .get(
                    "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8"
                )
                // 요청에 성공하면 실행될 메소드
                .then(response => {
                    console.log(response);
                    const no = response.data.data[0];
                    this.imgSrc = "https://picsum.photos/200/200/?image=" + no;
                });
        }
    }
};
</script>


<template>
    <div class="g-parent">
        <div class="parent">
            <h2 class="title">BROWSE BY DRESS STYLE</h2>
            <div class="child">
                <div class="item">
                    <img src="../assets/Images/browser-1.png" alt="Casual">
                    <!-- <span>Casual</span> -->
                </div>
                <div class="item">
                    <img src="../assets/Images/browser-2.png" alt="Formal">
                    <!-- <span>Formal</span> -->
                </div>
                <div class="item">
                    <img src="../assets/Images/browser-3.png" alt="Party">
                    <!-- <span>Party</span> -->
                </div>
                <div class="item">
                    <img src="../assets/Images/browser-4.png" alt="Gym">
                    <!-- <span>Gym</span> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.g-parent {
    margin-left: 5%;
    margin-right: 5%;
}

.parent {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 30px;
    padding: 30px;
    background-color: #F0F0F0;
}

.title {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
}

.child {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.item img {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
}

.item span {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
}

@media (max-width: 768px) {
    .parent {
        margin: 30px;
        padding: 20px;
    }

    .title {
        font-size: 36px;
    }

    .item span {
        font-size: 18px;
    }
}
</style>
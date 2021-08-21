<template lang="">
    <div>
        <div class="site-header__top" style="padding: 0;text-align: center;">
            <div class="site-header__top-container">
                <div class="container">
                    <div class="img-flash"></div>
                    <a href="https://canifa.com/flash-sale-1808.html" class="link-sale">
                        <picture>
                            <source media="(max-width: 991px)" srcset="https://media.canifa.com/wysiwyg/Aug18-FS-ThuDong-Mobile.png">
                        <img src="https://media.canifa.com/wysiwyg/Aug18-FS-ThuDong-Web.png" alt="" />
                        </picture>
                    </a>
                    <div class="clock-builder-output" data-countdown="2021/08/18 23:59:59"></div>
                </div>
            </div>
        </div>
        
        <div class="header">
            <div class="menu flex">
                <div class="menu-left flex">
                    <div class="logo">
                        <img src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/logo.png" width="105" height="55"> </img>
                    </div>
                    <div class="list-item">
                        <ul class="flex">
                            <li>Nam</li>
                            <li>Nữ</li>
                            <li>Bé gái</li>
                            <li>Bé trai</li>
                            <li>Mới</li>
                            <li>Gía tốt</li>
                            <li>Dưới 149k</li>
                        </ul>
                    </div>
                </div>
                <div class="menu-right flex" >
                    <div class="group-input flex">
                        <input id="search" type="search" name="q" value="" class="input-text required-entry" maxlength="128" placeholder="Tìm kiếm" />
                        <div class="icon-search"></div>
                    </div>
                    <div class="icon-location"></div>
                    <div class="icon-user"></div>
                    <div class="icon-cart"></div>
                </div>
            </div>
        </div>   
        <div class="header-promotion" style="text-transform: none;">
            <div class="slide">
                <div class="item" id="header-promotion-ship" v-show="showPromotion">Miễn phí vận chuyển cho đơn hàng từ 499.000đ</div>
                <div class="item" id="header-promotion-ship" v-show="!showPromotion">ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày</div>
            </div>
        </div>
    </div>   
    
</template>
<script>
export default {
    data() {
        return {
            showPromotion: true
        }
    },
    created() {
        setInterval(() =>{
            this.showPromotion = !this.showPromotion;
        }, 1000);
    },
    methods: {
        
    },
}
</script>

<style >
    .site-header__top-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
        background-color: #e86171;
        height: 65px;
        z-index: 21474836460;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        background-image: url(https://media.canifa.com/wysiwyg/Aug14-FS-web-background.png);
        background-repeat: no-repeat;
        background-position: center;
    }
   .flex{
        display: flex;
    }
    .header{
        display: flex;
        justify-content: center;
    }
    .slide {
        background-color: #333f48;
        width: 68%;
    }
    .menu{
        justify-content: space-between;
        width: 70%;
        position: fixed;
        top: 65px;
        padding: 20px;
        background-color: #ffffff;
        z-index: 100;
    }
    div#header-promotion-ship {
        line-height: 30px;
    }
    .header-promotion {
        justify-content: center;
        text-align: center;
        display: flex;
        height: 30px;
        color: #eae9e8;
        font-weight: 500;
        line-height: 14px;
        text-transform: uppercase;
        margin: 0 -25px;
        position: relative;
        top: 160px;
        background:none;
    }
    .menu li{
        list-style: none;
        margin-left: 20px;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
        display: block;
        padding-top: 20px;
        font-family: sans-serif;
        white-space: nowrap;
    }
    li:hover{
        color: red;
    }
    input#search{
        width: 250px;
        height: 26px !important;
        background: #fff;
        border: 1px solid #333f48;
        border-radius: 0;
        display: block;
        line-height: 26px;
        padding: 2px 15px;
        font-size: 13px;
        margin-top: 8px;
        text-overflow: ellipsis;
    }
    input#search{
        outline: 1px solid #333f48;
    }
    .icon-search{
        background: url('~@/assets/images/icon-search.svg') center center no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 8px;
        margin-top: 10px;
        margin-right: 16px;
    }
    .icon-location{
        background: url('~@/assets/images/icon-location.svg') center center no-repeat;
        width: 24px;
        height: 24px;
        margin-right: 16px;
        margin-top: 10px;
    }
    .icon-user{
        background: url('~@/assets/images/icon-user.svg') center center no-repeat;
        width: 24px;
        height: 24px;
        margin-top: 10px;
        margin-right: 16px;
    }
    .icon-cart{
        background: url('~@/assets/images/icon-cart.svg') center center no-repeat;
        width: 24px;
        height: 24px;
        margin-top: 10px;
        margin-right: 16px;
        
    }
</style>
<template>
    <div>
        <Menu/>
        <div class="content">
            <AccountContent/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import  Menu from '@/common/components/Menu.vue';
import  Footer from '@/common/components/Footer.vue';
import AccountContent from '@/views/Account/AccountContent.vue';
export default {
    components:{
        Menu,
        Footer,
        AccountContent
    },
    data() {
        return {
            
        }
    },
}
</script>
<style>
    .content{
        display: flex;
        position: relative;
        top: 160px;
        justify-content: center;
    }
</style>

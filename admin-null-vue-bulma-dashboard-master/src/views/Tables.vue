<template>
  <div>
    <title-bar :title-stack="titleStack"/>
    <hero-bar>
        <router-link slot="right" to="/client/new" class="button is-primary" @click="create">
          THÊM MỚI
        </router-link>
      </hero-bar>
    <section class="section is-main-section">
      
      <!-- <hr> -->
      <card-component class="has-table has-mobile-sort-spaced">
        <clients-table-sample :data-url="`${$router.options.base}data-sources/clients.json`" :checkable="true"/>
      </card-component>
      <!-- <hr> -->
      <!-- <card-component class="has-table has-thead-hidden">
        <clients-table-sample/>
      </card-component> -->
    </section>
  </div>

</template>

<script>
import Notification from '@/components/Notification'
import ClientsTableSample from '@/components/ClientsTableSample'
import CardComponent from '@/components/CardComponent'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Tables',
  components: { HeroBar, TitleBar, CardComponent, ClientsTableSample, Notification },
  computed: {
    titleStack () {
      return [
        'Admin',
        'Danh sách người dùng'
      ]
    }
  },
  methods: {
    create(){
      this.$router.push({ name: 'client.new' });
    }
  },
}
</script>

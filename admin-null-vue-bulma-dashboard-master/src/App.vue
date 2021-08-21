<template>
  <div id="app">
    <nav-bar/>
    <aside-menu :menu="menu" @menu-click="menuClick"/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  computed: {
    menu () {
      return [
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Tổng quan'
          },
          {
            to: '/tables',
            label: 'Người dùng',
            icon: 'table',
            updateMark: true
          },
          // {
          //   to: '/forms',
          //   label: 'Forms',
          //   icon: 'square-edit-outline'
          // },
          {
            to: '/profile',
            label: 'Thiết lập',
            icon: 'account-circle'
          },
        ]
      ]
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  },
  methods: {
    menuClick (item) {
      if (item.action && item.action === 'dark-mode-toggle') {
        this.$store.commit('darkModeToggle')
      }
    }
  }
}
</script>

<template>
  <card-component title="Thay đổi mật khẩu" icon="lock">
    <form @submit.prevent="submit">
      <b-field horizontal label="Mật khẩu hiện tại" message="Không được để trống">
        <b-input name="password_current" type="password" v-model="form.password_current" required
                 autcomplete="current-password"/>
      </b-field>
      <hr>
      <b-field horizontal label="Mật khẩu mới" message="Không được để trống">
        <b-input name="password" type="password" v-model="form.password" required autocomplete="new-password"/>
      </b-field>
      <b-field horizontal label="Xác nhận mật khẩu mới" message="Không được để trống">
        <b-input name="password_confirmation" type="password" v-model="form.password_confirmation" required
                 autocomplete="new-password"/>
      </b-field>
      <hr>
      <b-field horizontal>
        <div class="control">
          <button type="submit" class="button is-primary" :class="{'is-loading':isLoading}">
            Lưu
          </button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import CardComponent from '@/components/CardComponent'

export default {
  name: 'PasswordUpdateForm',
  components: {
    CardComponent
  },
  data () {
    return {
      isLoading: false,
      form: {
        password_current: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({
          message: 'Updated',
          queue: false
        }, 500)
      })
    }
  }
}
</script>

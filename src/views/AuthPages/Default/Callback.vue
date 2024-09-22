<template>
  <div></div>
</template>

<script>
import auth0 from 'auth0-js'
import constant from '../../../config/constant'

export default {
  name: 'Callback',
  mounted () {
    const autho = new auth0.WebAuth(constant.auth0Config)
    const token = this.$route.hash

    autho.parseHash({ hash: token }, (err, authResult) => { // Arrow function kullanıldı
      if (err) {
        console.error(err) // Hata durumunu kontrol et
        return
      }

      // eslint-disable-next-line handle-callback-err
      autho.client.userInfo(authResult.accessToken, (err, user) => { // Arrow function kullanıldı
        if (err) {
          console.error(err) // Hata durumunu kontrol et
          return
        }

        localStorage.setItem('user', JSON.stringify(user)) // User nesnesini JSON olarak saklayın
        localStorage.setItem('access_token', authResult.accessToken)
        this.$router.push({ name: 'dashboard.home-1' }) // Bu aşamada this doğru bir şekilde çalışır
      })
    })

    // Bu satırın burada ne amaçla kullanıldığını kontrol edin
    // this.$router.push('/dashboard') // Eğer gerekmiyorsa kaldırılabilir
  }
}
</script>

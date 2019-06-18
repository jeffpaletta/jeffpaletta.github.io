function init() {
  Tabletop.init({
    //key: ‘https: docs.google.com/spreadsheets/d/1MiZ-yTn6SbXEX41W7gobUX0fNDux58Todra6s-skml4/pubhtml',
    key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRK0-yuiGukbkdECWCjioknUBtSJNpLKg8jnCma71f3LdxsF7wykFdx69KOPNmm-jIOJWbYDW8DaIie/pubhtml'
    callback: function(data, tabletop) {
      console.log(data)
    },
    simpleSheet: true
  })
}
window.addEventListener(‘DOMContentLoaded’, init)

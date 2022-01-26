import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
import "@mdi/font/css/materialdesignicons.min.css";
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
    iconfont: 'mdiSvg',
    },
    theme: {
        themes: {
          light: {   
            primary:"#00B45F",       
            text:"#999",
            secondary: colors.grey,
            accent: colors.shades.black,
            error: colors.red.accent3,
          },
          dark: {
            primary: colors.blue.lighten3,
          },
        },
      },
  })

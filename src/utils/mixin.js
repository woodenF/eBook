import { mapGetters, mapActions } from 'vuex'
import { themeList, addCss, removeAllCss } from './book'
export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible',
      'settingVisible',
      'defaultFontSize',
      'currentBook',
      'defaultFontFamily',
      'fontFamilyVisible',
      'defaultTheme'
    ]),
    themeList() {
      return themeList(this)
    }
  },
  methods: {
    ...mapActions([
      'setMenuVisible',
      'setFileName',
      'setSettingVisible',
      'setDefaultFontSize',
      'setCurrentBook',
      'setDefaultFontFamily',
      'setFontFamilyVisible',
      'setDefaultTheme'
    ]),
    initGlobalStyle() {
      removeAllCss()
      const url = `${process.env.VUE_APP_RES_URL}/theme/theme_${this.defaultTheme.toLowerCase()}.css`
      addCss(url)
    }
  }
}

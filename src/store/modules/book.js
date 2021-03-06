const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1: 不显示 0: 字号 1: 主题 2: 进度 3: 目录
    defaultFontSize: 16,
    currentBook: null,
    defaultFontFamily: 'Default',
    fontFamilyVisible: false,
    defaultTheme: 'Default',
    progress: 0,
    bookAvailable: false,
    section: 0,
    cover: null,
    metadata: null,
    offsetY: 0,
    isBookmark: null,
    pagelist: null,
    paginate: '',
    navigation: null
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENUVISIBLE': (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    'SET_SETTINGVISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_DEFAULTFONTSIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    },
    'SET_CURRENTBOOK': (state, currentBook) => {
      state.currentBook = currentBook
    },
    'SET_DEFAULTFONTFAMILY': (state, defaultFontFamily) => {
      state.defaultFontFamily = defaultFontFamily
    },
    'SET_PAGINATE': (state, paginate) => {
      state.paginate = paginate
    },
    'SET_FONTFAMILYVISIBLE': (state, fontFamilyVisible) => {
      state.fontFamilyVisible = fontFamilyVisible
    },
    'SET_DEFAULTTHEME': (state, defaultTheme) => {
      state.defaultTheme = defaultTheme
    },
    'SET_PROGRESS': (state, progress) => {
      state.progress = progress
    },
    'SET_BOOKAVAILABLE': (state, bookAvailable) => {
      state.bookAvailable = bookAvailable
    },
    'SET_SECTION': (state, section) => {
      state.section = section
    },
    'SET_COVER': (state, cover) => {
      state.cover = cover
    },
    'SET_METADATA': (state, metadata) => {
      state.metadata = metadata
    },
    'SET_NAVIGATION': (state, navigation) => {
      state.navigation = navigation
    },
    'SET_IS_BOOKMARK': (state, isBookmark) => {
      state.isBookmark = isBookmark
    },
    'SET_PAGELIST': (state, pagelist) => {
      state.pagelist = pagelist
    },
    'SET_OFFSETY': (state, offsetY) => {
      state.offsetY = offsetY
    }
  }
}

export default book

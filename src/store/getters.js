const book = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  currentBook: state => state.book.currentBook,
  defaultFontFamily: state => state.book.defaultFontFamily,
  fontFamilyVisible: state => state.book.fontFamilyVisible,
  defaultTheme: state => state.book.defaultTheme,
  progress: state => state.book.progress,
  bookAvailable: state => state.book.bookAvailable,
  section: state => state.book.section,
  cover: state => state.book.cover,
  metadata: state => state.book.metadata,
  navigation: state => state.book.navigation,
  paginate: state => state.book.paginate,
  pagelist: state => state.book.pagelist,
  isBookmark: state => state.book.isBookmark,
  offsetY: state => state.book.offsetY,
  hotSearchOffsetY: state => state.store.hotSearchOffsetY,
  flapCardVisible: state => state.store.flapCardVisible
}

export default book

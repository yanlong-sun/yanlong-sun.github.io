import { createI18n } from 'vue-i18n'
import en from './en.json'
import cn from './cn.json'

export default createI18n({
  locale: 'cn',
  messages: {
    en,
    cn
  }
})

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "cn",
  messages: {
    en: require("./locales/en.json"),
    cn: require("./locales/cn.json")
  },
});

export default i18n;

// i18n.js starter content
import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: { translation: { welcome: 'Welcome' } },
    ms: { translation: { welcome: 'Selamat Datang' } },
    zh: { translation: { welcome: '欢迎' } },
    ta: { translation: { welcome: 'வணக்கம்' } },
    bn: { translation: { welcome: 'স্বাগতম' } }
  }
});

export default i18next;

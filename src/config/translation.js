export const languages = [
  { code: "GB EN", name: "English (UK)", value: "en" },
  { code: "US EN", name: "English (US)", value: "en" },
  { code: "ES", name: "Español", value: "es" },
  { code: "DE", name: "Deutsch", value: "de" },
  { code: "FR", name: "Français", value: "fr" },
];

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

export const setCookie = (name, value, days = 30) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

export const getSavedLanguage = () => {
  const cookieVal = getCookie('googtrans');
  if (cookieVal) {
    const parts = cookieVal.split('/');
    const code = parts[parts.length - 1]; // e.g. "es"
    const lang = languages.find((l) => l.value === code);
    if (lang) return lang;
  }
  const stored = localStorage.getItem('selected_language');
  if (stored) {
    const lang = languages.find((l) => l.code === stored);
    if (lang) return lang;
  }
  return languages[0]; // English (UK)
};

export const initializeGoogleTranslate = () => {
  if (window.googleTranslateElementInit) return;

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      'google_translate_element'
    );
  };

  let elem = document.getElementById('google_translate_element');
  if (!elem) {
    elem = document.createElement('div');
    elem.id = 'google_translate_element';
    elem.style.display = 'none';
    elem.style.position = 'absolute';
    elem.style.top = '-9999px';
    document.body.appendChild(elem);
  }

  const scriptId = 'google-translate-script';
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
  }
};

export const changeLanguage = (langCode) => {
  localStorage.setItem('selected_language', langCode);
  const lang = languages.find((l) => l.code === langCode);
  const targetVal = lang ? lang.value : 'en';

  if (targetVal === 'en') {
    setCookie('googtrans', '', -1);
    setCookie('googtrans', '/en/en', 30);
  } else {
    setCookie('googtrans', `/en/${targetVal}`, 30);
  }

  const selectEl = document.querySelector('.goog-te-combo');
  if (selectEl) {
    selectEl.value = targetVal;
    selectEl.dispatchEvent(new Event('change'));
  }

  window.dispatchEvent(new CustomEvent('languageChanged', { detail: langCode }));
};

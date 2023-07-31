const dictionaries = {
  en: () => import("./dictionaries/en.json").then(r => r.default).catch(err=> console.log(err)),
  ka: () => import("./dictionaries/ka.json").then(r => r.default).catch(err=> console.log(err))
}

export const getDictionary = (lang) => {
  return dictionaries[lang]();
}
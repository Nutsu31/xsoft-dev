const dictionaries = {
  en: () => import("./src/app/dictionaries/en.json").then(r => r.default).catch(err=> console.log(err)),
  ka: () => import("./src/app/dictionaries/ka.json").then(r => r.default).catch(err=> console.log(err))
}

export const getDictionary = (lang) => {
  return dictionaries[lang]();
}
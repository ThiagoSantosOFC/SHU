import { useRouter } from "next/router";

const SelectLang = () => {
  const router = useRouter();

  const handleLangChange = (lang) => {
    localStorage.setItem("lang", lang);
    if (lang === "en") {
      router.push("../en");
    } else {
      router.push(router.pathname, router.asPath, { locale: lang });
    }
  };

  const lang = router.locale === "en" ? "English" : "Italiano";

  return (
    <div className="flex items-center">
      <span className="mr-2">Lingua:</span>
      <select
        className="px-2 py-1 rounded-md bg-gray-200 mb-2 text-sm font-medium text-gray-900 dark:text-white"
        value={lang}
        onChange={(e) => handleLangChange(e.target.value === "English" ? "en" : "")}
      >
        <option value="Italiano">Italiano</option>
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default SelectLang;
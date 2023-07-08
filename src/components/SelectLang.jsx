import { useRouter } from "next/router";
import { useState } from "react";
const SelectLang = () => {
  const router = useRouter();

  const langGet = ()  => {
    if (router.pathname.startsWith("/en")) {
      return "en";
    } else {
      return "italian";
    }
  };

  const [lang, setLang] = useState(langGet());

  const handleLangChange = (lang) => {
    setLang(lang);
    if (lang === "en") {
      router.push("/en");
    } else {
      router.push("/");
    }

  };

  const label = lang === "en" ? "Language" : "Lingua";




  
  return (
    <div className="flex justify-center items-center">
      <label htmlFor="lang-select" className="mr-2">
        {label}
      </label>
      <select
        id="lang-select"
        className="px-2 py-1 rounded-md bg-gray-200 text-black mb-2 text-sm font-medium"
        value={lang}
        onChange={(e) => handleLangChange(e.target.value)}
      >
        <option className="text-black" value="italian">
          Italiano
        </option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default SelectLang;
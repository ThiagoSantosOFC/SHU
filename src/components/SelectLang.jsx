import React from 'react';

function SelectLang(props) {
  const { languages, selectedLanguage, onLanguageChange } = props;

  return (
    <select value={selectedLanguage} onChange={onLanguageChange}>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name} {language.code === 'en' && <img src="/images/england-flag.png" alt="English flag" />}
          {language.code === 'uk' && <img src="/images/uk-flag.png" alt="UK flag" />}
        </option>
      ))}
    </select>
  );
}

export default SelectLang;
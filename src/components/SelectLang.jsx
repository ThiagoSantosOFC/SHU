import React from 'react';

function SelectLang(props) {
  const { languages, selectedLanguage, onLanguageChange } = props;

  return (
    <select value={selectedLanguage} onChange={onLanguageChange}>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name} {language.code === 'en' && <img src="/images/united-kingdom(1).png" alt="UK flag" />}
          {language.code === 'it' && <img src="/images/italy(1).png" alt="IT flag" />}
        </option>
      ))}
    </select>
  );
}

export default SelectLang;
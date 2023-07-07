import React from 'react';

function SelectLang(props) {
  const { languages, selectedLanguage, onLanguageChange } = props;

  return (
    <select value={selectedLanguage} onChange={onLanguageChange}>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
}

export default SelectLang;
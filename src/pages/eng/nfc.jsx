import React, { useEffect, useState } from 'react';
import { NFC } from 'react-nfc';
import Footer from '../components/eng/footer';
import NavBar from '../components/eng/NavBar';

function NFCReader() {
  const [tagId, setTagId] = useState(null);

  useEffect(() => {
    const handleTagDetected = (tag) => {
      const tagId = tag.id;
      setTagId(tagId);
    };

    const handleTagLost = () => {
      setTagId(null);
    };

    // Add event listeners when component mounts
    document.addEventListener('nfc.reader.connected', handleTagDetected);
    document.addEventListener('nfc.reader.disconnected', handleTagLost);

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener('nfc.reader.connected', handleTagDetected);
      document.removeEventListener('nfc.reader.disconnected', handleTagLost);
    };
  }, []);

  return (
    <div>
      <h2>NFC Reader</h2>
      {tagId ? (
        <p>Tag ID: {tagId}</p>
      ) : (
        <p>No NFC tag detected.</p>
      )}
      <NFC>
        {/* Your app content */}
      </NFC>
    </div>
  );
}

export default NFCReader;
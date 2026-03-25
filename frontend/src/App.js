import React, { useState } from 'react';
import LanguageToggle from './components/LanguageToggle';
import PointsTable from './components/PointsTable';
import PaymentOptions from './components/PaymentOptions';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App" style={{ maxWidth: 600, margin: 'auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <LanguageToggle />
      </div>
      <h1>{t('welcome')}</h1>
      <p>{t('about')}</p>
      <PointsTable />
      <div style={{ margin: '24px 0' }}>
        <PaymentOptions />
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from 'react';

const DataFormatter = ({ rawData, onDataFormatted }) => {
  useEffect(() => {
    // Realize aqui a formatação necessária dos dados brutos
    const formattedData = {} /* ... formatar rawData de acordo com suas necessidades ... */;
    onDataFormatted(formattedData);
  }, [rawData, onDataFormatted]);

  return null;
};

export default DataFormatter;

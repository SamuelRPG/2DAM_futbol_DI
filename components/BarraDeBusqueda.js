import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const BarraDeBusqueda = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleOnChange = (query) => {
    setSearchQuery(query);
    onSearch(query); // ✅ send search text back to parent
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={/*(newValue) => setSearchQuery(newValue)*/ handleOnChange}
      value={searchQuery}
    />
  );
};

export default BarraDeBusqueda;
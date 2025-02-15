import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext(null);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [highlightedProductId, setHighlightedProductId] = useState(null);
  
  const highlightProduct = useCallback((productId) => {
    setHighlightedProductId(productId);
    
    // Clear the highlight after 3 seconds
    const timerId = setTimeout(() => {
      setHighlightedProductId(null);
    }, 3000);
    
    return timerId;
  }, []);
  
  useEffect(() => {
    return () => {
      if (highlightedProductId) {
        clearTimeout(highlightedProductId);
      }
    };
  }, [highlightedProductId]);

  return (
    <SearchContext.Provider 
      value={{ 
        highlightedProductId, 
        highlightProduct 
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired
};
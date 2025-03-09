const formatPrice = (price) => {
    if (typeof price !== 'number') {
      console.warn('Invalid price value passed to formatPrice');
      return '$0.00';
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };
  
  export default formatPrice;
  
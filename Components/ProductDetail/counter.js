export const quantityCounter = items => {
    let quantity = 0;
    items.forEach(item => (quantity += item.quantity));
    return quantity;
  };
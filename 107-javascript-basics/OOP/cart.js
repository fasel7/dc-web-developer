const cart = function () {
  const productList = [];

  function addToCart(id, price, attributes) {
    const listIndex = getIndexById(id);

    if (!listIndex) {
      // push new product
      productList.push({
        id,
        price,
        quantity: 1,
        attributes,
      });
    } else {
      // increase quantity
      updateQuantity(id, productList[listIndex].quantity + 1);
    }
  }
  function getIndexById(id) {
    let foundIndex = false;

    for (const idx in productList) {
      if (productList[idx].id == id) {
        foundIndex = idx;
        break;
      }
    }
    return foundIndex;
  }
  function removeFromCart(id) {
    productList.splice(getIndexById(id), 1);
  }
  function updateQuantity(id, quantity) {
    // check if qty = 0
    if (quantity == 0) {
      removeFromCart(id);
    } else {
      // update products qty in list
      productList[getIndexById(id)].quantity = quantity;
    }
  }
  function getCount() {
    return productList.length;
  }
  function getTotal() {
    // calc sum of product prices
    let total = 0;
    productList.forEach((element) => {
      total += element.price * element.quantity;
    });
    return total;
  }
  function checkout() {
    // return product list
    return {
      productList,
      count: getCount(),
      total: getTotal(),
    };
  }

  return {
    productList,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCount,
    getTotal,
    checkout,
    getIndexById,
  };
};

const shoppingCart = cart();

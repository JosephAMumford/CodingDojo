var collection = [];

function orderSupplies(item, callback) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
  
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        }
      };
  
      callback(warehouse[item]);
    }, deliveryTime);
  }
  
  function receivedItem(item) {
    if(item.product == 'Neon Green Paint'){
        collection[0] = item;
    }
    if(item.product == 'Horsehair brush'){
        collection[1] = item;
    }
    if(collection[0] != null && collection[1] != null){
        console.log(`Received ${collection[0].product} time to ${collection[0].directions()}`);
        console.log(`Received ${collection[1].product} time to ${collection[1].directions()}`);
    }
  }
  
  orderSupplies('paint', receivedItem);
  orderSupplies('brush', receivedItem);


document.addEventListener('DOMContentLoaded', function() {

    var _items = document.querySelector('.items');
    var _item = document.querySelector('.item-container');
    
    for (var a=1; a<=12; a++) {
      var _node = _item.cloneNode(true);
      _items.appendChild(_node);
    }
    
    var _itemDivs = document.querySelectorAll('.item');
    
  });
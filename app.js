function remove (){
  var removeCartItem = document.getElementsByClassName("fa fa-trash-alt");
  for (var i = 0; i < removeCartItem.length; i++) {
    var button = removeCartItem[i];
    button.addEventListener("click", function (event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
    });
  }
};

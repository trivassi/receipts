$(document).ready(function() {

  var cost = 0;

  $("#pizza").click(function() {
    cost += 7.00;
    $("#total").text(cost)
  })

  $("#soda").click(function() {
    cost += 3.00;
    console.log(cost);
    $("#total").text(cost)
  })


  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var address = $("input#adress").val();

    $("#name").text(name)
    $("#address").text(address)
    // $("#total").text(cost)

  });

});

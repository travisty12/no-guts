var guts = 0;
var rate = 1;
var shovCost = 10;
var dozerCost = 100;
var numShov = 0;
var numDozer = 0;
var shovRate = 1;
var dozerRate = 10;

function gutrate() {
  return (rate * ((shovRate * numShov) + (dozerRate * numDozer) + 1));
}

$(document).ready(function() {
  $("#upgrade-tab").click(function() {
    $("#guts-main").toggle();
    $("#shop-main").toggle();
    $("#upgrade-tab").toggle();
    $("#main-tab").toggle();
  });
  $("#main-tab").click(function() {
    $("#guts-main").toggle();
    $("#shop-main").toggle();
    $("#upgrade-tab").toggle();
    $("#main-tab").toggle();
  });
  $("#shovel-up1").click(function() {
    $("#shovel-up1").hide();
    guts -= 100;
    shovRate *= 2;
    $("#counter").text("guts: " + guts);
    $("#rate-counter").text("guts per click: " + gutrate());
  });
  $("#dozer-up1").click(function() {
    $("#dozer-up1").hide();
    guts -= 1000;
    dozerRate *= 2;
    $("#counter").text("guts: " + guts);
    $("#rate-counter").text("guts per click: " + gutrate());
  });
  $("#collect1").click(function() {
    guts += gutrate();
    $("#counter").text("guts: " + guts);
    if (guts >= shovCost) {
      $("#collect2").fadeIn();
      $("#collect-btn2").text("buy shovel: " + shovCost + " guts");
    }
    if (guts >= dozerCost) {
      $("#collect3").fadeIn();
      $("#collect-btn3").text("buy bulldozer: " + dozerCost + " guts");
    }
  });
  $("#collect2").click(function() {
    guts -= shovCost;

    shovCost *=2;
    $("#counter").text("guts: " + guts);
    if (guts <= shovCost) {
      $("#collect2").hide();
    }
    if (guts <= dozerCost) {
      $("#collect3").hide();
    }
    if (numShov == 0) {
      $("#shovs").fadeIn();
    }
    numShov++;
    $("#shovs").children("p").text("shovels: " + numShov);
    $("#rate-counter").text("guts per click: " + gutrate());
  });
  $("#collect3").click(function() {
    guts -= dozerCost;
    dozerCost *= 2;
    $("#counter").text("guts: " + guts);
    if (guts <= shovCost) {
      $("#collect2").hide();
    }
    if (guts <= dozerCost) {
      $("#collect3").hide();
    }
    if (numDozer == 0) {
      $("#dozers").fadeIn();
    }
    numDozer++;
    $("#dozers").children("p").text("bulldozers: " + numDozer);
    $("#rate-counter").text("guts per click: " + gutrate());
  });


});

  // Issue: The Job Search custom datalist is really horrible. Now that IE11 is not supported, we should begin using datalist instead.

  var a11ySearchDataList = magicBulletScript.getAttribute("data-a11y-search-datalist");

  if(a11ySearchDataList !== null) {

    a11yBody.classList.add("a11y-search-location");

    var $searchLocation = $(".search-location");
    var $mindReaderResults = $(".mindreader-results");

    // Adding postal code now to satisify certain requirements, but may need to remove.

    // $searchLocation.attr("autocomplete", "postal-code");

    $searchLocation.attr("list", "search-location-datalist").after("<datalist id='search-location-datalist' class='search-location-datalist'></div>");

    var $searchLocationDatalist = $(".search-location-datalist");

    $searchLocation.on("keypress", function() {

      var $htmlStr = $mindReaderResults.find("a");
      var $cloneList = $htmlStr.clone();

      // Get all links from mindreader, clone them, make a new list.

      $searchLocationDatalist.html($cloneList);

      var newList = $searchLocationDatalist.find("a");

      // Grag each data-* from list and apply to new element (option)

      newList.each(function(){

        var $targetId = $(this).data("target-id");
        var $lat = $(this).data("lat");
        var $lon = $(this).data("lon");
        var $lp = $(this).data("lp");
        var $lt = $(this).data("lt");
        var $pc = $(this).data("pc");
        var $htmlText = $(this).text();
        $(this).replaceWith("<option data-lat=" + $lat + " data-lon=" + $lon + " data-lp=" + $lp + " data-lt=" + $lt + " data-pc=" + $pc + ">" + $htmlText + "</option>");

      });

    });

    $searchLocation.on("change", function() {

      var val = $(this).val();

      var lat = $searchLocationDatalist.find("option").filter(function() {

        return this.value == val;

      }).data("lat");

      var lon = $searchLocationDatalist.find("option").filter(function() {

        return this.value == val;

      }).data("lon");

      var lp = $searchLocationDatalist.find("option").filter(function() {

        return this.value == val;

      }).data("lp");

      var lt = $searchLocationDatalist.find("option").filter(function() {

        return this.value == val;

      }).data("lt");

      $(this).attr({

        "data-lon": lon,
        "data-lat": lat,
        "data-lp": lp,
        "data-lt": lt

      });

    });

  }
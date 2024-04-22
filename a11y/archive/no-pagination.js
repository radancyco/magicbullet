// Issue: The search navigation is often style not to look like a form and submit button is removed
// So we need to strip this functionality and simply show text.

function noFormPagination() {

    var pageStatusText = $(".pagination-current-label span").text() + " " + $(".pagination-current").val() + " " + $(".pagination-total-pages").text();

    var pageStatus = pageStatusText.trim();

    if($(".pagination-no-form").length) {

      if(!$(".pagination-page-status").length) {

        $(".pagination-page-count").append("<p class='pagination-page-status' tabindex='0'>" + pageStatus + "</p>");

        $(".pagination-no-form").remove();

      }

    }

}

  noFormPagination(); // Initial Page Load
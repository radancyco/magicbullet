// Pull in the code preview...

$(".code").each(function() {

  $(this).parent().load($(this).attr("href"));

});

$("#toc").appendTo("#toc-placeholder");

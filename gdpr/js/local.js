// Pull in the code preview...

$(".code").each(function() {

  $(this).parent().load($(this).attr("href"));

});

// Quick & Dirty TOC

$("#implementation").before("<h2>Table of Contents</h2><p>The following is a list of all the parameters that can currently be passed into the GDPR script.</p><ol id='toc'></ol>")

$("h3[id*=data-]").each(function(index) {

    var newAppendixItem = "<li><a href=#" + $(this).attr("id") + ">" + $(this).text() + "</a></li>";

    $("#toc").append(newAppendixItem);

});

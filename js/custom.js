$(function () {
  $("a").attr('target', '_blank');
  $("b.conum").each(function (i, e) {
    var $e = $(e)
    var content = $e.html().replace("(", "").replace(")", "")
    $e.html(content)
    $span = $e.children('span')
    $span.attr('style', 'color:#fff !important')
  })
  $(".colist").children('ol').addClass('custom-counter')
  $("code.language-clojure").each(function (i, e) {
    var level = 0;
    $(e).children("span.token.punctuation").each(function (i, t) {
      console.log($(t).html())
    })
  });
});
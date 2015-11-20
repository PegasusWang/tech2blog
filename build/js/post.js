$(document).ready(function() {
  return $.post("http://108.61.162.175:8888/post/564df35dba9f518a812c2510/", function(result) {
    var context, html, post, source, template;
    post = result;
    source = $("#post-template").html();
    template = Handlebars.compile(source);
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: false,
      smartLists: false,
      smartypants: false,
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });
    context = {
      "title": post.title,
      "content": marked(post.content)
    };
    html = template(context);
    $("body").html(html);
    hljs.configure({
      tabReplace: '    '
    });
    return hljs.initHighlighting();
  }, "json");
});

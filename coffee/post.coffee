$(document).ready ->
    $.post("http://108.61.162.175:8888/post/564df35dba9f518a812c2510/", (result)->
        post = result
        source = $("#post-template").html()
        template = Handlebars.compile(source)
        marked.setOptions({
            renderer: new marked.Renderer()
            gfm: true
            tables: true
            breaks: true
            pedantic: false
            sanitize: false
            smartLists: false
            smartypants: false
            highlight: (code)-> 
                return hljs.highlightAuto(code).value
        })
        context = {
            "title": post.title
            "content": marked(post.content)
        }
        html = template(context)
        $("body").html(html)

        hljs.configure({
            tabReplace: '    '
        })
        hljs.initHighlighting()
    , "json")
    

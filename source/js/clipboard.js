// from https://titangene.github.io/article/hexo-copy-code-snippet-to-clipboard.html
$(function () {
    var snippets = document.querySelectorAll('code');
    var copyButton = `<button class="copy-button tooltipped" aria-label="Copy to clipboard""><i class="material-icons md-16">content_copy</i></button>`;
    snippets.forEach(snippet => {
        var parent = snippet.parentNode;
        // check if the parent is a pre tag
        if (parent.tagName === 'PRE')
            parent.firstChild.insertAdjacentHTML('beforebegin', copyButton);
    });

    var clipboard = new ClipboardJS('.copy-button', {
        target: trigger => {
            return trigger.nextSibling;
        },
    });
    clipboard.on('success', e => {
        e.trigger.setAttribute('aria-label', 'Copied!');
        // change the icon to check
        e.trigger.innerHTML = '<i class="material-icons md-16">task_alt</i>';
        e.clearSelection();
    });

    var btns = document.querySelectorAll('.copy-button');
    btns.forEach(btn => {
        btn.addEventListener('mouseleave', e => {
            e.target.setAttribute('aria-label', 'Copy to clipboard');
            // change the icon back to content_copy
            e.target.innerHTML = '<i class="material-icons md-16">content_copy</i>';
            e.target.blur();
        });
        btn.addEventListener('click', e => {
            e.preventDefault();
        });
    });
});
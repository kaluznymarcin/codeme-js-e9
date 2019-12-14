/**
 * Zapisz wycinek HTML jako obiekt javascript
 */

/*
<article id="art-1" class="box" role="listitem">
    <h2 class="box__title">
        Tytul
    </h2>
    <div class="box__content">
        jakis tekst
    </div>
</article >
*/
/*
<
    article
    id="art-2"
    class="box"
    role="listitem"
>
    <h2 class="box__title">Tytul</h2>
    <div class="box__content">jakis tekst</div>
</article >
*/

const html = [
    {
        nodeName: 'article',
        id: "art-1",
        class: 'box',
        role: "listitem",
        childNodes: [
            {
                nodeName: 'h2',
                class: "box__title",
                childNodes: [
                    'tytul'
                ]
            }, {
                nodeName: 'div',
                class: "box__content",
                childNodes: [
                    'jakis tekst'
                ]
            }
        ]
    },
    {
        nodeName: 'article',
        id: "art-2",
        class: 'box',
        role: "listitem",
        childNodes: [
            {
                nodeName: 'h2',
                class: "box__title",
                childNodes: [
                    'tytul'
                ]
            }, {
                nodeName: 'div',
                class: "box__content",
                childNodes: [
                    'jakis tekst'
                ]
            }
        ]
    }
]

'<article id="art-1" class="box" role="listitem">'

function attributes(item) {
    const {nodeName, childNodes, ...attr} = item;
    return Object.entries(attr).map(([key, value]) => `${key}="${value}"`).join(' ')
}

function toHTML(objHTML) {
    return objHTML.map(item =>
        typeof item === 'string' ? item : `<${item.nodeName} ${attributes(item)}>
            ${item.childNodes && toHTML(item.childNodes)}
        </${item.nodeName}>`
    ).join('');
}

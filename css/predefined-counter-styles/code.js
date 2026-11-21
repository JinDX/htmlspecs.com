function addExamples (styleName, lang, dir, type) {
    // draws the "Output in your browser" boxes.
    // type is one of 'vshort' (stops after 22), or short (stops after 44)
    if (typeof type === 'undefined') type = 'full'
    
    var out = ''
    out += `<p class="browser_output_title">Output in your browser:<a style="float:right" href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#browser_compatibility" target="_blank"><img src="compat.svg" alt="Check for built-in browser support." title="Check for built-in browser support."></a></p>`
    out += `<div class="template_container" style="display:flex; flex-direction:row; justify-content:space-between;"`
    if (dir === 'rtl') out += ` dir="rtl">`
    else out += `>`
    
    out += `
    <ol lang="${ lang }" style="list-style-type: ${ styleName }; display:block;"><li>one</li><li>two</li><li>three</li><li>four</li><li>five</li></ol>
    <ol start="6" lang="${ lang }" style="list-style-type: ${ styleName }; display:block;"><li>six</li><li>seven</li><li>eight</li><li>nine</li><li>ten</li></ol>
    <div>
    <ol start="11" class='high' lang="${ lang }" style="list-style-type: ${ styleName };"><li>11</li></ol>
    <ol start="22" class='high' lang="${ lang }" style="list-style-type: ${ styleName };"><li>22</li></ol>`
    if (type !== 'vshort') out += `
    <ol start="33" class='high' lang="${ lang }" style="list-style-type: ${ styleName };"><li>33</li></ol>
    <ol start="44" class='high' lang="${ lang }" style="list-style-type: ${ styleName };"><li>44</li></ol>`
    out += `</div>`
    
    if (type === 'full') {
        out += `<div>
    <ol start="111" class='high' lang="${ lang }" style="list-style-type: ${ styleName };"><li>111</li></ol>
    <ol start="222" class='high' lang="${ lang }" style="list-style-type: ${ styleName };"><li>222</li></ol>
    <ol start="333" class='high' lang="${ lang }" style="list-style-type: ${ styleName };"><li>333</li></ol>
    <ol start="444" class='high' lang="${ lang }" style="list-style-type: ${ styleName };"><li>444</li></ol>`
        }
    
    out += `</div>
    `
    out += `</div>`

    document.getElementById('out_'+styleName).innerHTML = out
    }







function copyTemplate (id) {
    navigator.clipboard.writeText(document.getElementById(id).parentNode.querySelector('.counterstyle').textContent)
    document.getElementById('copyNotice').style.display = 'block'
    setTimeout(() => { document.getElementById('copyNotice').style.display = 'none' }, '500')
    }

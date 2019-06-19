function parse() {
    if (document.querySelector('table')) {
        document.querySelector('table').innerHTML = '';
    }
    const NMtext = document.querySelector('.input-area').value;
    const Match = NMtext.match(/[0-9]{9}/g);
    request(Match);
}

let c = 1;
let R;
function request(arr) {
    const url = 'www.portal.nalog.gov.by/grp/getData?';
    const type = '&charset=UTF-8&type=json';
    const cors = 'https://cors-anywhere.herokuapp.com/';
    constructor('table', 'result-table', '.container', '', 0);
    constructor('tr', 'tr-header', '.result-table', '', 0);
    constructor('td', 'td-header', '.tr-header', '<p>элемент</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>лицо</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>активность</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>дата регистрации</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>дата исключения</p>', 0);
    arr.forEach((e) => {
        const fullUrl = cors + url + 'unp=' + e + type;
        console.log(fullUrl);
        fetch(fullUrl, { mode: 'cors', headers: {
            'Access-Control-Allow-Origin':'https://www.portal.nalog.gov.by/'
        } }).then((resp) => {
            return resp.text();
        })
            .then((text) => {
                if (text.slice(0, 10) != '<!DOCTYPE ') {
                    let R = JSON.parse(text);
                    let date;

                    if (R.ROW.DLIKV == null) {
                        date = '-';
                    } else {
                        date = R.ROW.DLIKV;
                    }
                    constructor('tr', `tr-content${c}`, '.result-table', '', 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${R.ROW.VUNP}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${R.ROW.VNAIMK}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${R.ROW.VKODS}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${R.ROW.DREG}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${date}`, 0);
                    c++;
                }
                else {
                    constructor('tr', `tr-content${c}`, '.result-table', '', 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${e}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `-`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `-`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `-`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `-`, 0);
                    c++;
                }
            })
    });
}

function constructor(tag, cls, parent, html, i) {
    const el = document.createElement(`${tag}`);
    const pr = document.querySelectorAll(`${parent}`)[i];
    el.innerHTML = html;
    el.className = cls;
    pr.appendChild(el);
}

function parse() {
    const NMtext = document.querySelector('.input-area').value;
    const Match = NMtext.match(/[0-9]{9}/g);
    request(Match);
}

let c = 1;
function request(arr) {
    let R;
    const url = 'http://egr.gov.by/egrn/API.jsp?';
    constructor('table', 'result-table', '.container', '', 0);
    constructor('tr', 'tr-header', '.result-table', '', 0);
    constructor('td', 'td-header', '.tr-header', '<p>элемент</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>активность</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>дата регистрации</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>дата исключения</p>', 0);
    arr.forEach((e) => {
        const fullUrl = url + 'NM=' + e;
        fetch(fullUrl, { mode: 'cors' }).then((resp) => {
            return resp.text();
        })
            .then((text) => {
                let R = JSON.parse(text);
                let date;
                let state;
                if (R[0].NS) {
                    state = 'активен';
                } else if (!R[0].NS) {
                    state = 'не активен';
                }
                if (R[0].DD == null) {
                    date = '-';
                } else {
                    date = R[0].DD;
                }
                constructor('tr', `tr-content${c}`, '.result-table', '', 0);
                console.log(document.querySelector(`.tr-content${c}`));
                constructor('td', 'td-content', `.tr-content${c}`, `${R[0].NM}`, 0);
                constructor('td', 'td-content', `.tr-content${c}`, `${state}`, 0);
                constructor('td', 'td-content', `.tr-content${c}`, `${R[0].DC}`, 0);
                constructor('td', 'td-content', `.tr-content${c}`, `${date}`, 0);
                c++;
            })
        c++;

    });
}

function constructor(tag, cls, parent, html, i) {
    const el = document.createElement(`${tag}`);
    const pr = document.querySelectorAll(`${parent}`)[i];
    el.innerHTML = html;
    el.className = cls;
    pr.appendChild(el);
}

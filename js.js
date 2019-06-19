function parse() {
    if (document.querySelector('table')) {
        document.querySelector('table').innerHTML = '';
    }
    const NMtext = document.querySelector('.input-area').value;
    const Match = NMtext.match(/[0-9]{9}/g);
    st = document.querySelector('.select-src').value;
    chb = document.querySelector('.chb').checked;
    request(Match);
}
let st;
let chb;
let c = 1;
let R;
let _R = {};
let url, n, type;
let fullUrl;
function request(arr) {
    if (st == 2) {
        url = 'https://www.portal.nalog.gov.by/grp/getData?';
        n = 'unp=';
        type = '&charset=UTF-8&type=json';
    } else if (st == 1) {
        url = 'http://egr.gov.by/egrn/API.jsp?';
        n = 'NM=';
        type = '';
    }

    constructor('table', 'result-table', '.container', '', 0);
    constructor('tr', 'tr-header', '.result-table', '', 0);
    constructor('td', 'td-header', '.tr-header', '<p>элемент</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>лицо</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>активность</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>дата регистрации</p>', 0);
    constructor('td', 'td-header', '.tr-header', '<p>дата исключения</p>', 0);
    arr.forEach((e) => {
        if (chb) {
            fullUrl = 'https://cors-anywhere.herokuapp.com/' + url.slice(8, url.length) + n + e + type;
        } else {
            fullUrl = url + n + e + type;
        }
        console.log(fullUrl);
        fetch(fullUrl, { mode: 'cors'}).then((resp) => {
            return resp.text();
        })
            .then((text) => {
                if (text && text.slice(0, 10) != '<!DOCTYPE ') {
                    if (text == 'Not found because of proxy error: Error: unable to verify the first certificate') {
                        alert ('proxy error');
                    }
                    let R = JSON.parse(text);
                    console.log(R);
                    if (st == 1) {
                        _R = {
                            num: R[0].NM,
                            name: R[0].VSN,
                            ac: R[0].VS,
                            d_r: R[0].DC,
                            d_i: R[0].DD,
                        }
                        if (_R.d_i == null) {
                            _R.d_i = '-';
                        } else {
                            _R.d_i = R.ROW.DLIKV;
                        }
                    } else {
                        _R = {
                            num: R.ROW.VUNP,
                            name: R.ROW.VNAIMK,
                            ac: R.ROW.VKODS,
                            d_r: R.ROW.DREG,
                            d_i: R.ROW.DLIKV,
                        }

                        if (_R.d_i == null) {
                            _R.d_i = '-';
                        } else {
                            _R.d_i = R.ROW.DLIKV;
                        }
                    }


                    constructor('tr', `tr-content${c}`, '.result-table', '', 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${_R.num}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${_R.name}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${_R.ac}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${_R.d_r}`, 0);
                    constructor('td', 'td-content', `.tr-content${c}`, `${_R.d_i}`, 0);
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

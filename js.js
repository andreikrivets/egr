function request() {
    const url = 'http://egr.gov.by/egrn/API.jsp?';
    const NM = document.querySelector('.input-area').value;
    const fullUrl = url + 'NM=' + NM;
    let R;
    fetch(fullUrl, { mode: 'cors' })
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            R = JSON.parse(text);
            console.log(JSON.parse(text));
            const container = document.querySelector('.container');
            const st = document.createElement('p');
            const dt = document.createElement('p');
            const ds = document.createElement('p');


            let state;
            let date;
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
            ds.innerText = `${R[0].VFN}, зарегистрирован ${R[0].DC}`;
            st.innerText = `текущее состояние: ${state}`;
            dt.innerText = `дата исключения из ЕГР: ${date}`;
            container.appendChild(ds);
            container.appendChild(st);
            container.appendChild(dt);
        })
    console.log(R);
}

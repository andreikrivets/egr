function request() {
    const url = 'http://egr.gov.by/egrn/API.jsp?';
    const NM = document.querySelector('.input-area').value;
    const fullUrl = url + 'NM=' + NM;
    const container = document.querySelector('.container');
    console.log(fullUrl);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fullUrl, false);
    xhr.send();
    const R = JSON.parse(xhr.responseText);
    console.log(R);
    console.log(R[0].NS);
    console.log(R[0].DD);
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
}
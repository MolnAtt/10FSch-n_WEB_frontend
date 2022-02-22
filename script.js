document.addEventListener('DOMContentLoaded', main);

function main()
{
    alert('hali');
    let m = document.querySelector('main');

    feladatok = [
        {cim: '3000M', tartalom: 'ez egy jó nehéz feladat!'},
        {cim: '3000N', tartalom: 'ez egy jó nehéz feladat! Hej!'},
        {cim: '3000O', tartalom: 'ez egy jó nehéz nemtudommilyen feladat!'},
        {cim: '3000J', tartalom: 'ez egy jó nehéz táblás feladat!'},
    ]

    for (const feladat of feladatok) {
        let d = document.createElement('div');
        d.setAttribute('class','maindiv')
        d.innerHTML = `<h2>${feladat.cim}</h2>
                        <p class="tartalom">${feladat.tartalom}</p>
                        <div>ítélet:</div>
                        <select id="">
                            <option value="elfogadva">Elfogadva</option>
                            <option value="hibas">Hibás</option>
                            <option value="hianyos">Hiányos</option>
                            <option value="ertektelen">Értéktelen</option>
                        </select>`
        m.appendChild(d)
    }

}







function CalculatePac(acc, spd) {
    // acc σε sec (χαμηλότερο = καλύτερο), spd σε m/s
    const acc_rating = Math.max(0, 100 - ((acc - 1.5) * 50)); // όριο στο 0
    const spd_rating = Math.max(0, 100 - ((3 - spd) * 20)); // αν spd>3 αυξάνει
    const pac = (acc_rating + spd_rating) / 2;
    return Math.round(pac);
}

function CalculateSho(fin, long, voll, pen, sp) {
    const r_fin = (fin / 10) * 100;
    const r_long = (long / 10) * 100;
    const r_vol = (voll / 10) * 100;
    const r_pen = (pen / 10) * 100;
    const r_sp = sp; // ήδη 0-100
    const t_r = (r_fin + r_long + r_vol + r_pen + r_sp) / 5;
    return Math.round(t_r);
}

function CalculateDri(ag, rc, bc, drib) {
    const ag_rat = 100 - ((ag - 3) * 15);
    const rc_rat = 100 - ((rc - 0.3) * 200);
    const bc_rat = (bc / 20) * 100;
    const drib_rat = (drib / 10) * 100;
    const drib_tot = (ag_rat + rc_rat + bc_rat + drib_rat) / 4;
    return Math.round(drib_tot);
}

function CalculateDef(head, tackle) {
    const head_rat = (head / 10) * 100;
    const tackle_rat = (tackle / 5) * 100;
    const def_rating = (head_rat + tackle_rat) / 2;
    return Math.round(def_rating);
}

function CalculatePhy(stamina_pieces) {
    // stamina_pieces = πόσα κομμάτια 34μ σε 3 λεπτά
    const max_pieces = 30; // πχ 30 κομμάτια = top level
    const phy_rating = Math.min(100, (stamina_pieces / max_pieces) * 100);
    return Math.round(phy_rating);
}

function CalculateOVR(pos, pac, sho, dri, pas, def, phy) {
    let ovr = 0;
    if (pos == 'Forward') {
        ovr = 0.3 * sho + 0.1 * pas + 0.25 * dri + 0.05 * def + 0.1 * phy + 0.2 * pac;
    } else if (pos == 'Mid') {
        ovr = 0.15 * sho + 0.25 * pas + 0.25 * dri + 0.1 * def + 0.1 * phy + 0.15 * pac;
    } else if (pos == 'Def') {
        ovr = 0.05 * sho + 0.1 * pas + 0.1 * dri + 0.4 * def + 0.2 * phy + 0.15 * pac;
    } else if (pos == 'GK') {
        ovr = 0.05 * sho + 0.1 * pas + 0.1 * dri + 0.3 * def + 0.2 * phy + 0.25 * pac;
    } else {
        return "ERROR";
    }
    return Math.round(ovr);
}

// Κύρια συνάρτηση υπολογισμού
function calculate() {
    const pos = document.getElementById('pos').value;
    const acc = parseFloat(document.getElementById('acc').value);
    const spd = parseFloat(document.getElementById('spd').value);
    const fin = parseFloat(document.getElementById('fin').value);
    const lon = parseFloat(document.getElementById('long').value);
    const voll = parseFloat(document.getElementById('voll').value);
    const pen = parseFloat(document.getElementById('pen').value);
    const sp = parseFloat(document.getElementById('sp').value);
    const ag = parseFloat(document.getElementById('ag').value);
    const rc = parseFloat(document.getElementById('rc').value);
    const bc = parseFloat(document.getElementById('bc').value);
    const drib = parseFloat(document.getElementById('drib').value);
    const head = parseFloat(document.getElementById('head').value);
    const tackle = parseFloat(document.getElementById('tackle').value);
    
    // Stamina σε κομμάτια 34μ
    const stamina_meters = parseFloat(document.getElementById('stamina').value); // συνολική απόσταση σε μέτρα
    const stamina_pieces = Math.floor(stamina_meters / 34);

    const pac = CalculatePac(acc, spd);
    const sho = CalculateSho(fin, lon, voll, pen, sp);
    const dri = CalculateDri(ag, rc, bc, drib);
    const def = CalculateDef(head, tackle);
    const phy = CalculatePhy(stamina_pieces);

    const ovr = CalculateOVR(pos, pac, sho, dri, 50, def, phy); // pas=50 προσωρινό

    document.getElementById('pacVal').innerText = pac;
    document.getElementById('shoVal').innerText = sho;
    document.getElementById('driVal').innerText = dri;
    document.getElementById('defVal').innerText = def;
    document.getElementById('phyVal').innerText = phy;
    document.getElementById('ovrVal').innerText = ovr;

    document.getElementById('results').style.display = 'block';
}
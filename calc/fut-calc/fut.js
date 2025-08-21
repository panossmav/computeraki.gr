// fut_fixed.js

function CalculatePac(acc, spd) {
    const acc_rating = 100 - ((acc - 1.5) * 50);
    const spd_rating = 100 - ((spd - 3) * 20);
    const pac = (acc_rating + spd_rating) / 2;
    return Math.round(pac);
}

function CalculateSho(fin, long, voll, pen, sp) {
    const r_fin = (fin / 10) * 100;
    const r_lon = (long / 10) * 100;
    const r_vol = (voll / 10) * 100;
    const r_pen = (pen / 10) * 100;
    const r_sp = sp;

    const t_r = (r_fin + r_lon + r_vol + r_pen + r_sp) / 5;
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

    const def_rating = (head + tackle) / 2;
    return Math.round(def_rating);
}

function CalculatePhy(stamina) {
    const stamina_rat = (3 / stamina) * 100;
    return Math.round(stamina_rat);
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

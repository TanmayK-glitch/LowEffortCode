export const calculatePercentage = (attended, conducted) => {
    if (conducted === 0) return 0;
    const pct = (attended / conducted) * 100;
    return Math.min(pct, 100).toFixed(1);
};

export const calculateSafeBunk = (attended, conducted, minPercentage = 75) => {
    // Logic: How many more classes can I miss (conducted increases, attended stays same)
    // such that (attended / (conducted + futureMissed)) >= min/100

    // attended / (conducted + x) >= 0.75
    // attended >= 0.75 * (conducted + x)
    // attended / 0.75 >= conducted + x
    // (attended / 0.75) - conducted >= x

    if (conducted === 0) return 0;

    const currentPct = (attended / conducted) * 100;
    if (currentPct < minPercentage) {
        // Logic for "Must Attend"
        // How many classes (y) must I attend (conducted increases, attended increases)
        // (attended + y) / (conducted + y) >= min/100

        // Let req = 0.75
        // att + y >= req * (cond + y)
        // att + y >= req*cond + req*y
        // y - req*y >= req*cond - att
        // y(1 - req) >= req*cond - att
        // y >= (req*cond - att) / (1 - req)

        const req = minPercentage / 100;
        const numerator = (req * conducted) - attended;
        const denominator = 1 - req;
        const classesNeeded = Math.ceil(numerator / denominator);
        return { type: 'danger', count: classesNeeded, message: `Attend next ${classesNeeded} classes` };
    } else {
        // Logic for "Safe Bunk"
        const req = minPercentage / 100;
        const maxMissable = Math.floor((attended / req) - conducted);
        return { type: 'safe', count: maxMissable, message: `Safe to Skip: ${maxMissable} Classes` };
    }
};

export const getStatusColor = (percentage) => {
    const p = parseFloat(percentage);
    if (p >= 80) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (p >= 75) return 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10';
    return 'text-red-400 border-red-500/30 bg-red-500/10';
};

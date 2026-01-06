export const calculatePercentage = (attended, conducted) => {
    if (conducted === 0) return 0;
    const pct = (attended / conducted) * 100;
    return Math.min(pct, 100).toFixed(1);
};

export const calculateSafeBunk = (attended, conducted, minPercentage = 75) => {


    if (conducted === 0) return 0;

    const currentPct = (attended / conducted) * 100;
    if (currentPct < minPercentage) {


        const req = minPercentage / 100;
        const numerator = (req * conducted) - attended;
        const denominator = 1 - req;
        const classesNeeded = Math.ceil(numerator / denominator);
        return { type: 'danger', count: classesNeeded, message: `Attend next ${classesNeeded} classes` };
    } else {

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

function canCarry(capacity, trip) {
    let pickups = {};
    let deliveries = {};
    let presents = 0;
    let tripStep
    for (let i = 0; i < trip.length; i++) {
        tripStep = trip[i];
        pickups[tripStep[1]] = tripStep[0];
        deliveries[tripStep[2]] = tripStep[0];
    }
    for (let i = 0; i <= Math.max(...Object.keys(deliveries)); i++) {
        if (deliveries[i]) {
            presents -= deliveries[i];
        }
        if (pickups[i]) {
            presents += pickups[i];
        }
        if (presents > capacity) {
            return false;
        }
    }
    return true;
}
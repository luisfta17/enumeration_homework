const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const arrayOfStartLocation = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return arrayOfStartLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const arrayOfEndLocation = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return arrayOfEndLocation;
};

Traveller.prototype.getModesOfTransport = function () {
  const arrayOfTransport = this.journeys.map((journey) => {
    return journey.transport;
  })
  return arrayOfTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const arrayOfTypeTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return arrayOfTypeTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const arrayOfMinDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return arrayOfMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((distTotal, journey) =>{
    return distTotal + journey.distance;
  }, 0);

  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const arrayOfTransports = this.getModesOfTransport()
  const uniqueArray = arrayOfTransports.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })
  return uniqueArray;
};


module.exports = Traveller;

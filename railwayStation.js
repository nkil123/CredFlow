// Given arrival and departure times of all trains that reach a railway station. Find the
// minimum number of platforms required for the railway station so that no train is kept
// waiting. Consider that all the trains arrive on the same day and leave on the same
// day. Arrival and departure time can never be the same for a train but we can have
// the arrival time of one train equal to the departure time of the other. At any given
// instance of time, the same platform can not be used for both departures of a train
// and the arrival of another train. In such cases, we need different platforms.

function minPlatform (arrival, departure) {
  let platform = 0, count = 0;
  let i = 0, j = 0;
  arrival.sort ((a, b) => a - b);
  departure.sort ((a, b) => a - b);

  while (i < arrival.length && j < departure.length) {
    //console.log(arrival[i],departure[i])
    if (arrival[i] <= departure[j]) {
      platform++;
      i++;
    } else {
      j++;
      platform--;
    }
    // console.log ('platform--->', platform, 'count--->', count);
    if (platform > count) {
      count = platform;
    }
  }
  return count;
}

let arrival = [1, 2, 1];
let departure = [2, 5, 7];
console.log (minPlatform (arrival, departure));

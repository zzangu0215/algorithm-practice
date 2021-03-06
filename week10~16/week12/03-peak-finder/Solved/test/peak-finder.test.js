const { expect } = chai;

describe('peakFinder', function () {
  it('should return 3 if given the array [3, 2, 1]', function () {
    const arr = [3, 2, 1];

    const result = peakFinder(arr);

    expect(result).to.eql(3);
  });

  it('should return 10 if given the array [2, 4, 6, 8, 10]', function () {
    const arr = [2, 4, 6, 8, 10];

    const result = peakFinder(arr);

    expect(result).to.eql(10);
  });

  it('should return 4 if given the array [4]', function () {
    const arr = [4];

    const result = peakFinder(arr);

    expect(result).to.eql(4);
  });

  it('should return 13 if given the array [-3, 2, 4, 7, 9, 13, 11, 8, 7, 3, 1]', function () {
    const arr = [-3, 2, 4, 7, 9, 13, 11, 8, 7, 3, 1];

    const result = peakFinder(arr);

    expect(result).to.eql(13);
  });

  it('should return 1 if given the array [-3, -2, -1, 0, 1, -9, -11, -18, -70]', function () {
    const arr = [-3, -2, -1, 0, 1, -9, -11, -18, -70];

    const result = peakFinder(arr);

    expect(result).to.eql(1);
  });
});

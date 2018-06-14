import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe = new FilterPipe();

  it('transforms "abc" to "Abc"', () => {
    let data = [{
        "Date" : "1/1/2018"
    }]
    expect(pipe.transform(data, "1/1/2018")).toEqual(data);
  });

  it('transforms "abc def" to "Abc Def"', () => {
    let data = [{
        "Date" : "1/9/2018"
    }]
    expect(pipe.transform(data, "1/1/2018")).not.toEqual(data);
  });

  // ... more tests ...
  it('return all when filter is null', () => {

    let data = [{
        "Date" : "1/9/2018"
    }]
    expect(pipe.transform(data, null)).toBe(data);
  });

  it('return nada when there is no data', () => {
    expect(pipe.transform(null, "1/9/2018")).toEqual([]);
  });
});

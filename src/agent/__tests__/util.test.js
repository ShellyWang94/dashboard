import {Util} from '../util';

describe('test reducer util addSource', () => {
  it("should return add items data", () => {
    const addString = "a,b,c";
    const originData = [{
      id: 1,
      resources: ["test1", "test2"]
    },{
      id: 2,
      resources: ["test1", "test2"]
    }];
    const expectedResult = ["a", "b", "c", "test1", "test2"]
    const result = Util.addSource(1, addString, originData);
    expect(result[0].resources).toEqual(expectedResult);
  });
  it("should work when resources empty", () => {
    const addString = "a,b,c";
    const originData = [{
      id: 1,
      resources: []
    },{
      id: 2,
      resources: []
    }];
    const expectedResult = ["a", "b", "c"];
    const result = Util.addSource(1, addString, originData);
    expect(result[0].resources).toEqual(expectedResult);
  });
});
describe("test reducer util deleteSource", () => {
  it("should delete index item", () => {
    const originData = [{
      id: 1,
      resources: ["test1", "test2"]
    },{
      id: 2,
      resources: ["test1", "test2"]
    }];
    const result = Util.deleteSource(1, 0, originData);
    const expectedResult = ["test2"];
    expect(result[0].resources).toEqual(expectedResult);
  });
  it("should work when index > length", () => {
    const originData = [{
      id: 1,
      resources: ["test1", "test2"]
    },{
      id: 2,
      resources: ["test1", "test2"]
    }];
    const result = Util.deleteSource(1, 3, originData);
    const expectedResult = ["test1", "test2"];
    expect(result[0].resources).toEqual(expectedResult);
  });
})
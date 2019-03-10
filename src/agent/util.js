export const Util = {
  // add one agent computer resource
  addSource: (id, addText, data) => {
    let addArr = addText.split(",");
    let temp = [];
    data.forEach((item, index) => {
      temp.push({...item});
      if(item.id === id){
        temp[index].resources = addArr.concat(item.resources);
      }
    });
    return temp;
  },
  // delete one agent computer resource
  deleteSource: (id, index, data) => {
    let temp = [];
    data.forEach((item, aindex) => {
      if(item.id === id && item.resources.length >= index){
        item.resources.splice(index, 1);
      }
      temp.push(item);
    })
    return temp;
  }
}
interface UniqueData {
  source: object;
  target: object;
}

const find = (uniqueList: UniqueData[], source: object) => {
  for (var i = 0; i < uniqueList.length; i++) {
    if (uniqueList[i].source === source) {
      return uniqueList[i];
    }
  }
  return null;
};

export const deepClone = (source: object) => {
  const uniqueList: UniqueData[] = [];
  return (function _deepClone(source) {
    let target: any = Array.isArray(source) ? [] : {};
    if (source && typeof source === 'object') {
      const uniqueData = find(uniqueList, source);
      if (uniqueData) return uniqueData.target;
      uniqueList.push({
        source: source,
        target: target,
      });
      for (let key in source) {
        let prop: any = source[key as keyof typeof source];
        if (prop && typeof prop === 'object') {
          if (prop instanceof Date) {
            target[key] = new Date(prop.getTime());
          } else if (prop instanceof RegExp) {
            target[key] = new RegExp(prop.source, prop.flags);
          } else {
            target[key] = _deepClone(prop);
          }
        } else {
          target[key] = prop;
        }
      }
    }
    return target;
  })(source);
};

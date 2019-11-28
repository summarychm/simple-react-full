// obj的顶级原型和obj的父集原型相等则认为是plainObject
export function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
  // return Object.getPrototypeOf(obj) === Object.prototype;
}

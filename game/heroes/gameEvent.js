/**
 * 观察者模式
 * 1.统一管理实践 
 * 2.惰性执行，延迟执行
 * @class GameEvent
 */
export default class GameEvent {
  constructor() {
    this.handles = {}
  }
  addEvent(eventName, fn) {
    if(typeof this.handles[eventName] === 'undefined') {
      this.handles[eventName] = []
    }
    this.handles[eventName].push(fn)
  }
  trigger(eventName) {
    this.handles[eventName].forEach(fn => {
      fn();
    })
  }
}
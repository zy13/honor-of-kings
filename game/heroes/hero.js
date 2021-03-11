import GameEvent from './gameEvent.js'

/**
 * 使用观察者模式
 * @export
 * @class Hero
 * @extends {GameEvent}
 */
export default class Hero extends GameEvent{
  constructor({name, ico, skills, skins}) { 
    super()
    this.name = name
    this.ico = ico
    this.skills = skills
    this.skins = skins
    // 先绑定事件
    this.addEvent('initFn', this.init)
  }
  init() {
    console.log('初始化')
  }
}
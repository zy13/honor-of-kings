/**
 * 游戏管理类
 */
import Hero from './heroes/hero.js'
import Player from './player.js'

// 单例模式（1）-静态属性: 只能实例化一个游戏管理类
class Game{
  static instance // 静态属性static是类的独有属性
  constructor() {
    if(Game.instance) {
      return Game.instance
    }
    Game.instance = this
    this.player = null
  }
  login(username) {
    this.player = new Player(username)
    this.player.heroes.forEach(hero => {
      hero.trigger('initFn')
    })
  }
}

export default Game

// 单例模式（2）-高阶函数: 只能实例化一个游戏管理类
// function getSingle(Fn){
//   let instance;
//   return function(...args) {
//     if(!instance) {
//       instance = new Fn(...args)
//     }
//     return instance
//   }
// }

// export default getSingle(Game)
import Skill1 from '../skills/luban/s1.js'
import Skill2 from '../skills/luban/s2.js'
import Skill3 from '../skills/luban/s3.js'
import Skin1 from '../skins/luban/s1.js'
import Skin2 from '../skins/luban/s2.js'
import Skin3 from '../skins/luban/s3.js'
import Hero from './hero.js'

export default class Luban extends Hero{
  constructor() {
    let opts = {
      name: '鲁班',
      ico: './sources/heroes/luban1.png',
      skills: [new Skill1(), new Skill2(), new Skill3()],
      skins: [new Skin1(), new Skin2(), new Skin3()]
    }
    super(opts)
  }
}
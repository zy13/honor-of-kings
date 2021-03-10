import Skill1 from '../skills/yase/s1.js'
import Skill2 from '../skills/yase/s2.js'
import Skill3 from '../skills/yase/s3.js'
import Skin1 from '../skins/yase/s1.js'
import Skin2 from '../skins/yase/s2.js'
import Skin3 from '../skins/yase/s3.js'

export default class Yase{
  constructor() {
    this.name = '亚瑟'
    this.ico = './sources/heroes/yase1.png'
    this.skills = [new Skill1(), new Skill2(), new Skill3()]
    this.skins = [new Skin1(), new Skin2(), new Skin3()]
  }
}
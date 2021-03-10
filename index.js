
import Game from './game/game.js'
let game = new Game()

// 登录
document.querySelector('.sub').onclick = function() {
  let username = document.querySelector('.username').value
  game.login(username)
  document.querySelector('.game').style.display = 'block'
  document.querySelector('.login').style.display = 'none'
  document.querySelector('.chioseusername').innerHTML = username
  renderHeroes(game?.player?.heroes) // 可选链式操作
}

function renderHeroes(heroes) {
  document.querySelector('.heroView').innerHTML = ''
  heroes.forEach(hero => {
    let heroItem = document.createElement('div')
    heroItem.classList.add('heroItem')
    heroItem.innerHTML = `<img src="${hero.ico}" />
    <span>${hero.name}</span>`
    document.querySelector('.heroView').appendChild(heroItem)
    heroItem.onclick = function() {
      document.querySelector('.heroShow').innerHTML = `<img src="${hero.ico}" />`
      renderSkills(hero.skills)
    }
    renderSkins(hero.skins)
  })
}

function renderSkills(skills) {
  document.querySelector('.skillsView').innerHTML = ''
  skills.forEach(skill => {
    let img = new Image()
    img.src = skill.ico
    document.querySelector('.skillsView').appendChild(img)
  })
}

function renderSkins(skins) {
  console.log(skins)
  document.querySelector('.skinView').innerHTML = ''
  skins.forEach(skin => {
    let skinItem = document.createElement('div')
    skinItem.classList.add('skinItem')
    skinItem.innerHTML = `<img src="${skin.ico}" />
    <span>${skin.name}</span>`
    document.querySelector('.skinView').appendChild(skinItem)
    skinItem.onclick = function() {
      document.querySelector('.skinShow').innerHTML = `<img src="${skin.ico}" alt="">`
    }
  })
}

// 切换：英雄 《=》皮肤
document.querySelector('.heroBtn').onclick = function() {
  document.querySelector('.heroContainer').style.display = 'block'
  document.querySelector('.skinContainer').style.display = 'none'
}

document.querySelector('.skinBtn').onclick = function() {
  document.querySelector('.skinContainer').style.display = 'block'
  document.querySelector('.heroContainer').style.display = 'none'
}
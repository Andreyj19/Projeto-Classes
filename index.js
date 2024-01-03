class Hero{
  constructor(nickname, age, type){
   this.nickname = nickname;
   this.age = age;
   this.type = type;
  }
  toAttack(){
    const skills = {
       mage: 'Magia',
       warrior: 'Espada',
       fighter: "Artes Marciais",
       ninja: "Shuriken",
          
    };
    const attack = skills[this.type] || 'atacou';

    console.log(`O ${this.type}, ${this.nickname}, atacou usando ${attack}`);
  }
}

// Verificando se está funcionando 

let myHero = new Hero('Shen', 35, 'ninja');
myHero.toAttack();
let myHerotwo = new Hero('Lee Sin', 29, 'fighter');
myHerotwo.toAttack();
 


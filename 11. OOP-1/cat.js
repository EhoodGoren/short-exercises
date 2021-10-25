const cat = {
    tiredness : 0,
    hunger : 0,
    lonliness : 0,
    happiness : 0,
    feed(count = 1){
        if(chooseToIgnore()) return this;
        this.tiredness += count;
        this.hunger -= count;
        return this;
    },
    sleep(count = 1){
        if(chooseToIgnore()) return this;
        this.tiredness -= count;
        this.happiness += count;
        return this;
    },
    pet(count = 1){
        if(chooseToIgnore()) return this;
        this.lonliness -= count;
        this.happiness += count;
        return this;
    },
    play(count = 1){
        if(chooseToIgnore()) return this;
        this.happiness += count;
        this.lonliness -= count;
        this.tiredness += count;
        return this;
    },
    mood(){
        let catMood = "Garfield is ";
        for(let property in this){
            const catProperty = this[property];
            if(typeof(catProperty) !== 'number' || catProperty === 0) continue;
            if(catProperty > 0){
                catMood = catMood.concat(`${emotions[property][0]}, `);
            }
            else{
                catMood = catMood.concat(`${emotions[property][1]}, `);
            }
        }
        catMood = catMood.slice(0, -2);
        return catMood;
    },
}

const emotions = {
    tiredness : ['tired', 'full of energy'],
    hunger : ['hungry', 'full'],
    lonliness:['lonely', 'loved'],
    happiness : ['happy', 'sad'],
}

cat.feed().pet(2).play().play().mood();

function chooseToIgnore(){
    const random = Math.random();
    if(random > 0.5) return true;
    return false;
}

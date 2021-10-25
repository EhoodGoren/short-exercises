const cat = {
    tiredness : 0,
    hunger : 0,
    lonliness : 0,
    happiness : 0,
    feed(){
        this.tiredness++;
        this.hunger--;
        return this;
    },
    sleep(){
        this.tiredness--;
        this.happiness++;
        return this;
    },
    pet(){
        this.lonliness--;
        this.happiness++;
        return this;
    },
    play(){
        this.happiness++;
        this.lonliness--;
        this.tiredness++;
        return this;
    },
    mood(){
        let catMood = "Garfield is ";
        for(let property in this){
            const catProperty = this[property];
            if(typeof(catProperty) !== 'number' || catProperty === 0) continue;
            if(catProperty > 0){
                catMood = catMood.concat(`${emotions[property][1]}, `);
            }
            else{
                catMood = catMood.concat(`${emotions[property][0]}, `);
            }
        }
        catMood = catMood.slice(0, -2);
        return catMood;
    },
}

const emotions = {
    lonliness:['lonely'],
    hunger : ['hungry', 'full'],
    tiredness : ['tired', 'full of energy'],
    happiness : ['sad', 'happy'],
}

cat.feed().pet().play().play().mood();

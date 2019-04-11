export function save(location){
    let favorites = this.load()
    if(!favorites){
        favorites = [location]
    }
    else{
        if(!favorites.some(item => item.name === location.name && item.country === location.country)){
            favorites.push(location)
        }
    }
    localStorage.setItem("favorites", JSON.stringify(favorites))
}

export function load(){
    return JSON.parse(localStorage.getItem("favorites"))
}


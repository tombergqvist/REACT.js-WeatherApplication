export async function fetchData(url) {
    let promise = await fetch(url)
    let data = await promise.json()
    return data
}

export async function getCurrent(location) {
    return await fetchData("https://api.apixu.com/v1/current.json?key=48eedcdb939247cba29170718190704&q="+ location)
}

export async function getForecast(location, days) {
    return await fetchData("https://api.apixu.com/v1/forecast.json?key=48eedcdb939247cba29170718190704&q="+ location +"&days="+ days)
}

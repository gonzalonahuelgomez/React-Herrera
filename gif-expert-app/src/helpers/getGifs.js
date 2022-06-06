export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=682MJ9o1nM0YXrVg5MP7HKwC1x7mFc7V`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(({ id,title,images }) => {
        return({
            id,
            title,
            url: images?.downsized_medium.url
        })
    })

    return gifs      
}

export function urlScraper(){
    const searchParams = new URLSearchParams(window.location.search)
    let blob;
    for (const param of searchParams) {
        blob = param[1]
    }
    return blob
}

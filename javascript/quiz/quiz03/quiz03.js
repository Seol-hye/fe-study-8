
let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */
function changeLink(url) {
    if(!url.includes("://")){
        return "경로가 잘못되었습니다.";
    }

    if(url.includes("https")){
        return "https://secure." + url.substring(8);
    }

    if(url.includes("http")){
        return "https://open." + url.substring(7);
    }
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));
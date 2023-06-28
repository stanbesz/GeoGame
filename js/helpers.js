import { API_URL , TIMEOUT_SECS} from "./config";
export const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const getJSON = async function(searchTag='name',countryName){
    let request = await fetch(`${API_URL}${searchTag}/${countryName}`);
    //console.log(request);
    const countryJSON = await Promise.race([request,timeout(TIMEOUT_SECS)]);
    const res = await countryJSON.json();
    //console.log(res);
    return res;
}
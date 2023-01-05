class UrlParams {
    constructor(search) {
       this.qs = (search).substr(1);
       this.params = {};
       this.parseQuerstring();
    }
    parseQuerstring() {
       this.qs.split('&').reduce((a, b) => {
         let [key, val] = b.split('=');
         a[key] = decodeURIComponent(val);
         return a;
       }, this.params);
    }
    get(key) {
       return this.params[key];
    }
 }
 
 export default UrlParams;
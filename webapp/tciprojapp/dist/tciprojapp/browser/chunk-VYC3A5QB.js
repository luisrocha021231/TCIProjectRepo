import{U as n,h as s,k as h}from"./chunk-YNFUDRTL.js";var a=(()=>{let e=class e{constructor(){this.http=h(n),this.URL_API="http://localhost:9090/api/contacts"}getAllStudents(){return this.http.get(this.URL_API)}getStudentById(t){return this.http.get(this.URL_API+"/"+t)}createStudent(t){return this.http.post(this.URL_API,t)}updateStudent(t,i){return this.http.put(this.URL_API+"/"+t,i)}deleteStudentById(t){return this.http.delete(this.URL_API+"/"+t)}deleteAllStudents(){return this.http.delete(this.URL_API)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{a};
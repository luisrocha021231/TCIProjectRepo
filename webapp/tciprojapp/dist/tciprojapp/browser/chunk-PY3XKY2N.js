import{a as M}from"./chunk-VYC3A5QB.js";import{B as p,E as x,F as h,G as t,H as e,I as k,J as S,K as m,L as _,M as n,N as s,P as v,Q as C,Z as E,_ as y,aa as O,k as u,m as f,q as b,r as g,v as d}from"./chunk-YNFUDRTL.js";var P=(r,i)=>i.id,w=r=>[r];function A(r,i){if(r&1){let a=S();t(0,"tr")(1,"td",13),n(2),e(),t(3,"td",13),n(4),e(),t(5,"td",13),n(6),e(),t(7,"td",13),n(8),e(),t(9,"td",13),n(10),e(),t(11,"td",14)(12,"div",7)(13,"button",15),n(14," Editar "),e(),t(15,"button",16),m("click",function(){let l=b(a).$implicit,c=_();return g(c.deleteStudent(l))}),n(16," Eliminar "),e()()()()}if(r&2){let a=i.$implicit;d(2),s(a.name),d(2),s(a.lastname),d(2),s(a.birthdate),d(2),s(a.age),d(2),s(a.status),d(3),p("routerLink",C(6,w,a.id+"/edit"))}}var N=(()=>{let i=class i{constructor(){this.studentsService=u(M),this.router=u(E),this.students=[]}ngOnInit(){this.loadAll()}loadAll(){this.studentsService.getAllStudents().subscribe(o=>{this.students=o})}deleteStudents(){this.studentsService.deleteAllStudents().subscribe(()=>{this.studentsService.getAllStudents().subscribe(o=>{this.students=o})})}deleteStudent(o){this.studentsService.deleteStudentById(o.id).subscribe(()=>{this.loadAll()})}getStatusClass(o){return o==="Activo"?"text-success":"text-danger"}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["app-students"]],standalone:!0,features:[v],decls:37,vars:0,consts:[[1,"divcredits"],[1,"credits"],[1,"d-flex","justify-content-center","align-items-center","mb-4"],[1,"encabezado","d-inline"],[1,"idversion","ms-2"],[1,"btndoc","d-inline","ms-5"],[1,"text-end","mb-5"],[1,"btn-group"],["type","text","placeholder","Ingresa el nombre",1,"search"],[1,"btn"],["type","button",1,"btn","ms-5",3,"click"],["routerLink","/new",1,"btn","btn-primary","ms-3"],[1,"table","table-hover"],[1,"text-center"],[1,"text-end"],[1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(l,c){l&1&&(t(0,"div",0)(1,"label",1),n(2,"\xA1\xA1\xA1 Dise\xF1ada por nosotros con mucho \u2764 \u2764 \u2764 for all of you \u2764 \u2764 !!! "),e()(),t(3,"div",2)(4,"h1",3),n(5,"ESTUDIANTES "),e(),t(6,"label",4),n(7,"(v1.0)"),e(),t(8,"button",5),n(9,"API Documentaci\xF3n"),e()(),t(10,"div",6)(11,"div",7),k(12,"input",8),t(13,"button",9),n(14,"Buscar"),e()(),t(15,"button",10),m("click",function(){return c.deleteStudents()}),n(16,` Borrar Estudiantes
`),e(),t(17,"button",11),n(18,` Nuevo Estudiante
`),e()(),t(19,"table",12)(20,"thead")(21,"tr",13)(22,"th"),n(23,"NOMBRE"),e(),t(24,"th"),n(25,"APELLIDO"),e(),t(26,"th"),n(27,"FECHA DE NACIMIENTO"),e(),t(28,"th"),n(29,"EDAD"),e(),t(30,"th"),n(31,"ESTADO ACADEMICO"),e(),t(32,"th"),n(33,"OPCIONES"),e()()(),t(34,"tbody"),x(35,A,17,8,"tr",null,P),e()()),l&2&&(d(35),h(c.students))},dependencies:[O,y],styles:[".encabezado[_ngcontent-%COMP%]{background:linear-gradient(to right,#4d83f0,#d96570);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:5em;font-family:Roboto,sans-serif;font-weight:700;font-style:normal}.idversion[_ngcontent-%COMP%]{background:linear-gradient(to right,#d96570,#4d83f0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:1.5em;font-family:Roboto,sans-serif;font-weight:700;font-style:normal}th[_ngcontent-%COMP%]{background:linear-gradient(to right,#4d83f0,#d96570);-webkit-background-clip:text;background-clip:text;color:transparent;font-family:Roboto,sans-serif;font-weight:800;font-style:normal}td[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff,#fff);-webkit-background-clip:text;background-clip:text;color:transparent;font-family:Roboto,sans-serif;font-weight:800;font-style:normal;vertical-align:middle}.btn[_ngcontent-%COMP%]{background:linear-gradient(to right,#1e1f20,#1e1f20);color:#fff;border:none;padding:10px 20px;cursor:pointer;transition:background-color .3s ease;transition:all .3s ease;font-family:Roboto,sans-serif;font-weight:700;font-style:normal;border-radius:20px}.btn[_ngcontent-%COMP%]:hover{background:linear-gradient(to right,#4d83f0,#d96570)}.btn[_ngcontent-%COMP%]:focus{background:linear-gradient(to right,#4d83f0,#d96570)}.btn[_ngcontent-%COMP%]:active{animation:_ngcontent-%COMP%_clickAnimation .1s linear}@keyframes _ngcontent-%COMP%_clickAnimation{0%{transform:scale(1)}50%{transform:scale(.95)}to{transform:scale(1)}}.table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;border-radius:20px;overflow:hidden;border:none}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:none;padding:8px}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#333537}tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#303131}.divcredits[_ngcontent-%COMP%]{position:fixed;top:0;width:80%;text-align:center;display:flex;align-items:center;justify-content:center;background-color:#00000080}.credits[_ngcontent-%COMP%]{background:linear-gradient(to right,#4d83f0,#d96570);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:1em;font-family:Roboto,sans-serif;font-weight:700;font-style:normal}.btndoc[_ngcontent-%COMP%]{background:linear-gradient(to right,#4d83f0,#d96570);color:#fff;border:none;padding:10px 15px;cursor:pointer;transition:background-color .3s ease;transition:all .3s ease;font-family:Roboto,sans-serif;font-weight:700;font-style:normal;border-radius:20px}.btndoc[_ngcontent-%COMP%]:hover{background:linear-gradient(to right,#1e1f20,#1e1f20)}.btndoc[_ngcontent-%COMP%]:focus{background:linear-gradient(to right,#1e1f20,#1e1f20)}.btndoc[_ngcontent-%COMP%]:active{animation:_ngcontent-%COMP%_clickAnimation .1s linear}.search[_ngcontent-%COMP%]{background:#1e1f20;color:#fff;border-radius:20px 0 0 20px;font-family:Roboto,sans-serif;font-weight:800;font-style:normal;width:400px;padding:10px;font-size:16px;position:relative;z-index:2;border:none;outline:none}.searchcontenedor[_ngcontent-%COMP%]{position:relative;overflow:hidden}"]});let r=i;return r})();export{N as default};
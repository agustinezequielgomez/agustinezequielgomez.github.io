(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{nuevoJuego.nombre}}!\r\n  </h1>\r\n </div>\r\n<h2></h2>\r\n<form name=\"juego\">\r\n\r\n   <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\r\n \r\n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n \r\n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n \r\n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n\r\n\r\n</form>\r\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \r\n<h1> listado </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<!-- index.html -->\r\n\r\n\r\n<form name=\"juego\">\r\n<ul>\r\n   <li>\r\n   Primer número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n  \r\n  </li>\r\n  <li>\r\n   Operador: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n  </li>\r\n  <li>\r\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n  </li>\r\n  <li>\r\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n     \r\n   </li>\r\n  <li>\r\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\r\n  </li>\r\n  <li>\r\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\r\n  </li>\r\n  <li>\r\n    <h2><p><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero...</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n  </li>\r\n</ul>\r\n\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \r\n<h1> Listado de Resultados </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/anagrama/anagrama.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/anagrama/anagrama.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  anagrama works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/cabecera/cabecera.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/cabecera/cabecera.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid fadeIn animated\">\r\n    <header>\r\n        <h1 class=\"titulo\" style=\"font-size:50px\">Sala de Juegos</h1>\r\n        <p>Agustín Gómez</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-3\"></div>\r\n            <div class=\"col-6\">\r\n                <div class=\"row\" id=\"botones\">\r\n                    <div class=\"col-6 h-100\">\r\n                        <a href=\"https://www.github.com/agustinezequielgomez\" target=\"_blank\"><button id=\"github\" class=\"btn hvr-shadow hvr-fade\">en GitHub <i class=\"fa fa-github\"></i></button></a>\r\n                    </div>\r\n                    <div class=\"col-6 h-100\">\r\n                        <button class=\"btn hvr-shadow hvr-fade\" routerLink=\"/QuienSoy\">¿Quien Soy? <i class=\"fa fa-user\"></i></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\"></div>\r\n        </div>\r\n    </header>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/error/error.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/error/error.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"hero-text\">\r\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n        <p>Octavio villegas</p>\r\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n          </ul>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/hi-lo/hi-lo.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/hi-lo/hi-lo.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-top vivify pullUp\">\n    <div *ngIf=\"this.destroyComponent == false\" id=\"container\" class=\"container rounded\" [ngClass]=\"{vivify: true, driveOutLeft: this.gameFinished == true}\">\n        <div id=\"card-container\">\n            <img class=\"cards\" id=\"currentCard\" [ngClass]=\"{vivify: true, flipInY: this.cardChosen==true, flipOutY: this.hideCurrent == true}\" src=\"{{this.currentCard.img}}\" alt=\"\">\n            <img  clasS=\"cards\" id=\"previousCard\" [ngClass]=\"{vivify: true, flipInY: this.currentToPrevious==true}\" src=\"{{this.previousCard.img}}\" alt=\"\">\n        <div>\n        </div>\n        </div>\n        <div id=\"buttons\">\n            <button [disabled]=\"!this.hiloButtonsEnabled\" id=\"higher\" class=\"d-block w-100\" mat-raised-button (click)=\"decideCard('higher')\">Alto <mat-icon>keyboard_arrow_up</mat-icon></button>\n            <button [disabled]=\"!this.hiloButtonsEnabled\" id=\"lower\" class=\"d-block w-100\" mat-raised-button (click)=\"decideCard('lower')\">Bajo <mat-icon>keyboard_arrow_down</mat-icon></button>\n            <mat-icon id=\"failure\" *ngIf=\"this.fail == true\" [class.spinOut]=\"this.exitResult == true\" class=\"icons vivify driveInTop spinIn\">clear</mat-icon>\n            <mat-icon id=\"success\" *ngIf=\"this.success == true\" [class.spinOut]=\"this.exitResult == true\" class=\"icons vivify driveInTop spinIn\">done_all</mat-icon>\n        </div>\n        <button [disabled]=\"this.playing == true\" id=\"jugar\" mat-raised-button (click)=\"jugar()\">Jugar</button>\n        <p id=\"puntuacion\">{{this.puntuacion}}/10</p>\n    </div>\n    <div *ngIf=\"this.gameFinished == true\" class=\"vivify driveInRight delay-1000 text-center\">\n        <p class=\"gameOver\">¡Juego Terminado!</p>\n        <p class=\"gameOver\">Tu puntuacion fue {{this.puntuacion}} de 10</p>\n        <button class=\"d-block w-100 gameOverButtons\" mat-raised-button (click)=\"again()\">Jugar otra vez</button>\n        <button class=\"d-block w-100 gameOverButtons\" mat-raised-button (click)=\"principal()\">Menu Principal</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/inicio/inicio.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/inicio/inicio.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"imgBlurred\" class=\"animated fadeIn\"></div>\n    <div class=\"top\">\n        <h1 class=\"slide-in-blurred-top\" *ngIf=\"textEntrance\">Bienvenido a la Sala de Juegos</h1>\n        <a [routerLink]=\"['/Login']\"  *ngIf=\"buttonEntrance\" class=\"slide-in-blurred-top\"><button  mat-raised-button>Ingresar</button></a>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/input-jugadores/input-jugadores.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/input-jugadores/input-jugadores.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  input-jugadores works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/juegos/juegos.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/juegos/juegos.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"fadeIn animated\"></app-menu>\r\n<div class=\"container-fluid fadeIn animated\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n   Sala de Juegos\r\n  </h1>\r\n </div>\r\n</div>\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/jugadores-listado/jugadores-listado.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-justified\">\r\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\r\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\r\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\r\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\r\n</ul>\r\n\r\n\r\n\r\n<table class=\"table table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th>usuario</th>\r\n      <th>cuit</th>\r\n      <th>sexo</th>\r\n      <th>gano</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let jugador of listado\" >\r\n      <td>{{jugador.usuario}} </td>\r\n      <td>{{jugador.cuit}} </td> \r\n      <td>{{jugador.sexo | sexo| uppercase}} </td> \r\n      <td>{{jugador.gano}} </td> \r\n      \r\n    </tr>\r\n   \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/listado-de-paises/listado-de-paises.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n Listado de paises\r\n</h1>\r\n<table class=\"table table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th>Pais</th>\r\n      <th>Región</th>\r\n      <th>Nombre local</th>\r\n      <th>Sub Región</th>\r\n      <th>Población</th>\r\n      <th>Bandera</th>\r\n      <th>Capital</th>\r\n      <th>GPS</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let pais of listadoDePaises\">\r\n      <td>{{pais.name}} </td>\r\n      <td>{{pais.region}} </td> \r\n      <td>{{pais.nativeName}} </td> \r\n      <td>{{pais.subregion}} </td>       \r\n      <td>{{pais.population}} </td> \r\n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \r\n      <td>{{pais.capital}} </td> \r\n      <td>{{pais.borders}} </td> \r\n      <td>{{pais.latlng}} </td> \r\n    </tr>\r\n   \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\r\n\r\n<p> {{juego.nombre}} </p>\r\n<p> {{juego.jugador}} </p>\r\n\r\n</div-->\r\n\r\n<table class=\"table table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th>Juego</th>\r\n        <th>Jugador</th>\r\n        <th>Resultado</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let juego of listado\">\r\n        <td>{{juego.nombre}} </td>\r\n        <td>{{juego.jugador}} </td> \r\n        <td *ngIf=\"juego.gano\">Gano </td>   \r\n        <td *ngIf=\"!juego.gano\">Perdio</td>     \r\n      </tr>\r\n     \r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/listado/listado.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/listado/listado.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive overflow-auto vivify fadeInTop\">\r\n  <thead>\r\n    <tr>\r\n      <th>Juego</th>\r\n      <th>Usuario</th>\r\n      <th>Fecha</th>\r\n      <th>Puntuacion</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let registro of this.listado\">\r\n        <td>Hi-Lo</td>\r\n        <td scope=\"row\">{{registro.usuario}}</td>\r\n        <td>{{registro.fecha | date}}</td>\r\n        <td>{{registro.puntuacion}}</td>\r\n      </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/listados/listados.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/listados/listados.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listados works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/login/login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n<form class=\"form-group\">\r\n        <div class=\"imgcontainer\">\r\n          <img src=\"./assets/imagenes/login.png\" alt=\"Avatar\" class=\"img-fluid mx-auto d-block\">\r\n        </div>\r\n    <mat-form-field appearance=\"outline\" id=\"email\">\r\n      <mat-label>Email</mat-label>\r\n      <input matInput [formControl]=\"emailFormControl\" [(ngModel)]=\"usuario\">\r\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n        Ingrese un email valido\r\n      </mat-error>\r\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n        El  <strong>email</strong> es requerido \r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\" id=\"clave\">\r\n      <mat-label>Clave</mat-label>\r\n      <input matInput [type]=\"this.showPass == true? 'text':'password'\" [formControl]=\"claveFormControl\" [(ngModel)]=\"clave\">\r\n      <mat-error *ngIf=\"claveFormControl.hasError('required')\">La <strong>clave</strong> es requerida</mat-error>\r\n    </mat-form-field>\r\n    <button mat-raised-button id=\"ingresar\" class=\"btn form-control\" (click)=\"login()\">Ingresar</button>\r\n    <mat-progress-bar *ngIf=\"this.logingIn\" id=\"progressBar\" class=\"vivify fadeIn\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-checkbox name=\"showPass\" [(ngModel)]=\"this.showPass\">Mostrar contraseña</mat-checkbox>\r\n    <br>\r\n    <mat-checkbox>Recordar usuario</mat-checkbox>\r\n    <form id=\"register\" class=\"form-group\">\r\n      <a [routerLink]=\"['/']\"><button mat-raised-button color=\"warn\">Cancelar</button></a>\r\n      <a id=\"registerBtn\" [routerLink]=\"['/Registro']\"><button mat-raised-button color=\"primary\">Registrarse</button></a>\r\n    </form>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/mapa-de-google/mapa-de-google.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\r\n\r\n<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\r\n   \r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n<input type =\"text\" [(ngModel)]=\"lat\" />\r\n<input type=\"text\" [(ngModel)]=\"lng\"/> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/menu-card/menu-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/menu-card/menu-card.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"card-deck\">\r\n    <div class=\"card flip-card\" *ngFor='let contenido of cardContent'>\r\n        <div class=\"flip-card-inner\">\r\n          <div class=\"flip-card-front\"  [style.background-image]=\"contenido.img\" [attr.data-loc]=\"contenido.link\">\r\n          </div>\r\n          <div class=\"card-body flip-card-back\">\r\n              <h1>{{contenido.title}}</h1>\r\n              <p class=\"title\">{{contenido.description}}</p>\r\n              <p>UTN FRA</p>\r\n              <div class=\"row\">\r\n                <div class=\"col-3 hvr-grow-shadow\"><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a></div>\r\n                <div class=\"col-3 hvr-grow-shadow\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></div>\r\n                <div class=\"col-3 hvr-grow-shadow\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></div>\r\n                <div class=\"col-3 hvr-grow-shadow\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></div>\r\n              </div>\r\n              <button id=\"play\" class=\"block btn3d btn\" (click)=\"Jugar(contenido.title)\">Jugar</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/menu/menu.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navBar\" class=\"navbar navbar-expand-lg\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMenu\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"true\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarMenu\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item dropdown\">\r\n        <a [routerLink]=\"['/Juegos']\" routerLinkActive=\"activeLink\" class=\"nav-link dropdown-toggle\" id=\"gamesDropdown\"\r\n          role=\"button\" data-toggle=\"dropdown\" aria-expanded=\"true\">Juegos</a>\r\n        <div class=\"dropdown-menu scale-in-top\" aria-labelledby=\"gamesDropdown\">\r\n          <a routerLink=\"/{{juego.link}}\" routerLinkActive=\"activeLink\" class=\"dropdown-item\"\r\n            *ngFor=\"let juego of games\">{{juego.tabName}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\" *ngFor=\"let tab of content\">\r\n        <a routerLink=\"/{{tab.link}}\" routerLinkActive=\"activeLink\" class=\"nav-link\">{{tab.tabName}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/principal/principal.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/principal/principal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid fadeIn animated\">\r\n    <div id=\"topRow\" class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-10\">\r\n            <div class=\"row\">\r\n                <table class=\"table\">\r\n                    <app-cabecera></app-cabecera>\r\n                </table>\r\n                <table class=\"table table-responsive\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\" id=\"menuPrincipal\">Menu Principal</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <div class=\"col-12\">\r\n                            <tr *ngFor=\"let contenido of content\">\r\n                                <a routerLink=\"{{contenido.link}}\">\r\n                                    <div id=\"hoverable\" class=\"hvr-bounce-to-left media\">\r\n                                        <div class=\"col-2 img-col\">\r\n                                            <td><img id=\"imagen\" src=\"{{contenido.img}}\" class=\"media-object imagenDeMenu img-fluid\"></td>\r\n                                        </div>\r\n                                        <div class=\"col-10\" id=\"content\">\r\n                                            <td>\r\n                                                <h4 class=\"media-heading\">{{contenido.heading}}</h4>\r\n                                                <p>{{contenido.content}}</p>\r\n                                            </td>\r\n                                        </div>\r\n                                    </div>\r\n                                </a>\r\n                            </tr>\r\n                        </div>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-1\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/quien-soy/quien-soy.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"./\">Sala De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"./QuienSoy#quien\">Quien</a></li>\r\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\r\n          <li><a href=\"./QuienSoy#donde\">Donde</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav> -->\r\n<div *ngIf=\"this.initView\" class=\"vivify fadeIn\">\r\n<nav id=\"navBar\" class=\"navbar navbar-expand-lg\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMenu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"true\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarMenu\">\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"tabs\"><a (click)=\"navigateTo('who', 700)\" class=\"hvr-underline-from-center\">¿Quien?</a></li>\r\n            <li class=\"tabs\"><a (click)=\"navigateTo('what', 700)\" class=\"hvr-underline-from-center\">¿Que es?</a></li>\r\n            <li class=\"tabs\"><a (click)=\"navigateTo('where', 700)\" class=\"hvr-underline-from-center\">¿Donde?</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<!-- First Container -->\r\n<div id=\"who\" class=\"container-fluid text-center\">\r\n    <h3 class=\"vivify fadeInTop\" id=\"whoAmIText\">¿Quién Soy?</h3>\r\n    <img id=\"whoAmIImg\" src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-fluid vivify flipInY duration-1500\" style=\"display:inline\">\r\n    <h3 id=\"whoAmIText\" class=\"vivify fadeInBottom\">Mi nombre es Agustín Gómez y soy Full-Stack Developer.</h3>\r\n    <br>\r\n    <br>\r\n</div>\r\n\r\n<!-- Second Container -->\r\n<div data-aos=\"zoom-out-down\" data-aos-anchor-placement=\"bottom-center\" data-aos-easing=\"ease-in-out\" id=\"what\" class=\"container-fluid bg-2 text-center\">\r\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\r\n    <p>Con el objetivo de demostrar los conocimientos adquiridos en la cátedra sobre desarrollo y programacion web, así como también los cononocimientos adquiridos a lo largo de la carrera.</p>\r\n    <p>El juego a realizar es Hi-Lo. Se le mostrará al jugador una carta y debera adivinar si la siguiente en salir será de mayor o menor valor.</p>\r\n    <img src=\"../../../assets/imagenes/hi-lo.png\" alt=\"\">\r\n</div>\r\n\r\n<!-- Third Container (Grid) -->\r\n<div data-aos=\"fade-up\" data-aos-anchor-placement=\"bottom-center\" id=\"where\" class=\"container-fluid text-center\">\r\n    <h3 class=\"margin\">¿Dónde Funciona?</h3><br>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\r\n            <img src=\"./assets/imagenes/quiensoy1.webp\" class=\"img-responsive margin w-100\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\r\n            <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin w-100\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\r\n            <img src=\"./assets/imagenes/quiensoy3.jpg\" class=\"img-responsive margin w-100\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<footer class=\"container-fluid bg-4 text-center\">\r\n    <p>Creado por <a href=\"https://github.com/agustinezequielgomez\" target=\"blank\">Agustín Gómez</a></p>\r\n</footer>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/registracion-dialog/registracion-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/registracion-dialog/registracion-dialog.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Registro</h1>\n<div mat-dialog-content>\n  <form [formGroup]=\"this.form\">\n    <p>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Email\" formControlName=\"email\">\n        <mat-hint *ngIf=\"this.form.controls['email'].errors?.required\" class=\"text-danger\">El mail es un campo requerido</mat-hint>\n        <mat-hint *ngIf=\"this.form.controls['email'].errors?.email\" class=\"text-danger\">El mail no cuenta con el formato correcto</mat-hint>\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Contraseña</mat-label>\n        <input type=\"{{this.type}}\" matInput placeholder=\"Contraseña\" formControlName=\"contraseña\">\n        <mat-hint *ngIf=\"pass.invalid\" class=\"text-danger\">La contraseña es un campo requerido</mat-hint>\n      </mat-form-field>\n    </p>\n    <mat-slide-toggle [checked]=\"this.toggle\" [color]=\"'primary'\" (change)=\"this.showPass()\">Mostrar contraseña</mat-slide-toggle>\n  </form>\n</div>\n<div mat-dialog-actions>\n  <button id=\"register\" class=\"w-100\" mat-raised-button [disabled]=\"this.form.invalid\" (click)=\"this.register()\">Registrarse</button>\n  <mat-progress-bar *ngIf=\"this.processing\" id=\"progressBar\" class=\"vivify fadeIn\" mode=\"indeterminate\"></mat-progress-bar>\n  <p *ngIf=\"this.success\" id=\"success\" class=\"text-success text-center vivify fadeIn\">Registracion realizada con exito</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/registro/registro.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/registro/registro.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid vivify driveInTop duration-1500\">\r\n<mat-card id=\"termsAndConditions\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      Terminos y condiciones\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\r\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\r\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button id=\"decline\" mat-raised-button (click)=\"this.decline()\">No acepto</button>\r\n    <button id=\"accept\" mat-raised-button (click)=\"this.accept()\">Acepto</button>\r\n  </mat-card-actions>\r\n  <mat-hint id=\"hint\">Los terminos y condiciones son cualquier cosa*</mat-hint>\r\n</mat-card>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/snack-bar-template/snack-bar-template.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/snack-bar-template/snack-bar-template.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p id=\"error\">{{this.data.error}}</p>\n<button mat-raised-button\ncolor=\"primary\"\n(click)=\"snackBarRef.dismiss()\">{{ data.action }}</button>"

/***/ }),

/***/ "./src/app/Services/high-low.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/high-low.service.ts ***!
  \**********************************************/
/*! exports provided: HighLowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighLowService", function() { return HighLowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/Services/http.service.ts");



let HighLowService = class HighLowService {
    constructor(http) {
        this.http = http;
        this.url = 'https://deckofcardsapi.com/api/deck/';
    }
    shuffleDeck() {
        const SHUFFLE_ENDPOINT = `${this.url}new/shuffle/?deck_count=1`;
        return this.http.get(SHUFFLE_ENDPOINT).pipe(response => response);
    }
    drawCard(deckId) {
        const DRAW_ENDPOINT = `${this.url}${deckId}/draw/?count=1`;
        return this.http.get(DRAW_ENDPOINT).pipe(response => response);
    }
};
HighLowService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
HighLowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HighLowService);



/***/ }),

/***/ "./src/app/Services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }));
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _pipes_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pipes/sanitizer.pipe */ "./src/app/pipes/sanitizer.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ "./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _componentes_snack_bar_template_snack_bar_template_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./componentes/snack-bar-template/snack-bar-template.component */ "./src/app/componentes/snack-bar-template/snack-bar-template.component.ts");
/* harmony import */ var _componentes_hi_lo_hi_lo_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./componentes/hi-lo/hi-lo.component */ "./src/app/componentes/hi-lo/hi-lo.component.ts");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var _Services_high_low_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Services/high-low.service */ "./src/app/Services/high-low.service.ts");
/* harmony import */ var _componentes_registracion_dialog_registracion_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./componentes/registracion-dialog/registracion-dialog.component */ "./src/app/componentes/registracion-dialog/registracion-dialog.component.ts");








//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';













// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/




























const firebaseConfig = {
    apiKey: 'AIzaSyCZ63weJ7A3M02Bd_N_W-DYI8kBmrmJJcI',
    authDomain: 'labo-iv.firebaseapp.com',
    databaseURL: 'https://labo-iv.firebaseio.com',
    projectId: 'labo-iv',
    storageBucket: '',
    messagingSenderId: '243523402378',
    appId: '1:243523402378:web:1129cdffcbbf271ad18b73'
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__["AdivinaElNumeroComponent"],
            _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__["ListadoDeResultadosComponent"],
            _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
            _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__["PrincipalComponent"],
            _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__["AgilidadAritmeticaComponent"],
            _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
            _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AdivinaMasListadoComponent"],
            _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__["AgilidadMasListadoComponent"],
            _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__["ListadoComponent"],
            _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__["ListadosComponent"],
            _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__["JuegosComponent"],
            _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__["RegistroComponent"],
            _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__["MenuCardComponent"],
            _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__["CabeceraComponent"],
            _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__["QuienSoyComponent"],
            _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__["AnagramaComponent"],
            _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__["ListadoDePaisesComponent"],
            _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__["MapaDeGoogleComponent"],
            _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__["JugadoresListadoComponent"],
            _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__["InputJugadoresComponent"],
            _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__["SexoPipe"],
            _pipes_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_35__["SanitizerPipe"],
            _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_40__["InicioComponent"],
            _componentes_snack_bar_template_snack_bar_template_component__WEBPACK_IMPORTED_MODULE_44__["SnackBarTemplateComponent"],
            _componentes_hi_lo_hi_lo_component__WEBPACK_IMPORTED_MODULE_45__["HiLoComponent"],
            _componentes_registracion_dialog_registracion_dialog_component__WEBPACK_IMPORTED_MODULE_48__["RegistracionDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__["RuteandoModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["MatCheckboxModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_41__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_43__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_42__["AngularFirestoreModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_32__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
            })
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo)
        ],
        providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["JugadoresService"], _Services_http_service__WEBPACK_IMPORTED_MODULE_46__["HttpService"], _Services_high_low_service__WEBPACK_IMPORTED_MODULE_47__["HighLowService"],
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_39__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2500, action: 'Cerrar' } }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_componentes_snack_bar_template_snack_bar_template_component__WEBPACK_IMPORTED_MODULE_44__["SnackBarTemplateComponent"], _componentes_registracion_dialog_registracion_dialog_component__WEBPACK_IMPORTED_MODULE_48__["RegistracionDialogComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/clases/cards-enum.ts":
/*!**************************************!*\
  !*** ./src/app/clases/cards-enum.ts ***!
  \**************************************/
/*! exports provided: CardsEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsEnum", function() { return CardsEnum; });
var CardsEnum;
(function (CardsEnum) {
    CardsEnum[CardsEnum["KING"] = 13] = "KING";
    CardsEnum[CardsEnum["QUEEN"] = 12] = "QUEEN";
    CardsEnum[CardsEnum["JACK"] = 11] = "JACK";
    CardsEnum[CardsEnum["TEN"] = 10] = "TEN";
    CardsEnum[CardsEnum["NINE"] = 9] = "NINE";
    CardsEnum[CardsEnum["EIGHT"] = 8] = "EIGHT";
    CardsEnum[CardsEnum["SEVEN"] = 7] = "SEVEN";
    CardsEnum[CardsEnum["SIX"] = 6] = "SIX";
    CardsEnum[CardsEnum["FIVE"] = 5] = "FIVE";
    CardsEnum[CardsEnum["FOUR"] = 4] = "FOUR";
    CardsEnum[CardsEnum["THREE"] = 3] = "THREE";
    CardsEnum[CardsEnum["TWO"] = 2] = "TWO";
    CardsEnum[CardsEnum["ACE"] = 1] = "ACE";
})(CardsEnum || (CardsEnum = {}));


/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");

class JuegoAdivina extends _clases_juego__WEBPACK_IMPORTED_MODULE_0__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Adivina el número", gano, jugador);
        this.numeroSecreto = 0;
        this.numeroIngresado = 0;
    }
    verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    }
}
JuegoAdivina.ctorParameters = () => [
    { type: String },
    { type: Boolean },
    { type: String }
];


/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
class JuegoAgilidad {
}


/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
class Juego {
    constructor(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    retornarAyuda() {
        return "NO hay Ayuda definida";
    }
}
Juego.ctorParameters = () => [
    { type: String },
    { type: Boolean },
    { type: String }
];


/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZvcm0ge1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDpncmF5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY2FuY2VsYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG4uYWNlcHRidG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY2NEY0O1xyXG59XHJcbi5pbWdjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG59XHJcblxyXG5pbWcuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuc3Bhbi5wc3cge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgc3Bhbi5wc3cge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYW5jZWxidG4ge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuI3NuYWNrYmFyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuI3NuYWNrYmFyLkdhbmFkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OUYyRjtcclxufVxyXG4jc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxufVxyXG4jc25hY2tiYXIuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9IFxyXG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO30gXHJcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");



let AdivinaElNumeroComponent = class AdivinaElNumeroComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]();
        console.info('numero Secreto:', this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    generarnumero() {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    }
    verificar() {
        this.contador++;
        this.ocultarVerificar = true;
        console.info('numero Secreto:', this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje('Sos un Genio!!!', true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            let mensaje;
            switch (this.contador) {
                case 1:
                    mensaje = 'No, intento fallido, animo';
                    break;
                case 2:
                    mensaje = 'No,Te estaras Acercando???';
                    break;
                case 3:
                    mensaje = 'No es, Yo crei que la tercera era la vencida.';
                    break;
                case 4:
                    mensaje = 'No era el  ' + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = ' intentos y nada.';
                    break;
                case 6:
                    mensaje = 'Afortunado en el amor';
                    break;
                default:
                    mensaje = 'Ya le erraste ' + this.contador + ' veces';
                    break;
            }
            this.MostarMensaje('#' + this.contador + ' ' + mensaje + ' ayuda :' + this.nuevoJuego.retornarAyuda());
        }
        console.info('numero Secreto:', this.nuevoJuego.gano);
    }
    MostarMensaje(mensaje = 'este es el mensaje', ganador = false) {
        this.Mensajes = mensaje;
        var x = document.getElementById('snackbar');
        if (ganador) {
            x.className = 'show Ganador';
        }
        else {
            x.className = 'show Perdedor';
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace('show', '');
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info('objeto', x);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__(/*! raw-loader!./adivina-el-numero.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    })
], AdivinaElNumeroComponent);



/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdivinaMasListadoComponent = class AdivinaMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    }
};
AdivinaMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-mas-listado',
        template: __webpack_require__(/*! raw-loader!./adivina-mas-listado.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
        styles: [__webpack_require__(/*! ./adivina-mas-listado.component.css */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
    })
], AdivinaMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLWFyaXRtZXRpY2EvYWdpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");



let AgilidadAritmeticaComponent = class AgilidadAritmeticaComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]();
        console.info('Inicio agilidad');
    }
    ngOnInit() {
    }
    NuevoJuego() {
        this.ocultarVerificar = false;
        this.repetidor = setInterval(() => {
            this.Tiempo--;
            console.log('llego', this.Tiempo);
            if (this.Tiempo == 0) {
                clearInterval(this.repetidor);
                this.verificar();
                this.ocultarVerificar = true;
                this.Tiempo = 5;
            }
        }, 900);
    }
    verificar() {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__(/*! raw-loader!./agilidad-aritmetica.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__(/*! ./agilidad-aritmetica.component.css */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    })
], AgilidadAritmeticaComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLW1hcy1saXN0YWRvL2FnaWxpZGFkLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgilidadMasListadoComponent = class AgilidadMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    }
};
AgilidadMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-mas-listado',
        template: __webpack_require__(/*! raw-loader!./agilidad-mas-listado.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
        styles: [__webpack_require__(/*! ./agilidad-mas-listado.component.css */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
    })
], AgilidadMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FuYWdyYW1hL2FuYWdyYW1hLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
  \************************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnagramaComponent = class AnagramaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnagramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anagrama',
        template: __webpack_require__(/*! raw-loader!./anagrama.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__(/*! ./anagrama.component.css */ "./src/app/componentes/anagrama/anagrama.component.css")]
    })
], AnagramaComponent);



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid\r\n{\r\n    margin-top: 0rem;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('cabecera.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n    padding: 3rem 0;\r\n    margin-bottom: -1rem;\r\n}\r\n\r\n.titulo, p, button\r\n{\r\n    text-align: center;\r\n    color: var(--content-color);\r\n}\r\n\r\n#github\r\n{\r\n    float: right;\r\n}\r\n\r\nbutton\r\n{\r\n    background-color: var(--base-color);\r\n}\r\n\r\n.hvr-fade {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    overflow: hidden;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-property: color, background-color;\r\n    transition-property: color, background-color;\r\n  }\r\n\r\n.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {\r\n    background-color: var(--base-color-step-300);\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQ0FBOEQ7SUFDOUQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsaURBQWlEO0lBQ2pELHlDQUF5QztJQUN6QyxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsb0RBQW9EO0lBQ3BELDRDQUE0QztFQUM5Qzs7QUFDQTtJQUNFLDRDQUE0QztJQUM1QyxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYWJlY2VyYS9jYWJlY2VyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VuZXMvY2FiZWNlcmEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcclxufVxyXG5cclxuLnRpdHVsbywgcCwgYnV0dG9uXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcclxufVxyXG5cclxuI2dpdGh1YlxyXG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmJ1dHRvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxufVxyXG5cclxuLmh2ci1mYWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbiAgLmh2ci1mYWRlOmhvdmVyLCAuaHZyLWZhZGU6Zm9jdXMsIC5odnItZmFkZTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvci1zdGVwLTMwMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CabeceraComponent = class CabeceraComponent {
    constructor() { }
    ngOnInit() {
    }
};
CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cabecera',
        template: __webpack_require__(/*! raw-loader!./cabecera.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")]
    })
], CabeceraComponent);



/***/ }),

/***/ "./src/app/componentes/error/error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/error/error.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");



let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/componentes/error/error.component.css")]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/componentes/hi-lo/hi-lo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/hi-lo/hi-lo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    border: .1rem solid black;\r\n    margin: 1% 2%;\r\n    margin: auto;\r\n    background-color: var(--tertiary-color-step-400);\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 1%;\r\n    background-color: var(--background-color);\r\n}\r\n\r\n#card-container {\r\n    background-color: transparent;\r\n    width: 50%;\r\n    margin-top: 2%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.cards {\r\n    width: initial;\r\n    height: initial;\r\n    margin-left: 1%;\r\n}\r\n\r\n#jugar {\r\n    background-color: var(--secondary-color-step-900);\r\n    width: 100%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n#buttons {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 57%;\r\n    width: 20%;\r\n}\r\n\r\n#higher {\r\n    margin-bottom: 10%;\r\n    background-color: rgb(11, 209, 11);\r\n}\r\n\r\n#lower {\r\n    background-color: red;\r\n}\r\n\r\n#spinner {\r\n    position: absolute;\r\n    top: 19%;\r\n    left: 60%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n#timer\r\n{\r\n    position: absolute;\r\n    top: 22%;\r\n    left: 62.5%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.cardText {\r\n    margin-top: 2%;\r\n    width: 226px;\r\n}\r\n\r\n#puntuacion {\r\n    position: fixed;\r\n    display: block;\r\n    border: .1rem solid black;\r\n    top: 15%;\r\n    right: 22.5%;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n.icons\r\n{\r\n    position: absolute;\r\n    left: 25%;\r\n    font-size: 7rem;\r\n}\r\n\r\n#success\r\n{\r\n    color: rgb(11, 209, 11);\r\n}\r\n\r\n#failure\r\n{\r\n    color: red;\r\n}\r\n\r\n.gameOver\r\n{\r\n    font-size: 3rem;\r\n}\r\n\r\n.gameOverButtons\r\n{\r\n    margin-bottom: 2%;\r\n    width: 50%;\r\n    background-color: var(--tertiary-color-step-400);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaGktbG8vaGktbG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0RBQWdEO0FBQ3BEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvaGktbG8vaGktbG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogMSUgMiU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1zdGVwLTQwMCk7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuI2NhcmQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgICB3aWR0aDogaW5pdGlhbDtcclxuICAgIGhlaWdodDogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuI2p1Z2FyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4jYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDU3JTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbiNoaWdoZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAyMDksIDExKTtcclxufVxyXG5cclxuI2xvd2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuI3NwaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOSU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jdGltZXJcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMiU7XHJcbiAgICBsZWZ0OiA2Mi41JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkVGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiAyMjZweDtcclxufVxyXG5cclxuI3B1bnR1YWNpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGJsYWNrO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICByaWdodDogMjIuNSU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbn1cclxuXHJcbi5pY29uc1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICBmb250LXNpemU6IDdyZW07XHJcbn1cclxuXHJcbiNzdWNjZXNzXHJcbntcclxuICAgIGNvbG9yOiByZ2IoMTEsIDIwOSwgMTEpO1xyXG59XHJcblxyXG4jZmFpbHVyZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZ2FtZU92ZXJcclxue1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4uZ2FtZU92ZXJCdXR0b25zXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yLXN0ZXAtNDAwKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/hi-lo/hi-lo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/hi-lo/hi-lo.component.ts ***!
  \******************************************************/
/*! exports provided: HiLoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiLoComponent", function() { return HiLoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_high_low_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/high-low.service */ "./src/app/Services/high-low.service.ts");
/* harmony import */ var _clases_cards_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clases/cards-enum */ "./src/app/clases/cards-enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let HiLoComponent = class HiLoComponent {
    constructor(hiloService, router) {
        this.hiloService = hiloService;
        this.router = router;
        this.backCard = '../../../assets/imagenes/card-back.png';
        this.currentCard = { img: this.backCard, value: -1 };
        this.previousCard = { img: this.backCard, value: -1 };
        this.cardChosen = false;
        this.currentToPrevious = false;
        this.hiloButtonsEnabled = false;
        this.playing = false;
        this.puntuacion = 0;
        this.turns = 0;
        this.fail = false;
        this.success = false;
        this.exitResult = false;
        this.hideCurrent = false;
        this.gameFinished = false;
        this.destroyComponent = false;
        this.storageEmpty = true;
    }
    ngOnInit() {
        this.hiloService.shuffleDeck().subscribe((response) => {
            this.deckId = response.deck_id;
        });
        this.storageEmpty = (localStorage.getItem('hi-lo-score') === null);
    }
    drawCard(obj) {
        this.hiloService.drawCard(this.deckId).subscribe((response) => {
            obj.img = response.cards[0].image;
            if (isNaN(parseInt(response.cards[0].value, 10))) {
                console.log(response.cards[0].value, _clases_cards_enum__WEBPACK_IMPORTED_MODULE_3__["CardsEnum"][`${response.cards[0].value}`]);
                obj.value = _clases_cards_enum__WEBPACK_IMPORTED_MODULE_3__["CardsEnum"][`${response.cards[0].value}`];
            }
            else {
                obj.value = parseInt(response.cards[0].value, 10);
            }
            console.log(obj);
        });
    }
    jugar() {
        this.playing = true;
        this.currentToPrevious = true;
        this.drawCard(this.previousCard);
        this.hiloButtonsEnabled = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000).subscribe(() => { this.currentToPrevious = false; });
    }
    decideCard(hilo) {
        this.hiloButtonsEnabled = false;
        this.turns += 1;
        this.drawCard(this.currentCard);
        this.cardChosen = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(3000).subscribe(() => {
            this.cardChosen = false;
            console.log(this.previousCard.value, this.currentCard.value, this.currentCard.value > this.previousCard.value);
            switch (hilo) {
                case 'higher':
                    if (this.currentCard.value > this.previousCard.value) {
                        this.successResult();
                    }
                    else {
                        this.failureResult();
                    }
                    break;
                case 'lower':
                    if (this.currentCard.value < this.previousCard.value) {
                        this.successResult();
                    }
                    else {
                        this.failureResult();
                    }
                    break;
            }
            if (this.turns === 10) {
                this.saveScore();
                this.gameFinished = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000).subscribe(() => {
                    this.destroyComponent = true;
                });
            }
            this.hiloButtonsEnabled = true;
        });
    }
    saveScore() {
        if (localStorage.getItem('hi-lo-score') === null) {
            localStorage.setItem('hi-lo-score', JSON.stringify([{
                    usuario: JSON.parse(localStorage.getItem('uname')),
                    fecha: Date(),
                    puntuacion: `${this.puntuacion}/10`
                }]));
        }
        else {
            let existingArray = JSON.parse(localStorage.getItem('hi-lo-score'));
            console.log(existingArray);
            existingArray.push({
                usuario: JSON.parse(localStorage.getItem('uname')),
                fecha: Date(),
                puntuacion: `${this.puntuacion}/10`
            });
            console.log(existingArray);
            localStorage.removeItem('hi-lo-score');
            localStorage.setItem('hi-lo-score', JSON.stringify(existingArray));
        }
    }
    failureResult() {
        this.fail = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(3000).subscribe(() => {
            this.exitResult = true;
            this.swapCards();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(4000).subscribe(() => {
            this.exitResult = false;
            this.fail = false;
        });
    }
    successResult() {
        this.puntuacion += 1;
        this.success = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(3000).subscribe(() => {
            this.exitResult = true;
            this.swapCards();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(4000).subscribe(() => {
            this.exitResult = false;
            this.success = false;
        });
    }
    swapCards() {
        this.hideCurrent = true;
        this.currentToPrevious = true;
        this.previousCard.img = this.currentCard.img;
        this.previousCard.value = this.currentCard.value;
        this.currentCard.img = this.backCard;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000).subscribe(() => {
            this.hideCurrent = false;
            this.cardChosen = true;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(5000).subscribe(() => {
            this.cardChosen = false;
            this.currentToPrevious = false;
        });
    }
    again() {
        window.location.reload();
    }
    principal() {
        this.router.navigate(['/Principal']);
    }
};
HiLoComponent.ctorParameters = () => [
    { type: _Services_high_low_service__WEBPACK_IMPORTED_MODULE_2__["HighLowService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HiLoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hi-lo',
        template: __webpack_require__(/*! raw-loader!./hi-lo.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/hi-lo/hi-lo.component.html"),
        styles: [__webpack_require__(/*! ./hi-lo.component.css */ "./src/app/componentes/hi-lo/hi-lo.component.css")]
    })
], HiLoComponent);



/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html\r\n{\r\n    height: 100%;\r\n}\r\n\r\n*\r\n{\r\n    box-sizing: border-box;\r\n}\r\n\r\n.top\r\n{\r\n    text-align: center;\r\n    top: 40%;\r\n    left: 25%;\r\n    right: 25%;\r\n    position: absolute;\r\n    z-index: 2;\r\n    color: var(--tertiary-color);\r\n}\r\n\r\n.top>h1\r\n{\r\n    font-size: 40pt;\r\n\r\n}\r\n\r\n.top>a>button\r\n{\r\n    background-color: var(--secondary-color-step-800);\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n#imgBlurred\r\n{\r\n    background-image: url('cabecera.jpg');\r\n    height: 100vh;\r\n    filter: blur(10px);\r\n    -webkit-filter: blur(10px);\r\n\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.slide-in-blurred-top {\r\n\t-webkit-animation: slide-in-blurred-top 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;\r\n\t        animation: slide-in-blurred-top 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;\r\n}\r\n\r\n@-webkit-keyframes slide-in-blurred-top {\r\n    0% {\r\n      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);\r\n              transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);\r\n      -webkit-transform-origin: 50% 0%;\r\n              transform-origin: 50% 0%;\r\n      -webkit-filter: blur(40px);\r\n              filter: blur(40px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(0) scaleY(1) scaleX(1);\r\n              transform: translateY(0) scaleY(1) scaleX(1);\r\n      -webkit-transform-origin: 50% 50%;\r\n              transform-origin: 50% 50%;\r\n      -webkit-filter: blur(0);\r\n              filter: blur(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n@keyframes slide-in-blurred-top {\r\n    0% {\r\n      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);\r\n              transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);\r\n      -webkit-transform-origin: 50% 0%;\r\n              transform-origin: 50% 0%;\r\n      -webkit-filter: blur(40px);\r\n              filter: blur(40px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(0) scaleY(1) scaleX(1);\r\n              transform: translateY(0) scaleY(1) scaleX(1);\r\n      -webkit-transform-origin: 50% 50%;\r\n              transform-origin: 50% 50%;\r\n      -webkit-filter: blur(0);\r\n              filter: blur(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSxpREFBaUQ7SUFDakQsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxxQ0FBOEQ7SUFDOUQsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7O0lBRTFCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0NBQ0Msd0ZBQWdGO1NBQWhGLGdGQUFnRjtBQUNqRjs7QUFFQztJQUNHO01BQ0UsOERBQXNEO2NBQXRELHNEQUFzRDtNQUN0RCxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLDBCQUFrQjtjQUFsQixrQkFBa0I7TUFDbEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxvREFBNEM7Y0FBNUMsNENBQTRDO01BQzVDLGlDQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsdUJBQWU7Y0FBZixlQUFlO01BQ2YsVUFBVTtJQUNaO0VBQ0Y7O0FBYkQ7SUFDRztNQUNFLDhEQUFzRDtjQUF0RCxzREFBc0Q7TUFDdEQsZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4QiwwQkFBa0I7Y0FBbEIsa0JBQWtCO01BQ2xCLFVBQVU7SUFDWjtJQUNBO01BQ0Usb0RBQTRDO2NBQTVDLDRDQUE0QztNQUM1QyxpQ0FBeUI7Y0FBekIseUJBQXlCO01BQ3pCLHVCQUFlO2NBQWYsZUFBZTtNQUNmLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbFxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbipcclxue1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRvcFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHJpZ2h0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnRvcD5oMVxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHQ7XHJcblxyXG59XHJcblxyXG4udG9wPmE+YnV0dG9uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTgwMCk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuI2ltZ0JsdXJyZWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VuZXMvY2FiZWNlcmEuanBnJyk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1pbi1ibHVycmVkLXRvcCB7XHJcblx0YW5pbWF0aW9uOiBzbGlkZS1pbi1ibHVycmVkLXRvcCAxcyBjdWJpYy1iZXppZXIoMC4yMzAsIDEuMDAwLCAwLjMyMCwgMS4wMDApIGJvdGg7XHJcbn1cclxuXHJcbiBAa2V5ZnJhbWVzIHNsaWRlLWluLWJsdXJyZWQtdG9wIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHNjYWxlWSgyLjUpIHNjYWxlWCgwLjIpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICAgIGZpbHRlcjogYmx1cig0MHB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGVZKDEpIHNjYWxlWCgxKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgZmlsdGVyOiBibHVyKDApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.ts ***!
  \********************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InicioComponent = class InicioComponent {
    constructor() {
        this.textEntrance = false;
        this.buttonEntrance = false;
        this.animateEntrances();
    }
    ngOnInit() {
    }
    animateEntrances() {
        setTimeout(() => {
            this.textEntrance = true;
        }, 1000);
        setTimeout(() => {
            this.buttonEntrance = true;
        }, 1300);
    }
};
InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/inicio/inicio.component.html"),
        styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/componentes/inicio/inicio.component.css")]
    })
], InicioComponent);



/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2lucHV0LWp1Z2Fkb3Jlcy9pbnB1dC1qdWdhZG9yZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function() { return InputJugadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputJugadoresComponent = class InputJugadoresComponent {
    constructor() { }
    ngOnInit() {
    }
};
InputJugadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-jugadores',
        template: __webpack_require__(/*! raw-loader!./input-jugadores.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/input-jugadores/input-jugadores.component.html"),
        styles: [__webpack_require__(/*! ./input-jugadores.component.css */ "./src/app/componentes/input-jugadores/input-jugadores.component.css")]
    })
], InputJugadoresComponent);



/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*\r\n{\r\n    background-color: var(--base-color);\r\n    margin: 0;\r\n}\r\n\r\nh1\r\n{\r\n    color:white;\r\n    padding: .5rem 0rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvanVlZ29zL2p1ZWdvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1DQUFtQztJQUNuQyxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksV0FBVztJQUNYLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1ZWdvcy9qdWVnb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIipcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgxXHJcbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMHJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.ts ***!
  \********************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JuegosComponent = class JuegosComponent {
    constructor() { }
    ngOnInit() {
    }
};
JuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-juegos',
        template: __webpack_require__(/*! raw-loader!./juegos.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__(/*! ./juegos.component.css */ "./src/app/componentes/juegos/juegos.component.css")]
    })
], JuegosComponent);



/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1Z2Fkb3Jlcy1saXN0YWRvL2p1Z2Fkb3Jlcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
  \******************************************************************************/
/*! exports provided: JugadoresListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function() { return JugadoresListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");



let JugadoresListadoComponent = class JugadoresListadoComponent {
    constructor(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    ngOnInit() {
    }
    TraerTodos() {
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerGanadores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerPerdedores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
};
JugadoresListadoComponent.ctorParameters = () => [
    { type: _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"] }
];
JugadoresListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jugadores-listado',
        template: __webpack_require__(/*! raw-loader!./jugadores-listado.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
        styles: [__webpack_require__(/*! ./jugadores-listado.component.css */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
    })
], JugadoresListadoComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcGFpc2VzL2xpc3RhZG8tZGUtcGFpc2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListadoDePaisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function() { return ListadoDePaisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/paises.service */ "./src/app/servicios/paises.service.ts");



let ListadoDePaisesComponent = class ListadoDePaisesComponent {
    constructor(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ngOnInit() {
        this.miServicioDePaises.listar()
            .then(datos => {
            console.info("listado de paises", datos);
            this.listadoDePaises = datos;
        });
    }
};
ListadoDePaisesComponent.ctorParameters = () => [
    { type: _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__["PaisesService"] }
];
ListadoDePaisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-paises',
        template: __webpack_require__(/*! raw-loader!./listado-de-paises.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
        styles: [__webpack_require__(/*! ./listado-de-paises.component.css */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
    })
], ListadoDePaisesComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadoDeResultadosComponent = class ListadoDeResultadosComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ver() {
        console.info(this.listado);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__(/*! raw-loader!./listado-de-resultados.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__(/*! ./listado-de-resultados.component.css */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    })
], ListadoDeResultadosComponent);



/***/ }),

/***/ "./src/app/componentes/listado/listado.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    left: 35%;\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.ts ***!
  \**********************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadoComponent = class ListadoComponent {
    constructor() {
        this.listado = JSON.parse(localStorage.getItem('hi-lo-score'));
    }
    ngOnInit() {
    }
};
ListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado',
        template: __webpack_require__(/*! raw-loader!./listado.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__(/*! ./listado.component.css */ "./src/app/componentes/listado/listado.component.css")]
    })
], ListadoComponent);



/***/ }),

/***/ "./src/app/componentes/listados/listados.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG9zL2xpc3RhZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.ts ***!
  \************************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadosComponent = class ListadosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listados',
        template: __webpack_require__(/*! raw-loader!./listados.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/listados/listados.component.html"),
        styles: [__webpack_require__(/*! ./listados.component.css */ "./src/app/componentes/listados/listados.component.css")]
    })
], ListadosComponent);



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid\r\n{\r\n    height: 100vh;\r\n}\r\n\r\n#email, #clave\r\n{\r\n    width: 100%;\r\n}\r\n\r\nform\r\n{\r\n    background-color: #2962ff;\r\n    padding: 1rem;\r\n    margin-top: 1rem;\r\n    padding-bottom: 5rem;\r\n}\r\n\r\n#ingresar\r\n{\r\n    background-color: var(--secondary-color-step-400);\r\n    color: black;\r\n    padding: .3rem 0rem .6rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#registerBtn\r\n{\r\n    position: relative;\r\n    float: right;\r\n}\r\n\r\n#register\r\n{\r\n    margin-top: 1rem;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n#register>button\r\n{\r\n    margin-right: 1rem; \r\n}\r\n\r\nmat-label {\r\n    color: white;\r\n  }\r\n\r\nmat-checkbox\r\n{\r\n    color: white;\r\n}\r\n\r\nimg\r\n{\r\n    justify-self: center;\r\n    width: 25%;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n}\r\n\r\n#progressBar\r\n{\r\n    margin-bottom: 1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksaURBQWlEO0lBQ2pELFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWRcclxue1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI2VtYWlsLCAjY2xhdmVcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmZvcm1cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NjJmZjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbn1cclxuXHJcbiNpbmdyZXNhclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3Itc3RlcC00MDApO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogLjNyZW0gMHJlbSAuNnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNyZWdpc3RlckJ0blxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNyZWdpc3RlclxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbiNyZWdpc3Rlcj5idXR0b25cclxue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyBcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG5tYXQtY2hlY2tib3hcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbWdcclxue1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuI3Byb2dyZXNzQmFyXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/firebase-auth.service */ "./src/app/servicios/firebase-auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _snack_bar_template_snack_bar_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../snack-bar-template/snack-bar-template.component */ "./src/app/componentes/snack-bar-template/snack-bar-template.component.ts");







let LoginComponent = class LoginComponent {
    constructor(authService, route, snackBar) {
        this.authService = authService;
        this.route = route;
        this.snackBar = snackBar;
        // Manejo de form controls
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
        this.claveFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.type = 'text';
        this.logingIn = false;
        this.usuario = 'admin@admin.com';
        this.clave = 'admin11';
        this.showPass = false;
    }
    ngOnInit() {
    }
    login() {
        this.logingIn = true;
        this.authService.loginEmailUser(this.usuario, this.clave)
            .then(() => {
            setTimeout(() => {
                localStorage.setItem('uname', JSON.stringify(this.usuario));
                this.route.navigate(['/Principal']);
            }, 1500);
        }, (err) => {
            console.log(err);
            setTimeout(() => {
                this.logingIn = false;
                this.snackBar.openFromComponent(_snack_bar_template_snack_bar_template_component__WEBPACK_IMPORTED_MODULE_6__["SnackBarTemplateComponent"], {
                    data: {
                        error: this.validateLogin(err.code),
                        action: 'Cerrar'
                    }
                });
            }, 1500);
        });
    }
    validateLogin(errCode) {
        switch (errCode) {
            case 'auth/invalid-email':
                return 'El mail ingresado no es valido';
            case 'auth/user-not-found':
                return 'El mail ingresado no corresponde a ningun usuario';
            case 'auth/wrong-password':
                return 'Contraseña incorrecta';
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1kZS1nb29nbGUvbWFwYS1kZS1nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtZGUtZ29vZ2xlL21hcGEtZGUtZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
  \************************************************************************/
/*! exports provided: MapaDeGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function() { return MapaDeGoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapaDeGoogleComponent = class MapaDeGoogleComponent {
    constructor() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    ngOnInit() {
    }
};
MapaDeGoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa-de-google',
        template: __webpack_require__(/*! raw-loader!./mapa-de-google.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html"),
        styles: [__webpack_require__(/*! ./mapa-de-google.component.css */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css")]
    })
], MapaDeGoogleComponent);



/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.less":
/*!****************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border-radius: 5px;\n  max-width: 300px;\n  height: 100%;\n  margin: 10px;\n  padding-bottom: 10px;\n  float: left;\n  background-color: #DEF3A6;\n  text-align: center;\n}\nimg {\n  border-radius: 5px 5px 0 0;\n  width: 200px;\n  height: 200px;\n}\n.card-deck {\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 1rem;\n}\na {\n  color: var(--secondary-color-step-900);\n}\n#play {\n  width: 90%;\n  margin-top: 1rem;\n  background-color: var(--secondary-color);\n}\n.flip-card {\n  background-color: transparent;\n  width: 35rem;\n  height: 25rem;\n  border: 1px solid #f1f1f1;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  -webkit-transition: -webkit-transform 0.8s;\n  transition: -webkit-transform 0.8s;\n  transition: transform 0.8s;\n  transition: transform 0.8s, -webkit-transform 0.8s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n.flip-card:hover .flip-card-inner {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.flip-card-front,\n.flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.flip-card-front {\n  background-color: #bbb;\n  color: black;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.flip-card-back {\n  background-color: var(--base-color);\n  color: white;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.btn3d {\n  position: relative;\n  top: -6px;\n  border: 0;\n  -webkit-transition: all 40ms linear;\n  transition: all 40ms linear;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 2px;\n  margin-right: 2px;\n  box-shadow: 0 0 0 1px var(--secondary-color-step-900) inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 var(--secondary-color-step-800), 0 8px 8px 1px rgba(0, 0, 0, 0.5);\n}\n.btn3d:active:focus,\n.btn3d:focus:hover,\n.btn3d:focus {\n  -moz-outline-style: none;\n  outline: medium none;\n}\n.btn3d:active,\n.btn3d.active {\n  top: 2px;\n  box-shadow: 0 0 0 1px var(--tertiary-color-step-900) inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 1px 3px 1px rgba(0, 0, 0, 0.3);\n  background-color: var(--tertiary-color-step-900);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL0Y6L0ZhY3UvU2FsYS1kZS1KdWVnb3Mtdjgvc3JjL2FwcC9jb21wb25lbnRlcy9tZW51LWNhcmQvbWVudS1jYXJkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRlcy9tZW51LWNhcmQvbWVudS1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMENBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNELFlBQUE7RUFDQyxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0YseUJBQUE7RUFDRSxrQkFBQTtBQ0RKO0FESUE7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRko7QURNRTtFQUVFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQkFBQTtBQ0xKO0FEUUU7RUFFRSxzQ0FBQTtBQ1BKO0FEVUU7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQ1RKO0FEWUU7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VDVkYsZ0RBQWdEO0FBQ2xEO0FEWUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNWSjtBRGFFO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtBQ1hKO0FEY0U7O0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNYSjtBRGNFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDWko7QURlRTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNiSjtBRGdCRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtTEFBQTtBQ2RKO0FEaUJFOzs7RUFHRSx3QkFBQTtFQUNBLG9CQUFBO0FDZko7QURrQkU7O0VBRUUsUUFBQTtFQUNBLHVJQUFBO0VBQ0EsZ0RBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9tZW51LWNhcmQvbWVudS1jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzaGF0L2xlc3NoYXQubGVzc1wiO1xuXG4uY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREVGM0E2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuXG4gIC5jYXJkLWRlY2tcbiAge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG5cbiAgYVxuICB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XG4gIH1cblxuICAjcGxheVxuICB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIH1cblxuICAuZmxpcC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7IC8qIFJlbW92ZSB0aGlzIGlmIHlvdSBkb24ndCB3YW50IHRoZSAzRCBlZmZlY3QgKi9cbiAgfVxuXG4gIC5mbGlwLWNhcmQtaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cblxuICAuZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG5cbiAgLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gIC5mbGlwLWNhcmQtZnJvbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuZmxpcC1jYXJkLWJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuXG4gIC5idG4zZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTZweDtcbiAgICBib3JkZXI6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDQwbXMgbGluZWFyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1zZWNvbmRhcnktY29sb3Itc3RlcC05MDApIGluc2V0LCAwIDAgMCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSBpbnNldCwgMCA4cHggMCAwIHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTgwMCksIDAgOHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIFxuICAuYnRuM2Q6YWN0aXZlOmZvY3VzLFxuICAuYnRuM2Q6Zm9jdXM6aG92ZXIsXG4gIC5idG4zZDpmb2N1cyB7XG4gICAgLW1vei1vdXRsaW5lLXN0eWxlOiBub25lO1xuICAgIG91dGxpbmU6IG1lZGl1bSBub25lO1xuICB9XG4gIFxuICAuYnRuM2Q6YWN0aXZlLFxuICAuYnRuM2QuYWN0aXZlIHtcbiAgICB0b3A6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tdGVydGlhcnktY29sb3Itc3RlcC05MDApIGluc2V0LCAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSBpbnNldCwgMCAxcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3Itc3RlcC05MDApO1xuICB9IiwiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RFRjNBNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJkLWRlY2sge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5hIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XG59XG4jcGxheSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG4uZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAzNXJlbTtcbiAgaGVpZ2h0OiAyNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLyogUmVtb3ZlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xufVxuLmZsaXAtY2FyZC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmZsaXAtY2FyZC1mcm9udCxcbi5mbGlwLWNhcmQtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmZsaXAtY2FyZC1mcm9udCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uYnRuM2Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZweDtcbiAgYm9yZGVyOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgNDBtcyBsaW5lYXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLXN0ZXAtOTAwKSBpbnNldCwgMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgaW5zZXQsIDAgOHB4IDAgMCB2YXIoLS1zZWNvbmRhcnktY29sb3Itc3RlcC04MDApLCAwIDhweCA4cHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5idG4zZDphY3RpdmU6Zm9jdXMsXG4uYnRuM2Q6Zm9jdXM6aG92ZXIsXG4uYnRuM2Q6Zm9jdXMge1xuICAtbW96LW91dGxpbmUtc3R5bGU6IG5vbmU7XG4gIG91dGxpbmU6IG1lZGl1bSBub25lO1xufVxuLmJ0bjNkOmFjdGl2ZSxcbi5idG4zZC5hY3RpdmUge1xuICB0b3A6IDJweDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXRlcnRpYXJ5LWNvbG9yLXN0ZXAtOTAwKSBpbnNldCwgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgaW5zZXQsIDAgMXB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1zdGVwLTkwMCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let MenuCardComponent = class MenuCardComponent {
    constructor(route, router, sanitizer) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.cardContent = [{ img: this.sanitizer.bypassSecurityTrustStyle(`url('/assets/imagenes/cerebro.jpg')`),
                title: 'Velocidad y agilidad aritmética', description: 'Juego de agilidad mental', link: '/Juegos/Agilidad' },
            { img: this.sanitizer.bypassSecurityTrustStyle(`url('/assets/imagenes/ppt.jpg')`),
                title: 'Piedra Papel o Tijera', description: 'Juega contra la máquina', link: '/Juegos/PiedraPapelTijera' },
            { img: this.sanitizer.bypassSecurityTrustStyle(`url('/assets/imagenes/adivina.png')`),
                title: 'Adivina el número secreto', description: 'Juega de estrategia', link: '/Juegos/Adivina' },
            { img: this.sanitizer.bypassSecurityTrustStyle(`url('/assets/imagenes/hi-lo.png')`),
                title: 'Hi-Lo', description: 'Adivina si la siguiente carta sera mayor o menor que la actual', link: '/Juegos/HiLo' }];
    }
    sanitizeStlye(url) {
        return this.sanitizer.bypassSecurityTrustStyle(`{bakcground-image:url(${url})};`);
    }
    ngOnInit() {
    }
    Jugar(tipo) {
        switch (tipo) {
            case 'Adivina el número secreto':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Velocidad y agilidad aritmética':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'Hi-Lo':
                this.router.navigate(['/Juegos/HiLo']);
                break;
        }
    }
};
MenuCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
MenuCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-card',
        template: __webpack_require__(/*! raw-loader!./menu-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__(/*! ./menu-card.component.less */ "./src/app/componentes/menu-card/menu-card.component.less")]
    })
], MenuCardComponent);



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navBar {\r\n    background-color: var(--base-color);\r\n    margin: 0;\r\n    border: 0;\r\n    border-bottom: .1rem solid var(--secondary-color-step-900);\r\n}\r\n\r\n.navbar-toggler-icon {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.navbar-toggler {\r\n    border: .1rem solid var(--secondary-color-step-900);\r\n}\r\n\r\n.dropdown-menu {\r\n    background-color: var(--secondary-color-step-900);\r\n}\r\n\r\n.dropdown-menu>a:hover {\r\n    background-color: var(--tertiary-color-step-500);\r\n}\r\n\r\n.nav-link {\r\n    color: white;\r\n}\r\n\r\n.dropdown-item {\r\n    color: black;\r\n}\r\n\r\n.activeLink {\r\n    color: var(--secondary-color-step-900);\r\n}\r\n\r\n.dropdown:hover>.dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.scale-in-top {\r\n    -webkit-animation: scale-in-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n    animation: scale-in-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\n@-webkit-keyframes scale-in-top {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n        -webkit-transform-origin: 50% 0%;\r\n        transform-origin: 50% 0%;\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n        -webkit-transform-origin: 50% 0%;\r\n        transform-origin: 50% 0%;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes scale-in-top {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n        -webkit-transform-origin: 50% 0%;\r\n        transform-origin: 50% 0%;\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n        -webkit-transform-origin: 50% 0%;\r\n        transform-origin: 50% 0%;\r\n        opacity: 1;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsU0FBUztJQUNULFNBQVM7SUFDVCwwREFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSx5UUFBeVE7QUFDN1E7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrRkFBa0Y7SUFDbEYsMEVBQTBFO0FBQzlFOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLGdDQUFnQztRQUNoQyx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSwyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLGdDQUFnQztRQUNoQyx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsZ0NBQWdDO1FBQ2hDLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsZ0NBQWdDO1FBQ2hDLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdkJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwxMDIsMjAzLCAwLjcpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA4aDI0TTQgMTZoMjRNNCAyNGgyNCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLXN0ZXAtOTAwKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLXN0ZXAtOTAwKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnU+YTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1zdGVwLTUwMCk7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmFjdGl2ZUxpbmsge1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3Zlcj4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNjYWxlLWluLXRvcCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtaW4tdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZS1pbi10b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS1pbi10b3Age1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGUtaW4tdG9wIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.dropDownExpanded = false;
        this.content = [
            { tabName: 'Mis datos', link: 'QuienSoy' },
            { tabName: 'Salir', link: 'Login' }
        ];
        this.games = [
            { tabName: 'Adivina', link: 'Juegos/Adivina' },
            { tabName: 'Agilidad', link: 'Juegos/Agilidad' },
            { tabName: 'Adivina+Listado', link: 'Juegos/AdivinaMasListado' },
            { tabName: 'Agilidad+Listado', link: 'Juegos/AgilidadMasListado' },
            { tabName: 'HiLo', link: 'Juegos/HiLo' }
        ];
    }
    ngOnInit() {
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.less":
/*!****************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  text-align: center;\n}\n.texto {\n  margin-left: 2rem;\n}\na {\n  color: #fdfdfd;\n  text-decoration: none;\n}\n.col-12 {\n  padding: 0;\n}\n.img-col {\n  height: 100%;\n}\nimg {\n  float: left;\n  margin-right: 3rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n#menuPrincipal {\n  font-size: 2rem;\n}\n.table-responsive,\n.media {\n  background-color: var(--content-color);\n}\n/* .table-responsive, .col-12>tr\n{\n    border: 0.3rem solid var(--secondary-color);\n} */\n#hoverable {\n  color: black;\n}\n#hoverable:hover {\n  color: white;\n}\n#topRow {\n  margin-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL0Y6L0ZhY3UvU2FsYS1kZS1KdWVnb3Mtdjgvc3JjL2FwcC9jb21wb25lbnRlcy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRlcy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREVBO0VBQ0ksaUJBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDREo7QURJQTtFQUVJLFVBQUE7QUNISjtBRE1BO0VBQ0ksWUFBQTtBQ0pKO0FET0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDTEo7QURRQTtFQUVJLGVBQUE7QUNQSjtBRFVBOztFQUVJLHNDQUFBO0FDUko7QUFDQTs7O0dBR0c7QURhSDtFQUVJLFlBQUE7QUNaSjtBRGVBO0VBRUksWUFBQTtBQ2RKO0FEaUJBO0VBRUksYUFBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG5hIHtcbiAgICBjb2xvcjogI2ZkZmRmZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb2wtMTJcbntcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaW1nLWNvbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4jbWVudVByaW5jaXBhbFxue1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUsIC5tZWRpYVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xufVxuXG4vKiAudGFibGUtcmVzcG9uc2l2ZSwgLmNvbC0xMj50clxue1xuICAgIGJvcmRlcjogMC4zcmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59ICovXG5cblxuI2hvdmVyYWJsZVxue1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2hvdmVyYWJsZTpob3Zlclxue1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3RvcFJvd1xue1xuICAgIG1hcmdpbi10b3A6IDA7XG59IiwidGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dG8ge1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbmEge1xuICBjb2xvcjogI2ZkZmRmZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbC0xMiB7XG4gIHBhZGRpbmc6IDA7XG59XG4uaW1nLWNvbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4jbWVudVByaW5jaXBhbCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi50YWJsZS1yZXNwb25zaXZlLFxuLm1lZGlhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XG59XG4vKiAudGFibGUtcmVzcG9uc2l2ZSwgLmNvbC0xMj50clxue1xuICAgIGJvcmRlcjogMC4zcmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59ICovXG4jaG92ZXJhYmxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuI2hvdmVyYWJsZTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiN0b3BSb3cge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrincipalComponent = class PrincipalComponent {
    constructor() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.content = [{ link: '/Juegos', img: './assets/imagenes/saladejuegos.png', heading: 'Juegos', content: `El método lúdico es un
   conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de
    aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.` },
            { link: '/Listado', img: './assets/imagenes/listado.png', heading: 'Listados de resultados', content: `Los listados de los resultados 
    con ordenamiento y busqueda` },
            { link: '/Configuracion', img: './assets/imagenes/Configuracion.png', heading: 'Configuración',
                content: `Ajustes de la aplicacion y los métodos de autentificación` },
            { link: '/Jugadores', img: './assets/imagenes/jugadores.png', heading: 'Jugadores',
                content: `Listado de jugadores` }];
    }
    ngOnInit() {
    }
};
PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: __webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__(/*! ./principal.component.less */ "./src/app/componentes/principal/principal.component.less")]
    })
], PrincipalComponent);



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navBar {\r\n    background-color: var(--base-color);\r\n    margin: 0;\r\n    border: 0;\r\n    border-bottom: .1rem solid var(--secondary-color-step-900);\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index: 999;\r\n}\r\n\r\n.navbar-toggler-icon {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.navbar-toggler {\r\n    border: .1rem solid var(--secondary-color-step-900);\r\n}\r\n\r\n.dropdown-menu {\r\n    background-color: var(--secondary-color-step-900);\r\n}\r\n\r\n.tabs>a:hover {\r\n    color: var(--secondary-color-step-900);\r\n}\r\n\r\n.tabs>a, footer>p>a {\r\n    color: white;\r\n    text-decoration: none;\r\n    padding-bottom: .3rem;\r\n}\r\n\r\n.hvr-underline-from-center:hover {\r\n    color: var(--secondary-color-step-900);\r\n}\r\n\r\n.tabs {\r\n    padding-right: 2rem;\r\n}\r\n\r\n#whoAmIText\r\n{\r\n    margin: 2% 0;\r\n}\r\n\r\n#whoAmIImg\r\n{\r\n    width: 50%;\r\n    height: 50%;\r\n    border-radius: 50%;\r\n    align-self: center;\r\n}\r\n\r\n#who\r\n{\r\n    background-color: var(--secondary-color-step-600);\r\n}\r\n\r\n#what\r\n{\r\n    background-color: var(--base-color-step-600);\r\n    color: white;\r\n    border-bottom: .3rem solid var(--tertiary-color-step-700);\r\n}\r\n\r\n#where\r\n{\r\n    background-color: var(--tertiary-color);\r\n    color: white;\r\n}\r\n\r\nbody {\r\n    font: 20px Montserrat, sans-serif;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n}\r\n\r\np {\r\n    font-size: 16px;\r\n}\r\n\r\n.margin {\r\n    margin-bottom: 45px;\r\n}\r\n\r\n.bg-4 {\r\n    background-color: #2f2f2f;\r\n    /* Black Gray */\r\n    color: #fff;\r\n}\r\n\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLFNBQVM7SUFDVCxTQUFTO0lBQ1QsMERBQTBEO0lBQzFELGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlRQUF5UTtBQUM3UTs7QUFFQTtJQUNJLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlEQUFpRDtBQUNyRDs7QUFFQTs7SUFFSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLHlEQUF5RDtBQUM3RDs7QUFFQTs7SUFFSSx1Q0FBdUM7SUFDdkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFLQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9xdWllbi1zb3kvcXVpZW4tc295LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2QmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLXN0ZXAtOTAwKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgyNTUsMTAyLDIwMywgMC43KScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XHJcbn1cclxuXHJcbi50YWJzPmE6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XHJcbn1cclxuXHJcbi50YWJzPmEsIGZvb3Rlcj5wPmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4zcmVtO1xyXG59XHJcblxyXG4uaHZyLXVuZGVybGluZS1mcm9tLWNlbnRlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLXN0ZXAtOTAwKTtcclxufVxyXG5cclxuLnRhYnMge1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxufVxyXG5cclxuI3dob0FtSVRleHRcclxue1xyXG4gICAgbWFyZ2luOiAyJSAwO1xyXG59XHJcblxyXG4jd2hvQW1JSW1nXHJcbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuI3dob1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3Itc3RlcC02MDApO1xyXG59XHJcblxyXG4jd2hhdFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yLXN0ZXAtNjAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IC4zcmVtIHNvbGlkIHZhcigtLXRlcnRpYXJ5LWNvbG9yLXN0ZXAtNzAwKTtcclxufVxyXG5cclxuI3doZXJlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250OiAyMHB4IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICNmNWY2Zjc7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ubWFyZ2luIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbi5iZy00IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMmY7XHJcbiAgICAvKiBCbGFjayBHcmF5ICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_animate_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate-scroll */ "./node_modules/ng-animate-scroll/fesm2015/ng-animate-scroll.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);




let QuienSoyComponent = class QuienSoyComponent {
    constructor(animateScrollService) {
        this.animateScrollService = animateScrollService;
        this.initView = false;
        this.initWho = false;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_3___default.a.init();
        setTimeout(() => {
            this.initView = true;
        }, 1000);
        setTimeout(() => {
            this.initWho = true;
        }, 1500);
    }
    navigateTo(id, duration) {
        this.animateScrollService.scrollToElement(id, duration);
    }
};
QuienSoyComponent.ctorParameters = () => [
    { type: ng_animate_scroll__WEBPACK_IMPORTED_MODULE_2__["NgAnimateScrollService"] }
];
QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quien-soy',
        template: __webpack_require__(/*! raw-loader!./quien-soy.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/componentes/quien-soy/quien-soy.component.css")]
    })
], QuienSoyComponent);



/***/ }),

/***/ "./src/app/componentes/registracion-dialog/registracion-dialog.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/registracion-dialog/registracion-dialog.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    display: inline;\r\n}\r\n\r\n#register {\r\n    background-color: var(--secondary-color-step-900);\r\n    margin-bottom: 1%;\r\n}\r\n\r\n#success {\r\n    margin-top: 2%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cmFjaW9uLWRpYWxvZy9yZWdpc3RyYWNpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3RyYWNpb24tZGlhbG9nL3JlZ2lzdHJhY2lvbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuI3JlZ2lzdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1zdGVwLTkwMCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuI3N1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/registracion-dialog/registracion-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/registracion-dialog/registracion-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistracionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistracionDialogComponent", function() { return RegistracionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/firebase-auth.service */ "./src/app/servicios/firebase-auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _snack_bar_template_snack_bar_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snack-bar-template/snack-bar-template.component */ "./src/app/componentes/snack-bar-template/snack-bar-template.component.ts");








let RegistracionDialogComponent = class RegistracionDialogComponent {
    constructor(snackBar, authService, router, dialogRef) {
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.processing = false;
        this.success = false;
        this.toggle = false;
        this.type = 'password';
    }
    get email() { return this.form.get('email'); }
    get pass() { return this.form.get('contraseña'); }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            contraseña: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    showPass() {
        this.toggle = !this.toggle;
        if (this.toggle) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    }
    register() {
        this.processing = true;
        this.authService.registerEmailUser(this.email.value, this.pass.value).
            then(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(1000).subscribe(() => {
                this.processing = false;
                this.success = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(1500).subscribe(() => {
                    this.dialogRef.close();
                    this.router.navigate(['/Login']);
                });
            });
        }, (err) => {
            this.snackBar.openFromComponent(_snack_bar_template_snack_bar_template_component__WEBPACK_IMPORTED_MODULE_7__["SnackBarTemplateComponent"], {
                data: {
                    error: err,
                    action: 'Cerrar'
                }
            });
        });
    }
};
RegistracionDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: src_app_servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
RegistracionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registracion-dialog',
        template: __webpack_require__(/*! raw-loader!./registracion-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/registracion-dialog/registracion-dialog.component.html"),
        styles: [__webpack_require__(/*! ./registracion-dialog.component.css */ "./src/app/componentes/registracion-dialog/registracion-dialog.component.css")]
    })
], RegistracionDialogComponent);



/***/ }),

/***/ "./src/app/componentes/registro/registro.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#decline {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n#accept {\r\n    background-color: rgb(0, 255, 0);\r\n    float: right;\r\n    color: white;\r\n}\r\n\r\n#termsAndConditions {\r\n    margin: 1% 2%;\r\n    background-color: var(--tertiary-color);\r\n    color: white;\r\n}\r\n\r\n#hint {\r\n    color: white;\r\n    font-size: .5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVjbGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNhY2NlcHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMCk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0ZXJtc0FuZENvbmRpdGlvbnMge1xyXG4gICAgbWFyZ2luOiAxJSAyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2hpbnQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAuNXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registracion_dialog_registracion_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registracion-dialog/registracion-dialog.component */ "./src/app/componentes/registracion-dialog/registracion-dialog.component.ts");





let RegistroComponent = class RegistroComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    decline() {
        this.router.navigate(['']);
    }
    accept() {
        const DIALOG_CONFIG = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        DIALOG_CONFIG.height = '45%';
        DIALOG_CONFIG.width = '60%';
        this.dialog.open(_registracion_dialog_registracion_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RegistracionDialogComponent"], DIALOG_CONFIG);
    }
};
RegistroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: __webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/componentes/registro/registro.component.css")]
    })
], RegistroComponent);



/***/ }),

/***/ "./src/app/componentes/snack-bar-template/snack-bar-template.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/snack-bar-template/snack-bar-template.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*\r\n{\r\n    background-color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc25hY2stYmFyLXRlbXBsYXRlL3NuYWNrLWJhci10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3NuYWNrLWJhci10ZW1wbGF0ZS9zbmFjay1iYXItdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIipcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/snack-bar-template/snack-bar-template.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/snack-bar-template/snack-bar-template.component.ts ***!
  \********************************************************************************/
/*! exports provided: SnackBarTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarTemplateComponent", function() { return SnackBarTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let SnackBarTemplateComponent = class SnackBarTemplateComponent {
    constructor(data, snackBarRef) {
        this.data = data;
        this.snackBarRef = snackBarRef;
    }
    ngOnInit() {
    }
};
SnackBarTemplateComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"] }
];
SnackBarTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-snack-bar-template',
        template: __webpack_require__(/*! raw-loader!./snack-bar-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/snack-bar-template/snack-bar-template.component.html"),
        styles: [__webpack_require__(/*! ./snack-bar-template.component.css */ "./src/app/componentes/snack-bar-template/snack-bar-template.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))
], SnackBarTemplateComponent);



/***/ }),

/***/ "./src/app/pipes/sanitizer.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/sanitizer.pipe.ts ***!
  \*****************************************/
/*! exports provided: SanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizerPipe", function() { return SanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizerPipe = class SanitizerPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
};
SanitizerPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizer'
    })
], SanitizerPipe);



/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sexo.pipe.ts ***!
  \************************************/
/*! exports provided: SexoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPipe", function() { return SexoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SexoPipe = class SexoPipe {
    transform(value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    }
};
SexoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sexo'
    })
], SexoPipe);



/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ruteando/ruteando.module.ts ***!
  \*********************************************/
/*! exports provided: RuteandoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteandoModule", function() { return RuteandoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../componentes/inicio/inicio.component */ "./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var _componentes_hi_lo_hi_lo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../componentes/hi-lo/hi-lo.component */ "./src/app/componentes/hi-lo/hi-lo.component.ts");


// importo del module principal


















// declaro donde quiero que se dirija
const MiRuteo = [
    { path: 'Jugadores', component: _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_17__["JugadoresListadoComponent"] },
    { path: '', component: _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_18__["InicioComponent"] },
    { path: 'Login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'Mapa', component: _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_16__["MapaDeGoogleComponent"] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_14__["QuienSoyComponent"] },
    { path: 'Registro', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__["RegistroComponent"] },
    { path: 'Principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"] },
    { path: 'Listado', component: _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_10__["ListadoComponent"] },
    { path: 'Paises', component: _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_15__["ListadoDePaisesComponent"] },
    {
        path: 'Juegos', component: _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_11__["JuegosComponent"], children: [{ path: '', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_13__["MenuCardComponent"] },
            { path: 'Adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__["AdivinaElNumeroComponent"] },
            { path: 'AdivinaMasListado', component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AdivinaMasListadoComponent"] },
            { path: 'AgilidadMasListado', component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_9__["AgilidadMasListadoComponent"] },
            { path: 'Agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_7__["AgilidadAritmeticaComponent"] },
            { path: 'HiLo', component: _componentes_hi_lo_hi_lo_component__WEBPACK_IMPORTED_MODULE_19__["HiLoComponent"] }]
    },
    { path: '**', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] },
    { path: 'error', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
let RuteandoModule = class RuteandoModule {
};
RuteandoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(MiRuteo, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled'
            })
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], RuteandoModule);



/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchivosJugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function() { return ArchivosJugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let ArchivosJugadoresService = class ArchivosJugadoresService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    traerJugadores(ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(data => {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, err => {
            console.log(err);
        });
    }
};
ArchivosJugadoresService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
ArchivosJugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ArchivosJugadoresService);



/***/ }),

/***/ "./src/app/servicios/firebase-auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/firebase-auth.service.ts ***!
  \****************************************************/
/*! exports provided: FirebaseAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function() { return FirebaseAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



let FirebaseAuthService = class FirebaseAuthService {
    constructor(afsAuth) {
        this.afsAuth = afsAuth;
    }
    loginEmailUser(email, password) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.signInWithEmailAndPassword(email, password).
                then(userData => resolve(userData), err => reject(err));
        });
    }
    logOut() {
        return this.afsAuth.auth.signOut();
    }
    registerEmailUser(email, passowrd) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.createUserWithEmailAndPassword(email, passowrd).
                then(userData => resolve(userData), err => reject(err));
        });
    }
};
FirebaseAuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
FirebaseAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseAuthService);



/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/juego-service.service.ts ***!
  \****************************************************/
/*! exports provided: JuegoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function() { return JuegoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");




let JuegoServiceService = class JuegoServiceService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    listar() {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
        })
            .catch(err => {
            console.log(err);
        });
        this.peticion
            .subscribe(data => {
            console.log("En listar");
            console.log(data);
        }, err => {
            console.info("error: ", err);
        });
        let miArray = new Array();
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 1", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Pepe", true));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 3", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 4", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 5", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 6", false));
        return miArray;
    }
    listarPromesa() {
        this.peticion
            .subscribe(data => {
            console.log("En listarPromesa");
            console.log(data);
        }, err => {
            console.log(err);
        });
        let promesa = new Promise((resolve, reject) => {
            let miArray = new Array();
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("PepePromesa", true));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 3", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 4", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 5", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    }
};
JuegoServiceService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__["MiHttpService"] }
];
JuegoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JuegoServiceService);



/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/jugadores.service.ts ***!
  \************************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");



let JugadoresService = class JugadoresService {
    //peticion:any;
    constructor(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    traertodos(ruta, filtro) {
        return this.miHttp.traerJugadores(ruta).then(data => {
            console.info("jugadores service", data);
            this.filtrado = data;
            let ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            this.filtrado = this.filtrado.filter(data => data.gano === ganador || filtro == "todos");
            return this.filtrado;
        })
            .catch(errror => {
            console.log("error");
            return this.filtrado;
        });
    }
};
JugadoresService.ctorParameters = () => [
    { type: _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["ArchivosJugadoresService"] }
];
JugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JugadoresService);



/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
  \******************************************************/
/*! exports provided: MiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiHttpService", function() { return MiHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);







let MiHttpService = class MiHttpService {
    constructor(http) {
        this.http = http;
    }
    httpGetP(url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    httpPostP(url, objeto) {
        return this.http
            .get(url)
            .subscribe(data => {
            console.log(data);
            return data;
        });
    }
    httpGetO(url) {
        return this.http.get(url)
            .map((res) => res.json())
            .catch((err) => rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.json().error || 'Server error'));
    }
    extractData(res) {
        return res.json() || {};
    }
    handleError(error) {
        return error;
    }
};
MiHttpService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
MiHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MiHttpService);



/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/paises.service.ts ***!
  \*********************************************/
/*! exports provided: PaisesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesService", function() { return PaisesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let PaisesService = class PaisesService {
    constructor(miHttp) {
        this.miHttp = miHttp;
    }
    listar() {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
            return data;
        })
            .catch(err => {
            console.log(err);
            return null;
        });
        //return null;
    }
};
PaisesService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
PaisesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PaisesService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Facu\Sala-de-Juegos-v8\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
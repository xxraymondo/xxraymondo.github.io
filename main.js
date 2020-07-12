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

/***/ "./src/app/all-trend-movies/all-trend-movies.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/all-trend-movies/all-trend-movies.component.ts ***!
  \****************************************************************/
/*! exports provided: AllTrendMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTrendMoviesComponent", function() { return AllTrendMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AllTrendMoviesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", i_r3.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImg + i_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r3.name, "", i_r3.original_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r3.vote_average, " ");
} }
function AllTrendMoviesComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", i_r4.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getImg + i_r4.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r4.name, "", i_r4.original_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4.popularity, " ");
} }
function AllTrendMoviesComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", i_r5.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImg + i_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r5.name, "", i_r5.original_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5.vote_average, " ");
} }
class AllTrendMoviesComponent {
    constructor(_MoviesService) {
        this._MoviesService = _MoviesService;
        this.movies = [];
        this.series = [];
        this.persons = [];
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.voting = [];
        this.voteFrom100 = [];
        this.movieId = [];
        _MoviesService.getMovieId(this.movieId).subscribe((data) => {
            for (let i = 0; data.length; i++) {
                this.movieId.push(data.result.id[i]);
            }
        });
        _MoviesService.getTrendingMovies().subscribe((data) => {
            this.movies = data.results;
        }, (error) => { console.log(error); });
        _MoviesService.getTrendingPersons().subscribe((data) => {
            this.persons = data.results;
        }, (error) => { console.log(error); });
        _MoviesService.getTrendingSeries().subscribe((data) => {
            this.series = data.results;
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
}
AllTrendMoviesComponent.ɵfac = function AllTrendMoviesComponent_Factory(t) { return new (t || AllTrendMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
AllTrendMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllTrendMoviesComponent, selectors: [["app-all-trend-movies"]], decls: 27, vars: 3, consts: [[1, "mainImg", "w-100"], [1, "overlay", "w-100", "h-100", "d-flex", "flex-column", "align-items-center", "justify-content-center"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "w-50", "my-3", "form-control", "addShadow", "rounded-pill", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "rounded-pill", "my-2", "my-sm-0"], [1, "position-absolute", "arrow"], [1, "fa", "fa-chevron-down"], ["id", "trending", 1, "container", "borderContainer"], [1, "py-4"], [1, "scrollmenu"], ["class", "col-md-2    main", 4, "ngFor", "ngForOf"], [1, "col-md-2", "main"], [1, "p-0", "theData", "rounded"], [1, "p-0", 3, "href"], [1, "containingData", "w-100", "myRounded", 3, "src"], [1, "w-100", "p-1", "main"], [1, "vote", "rounded", "text-center", "px-2", "py-2"], [1, "bg-danger", 3, "href"]], template: function AllTrendMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "welcome to movifiy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Millions of movies, TV shows and people to discover. Explore now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllTrendMoviesComponent_div_16_Template, 8, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AllTrendMoviesComponent_div_21_Template, 8, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AllTrendMoviesComponent_div_26_Template, 8, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.persons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.series);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2A403C;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #04BF8A;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #04D99D;\n}\n\ndiv.scrollmenu[_ngcontent-%COMP%] {\n  overflow: auto;\n  white-space: nowrap;\n}\n\ndiv.scrollmenu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n  z-index: 10;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  bottom: 10px;\n}\n\n.arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale3d(1.2, 1.2);\n}\n\n.borderContainer[_ngcontent-%COMP%] {\n  border-right: 1px solid #04d99d11;\n  box-shadow: 2px 0px 15px -4px #04d99d34, -2px 0 8px -4px #04d99d34;\n  border-left: 1px solid #04d99d11;\n}\n\n.mainImg[_ngcontent-%COMP%] {\n  background-image: url('d38rnod-2f6cb815-011d-47a8-bb9f-448c20f994c9.jpg');\n  background-repeat: no-repeat;\n  height: 100vh;\n  background-position: center center;\n  width: 100%;\n  background-size: cover;\n}\n\n.theData[_ngcontent-%COMP%]:hover   .containingData[_ngcontent-%COMP%] {\n  text-decoration: none;\n  box-shadow: 0 0px 3px 0.5px #04d99dc2, 0 0px 3px 0.5px #04d99dc2;\n}\n\n.theData[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: #04D99D;\n  width: 100%;\n  position: relative;\n  white-space: normal;\n  display: flex;\n  align-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.vote[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 25px;\n  margin: auto;\n  position: absolute;\n  color: #04D99D;\n  background-color: #2A403C;\n  z-index: 140;\n}\n\n@media only screen and (max-width: 1100) {\n  .vote[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(12, 12, 12, 0.715);\n}\n\n.overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXRyZW5kLW1vdmllcy9hbGwtdHJlbmQtbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1DO0VBQ0csV0FBQTtBQUxKOztBQVFDO0VBQ0csbUJBVk87QUFLWDs7QUFRQztFQUNHLG1CQVpHO0FBT1A7O0FBUUM7RUFDRyxtQkFmTTtBQVVWOztBQVFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFMSjs7QUFPQTtFQUNJLFlBQUE7QUFKSjs7QUFNQTtFQUNDLGlCQUFBO0FBSEQ7O0FBS0E7RUFDQSw0QkFBQTtBQUZBOztBQUlBO0VBQ0ksaUNBQUE7RUFDQSxrRUFBQTtFQUVBLGdDQUFBO0FBRko7O0FBSUE7RUFDSSx5RUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGdFQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUVBO0VBQUksY0E5RE07RUErRE4sV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBNUVNO0VBNkVOLHlCQWhGTztFQWlGUCxZQUFBO0FBRUo7O0FBQ0E7RUFDSTtJQUNJLFlBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0kseUNBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9hbGwtdHJlbmQtbW92aWVzL2FsbC10cmVuZC1tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFya2VzdENvbG9yOiMwMTIzMjY7XHJcbiRkYXJrQ29sb3I6IzJBNDAzQztcclxuJG1lZHVpbTojMEY4QzY5O1xyXG4kbGlnaHQ6IzA0QkY4QTtcclxuJGxpZ2h0ZXN0OiMwNEQ5OUQ7XHJcbiRzaGFkb3c6IzA0ZDk5ZGMyO1xyXG4gOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogJGRhcmtDb2xvcjtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHRlc3Q7XHJcbn1cclxuXHJcbmRpdi5zY3JvbGxtZW51IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuZGl2LnNjcm9sbG1lbnUgZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4uYXJyb3d7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbn1cclxuLmFycm93IGl7XHJcbiBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uaW1nOmhvdmVyIGltZ3tcclxudHJhbnNmb3JtOiBzY2FsZTNkKDEuMiwxLjIpO1xyXG59XHJcbi5ib3JkZXJDb250YWluZXJ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDRkOTlkMTE7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDE1cHggLTRweCAjMDRkOTlkMzQsIC0ycHggMCA4cHggLTRweCAjMDRkOTlkMzQ7XHJcblxyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDRkOTlkMTEgO1xyXG59XHJcbi5tYWluSW1nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZDM4cm5vZC0yZjZjYjgxNS0wMTFkLTQ3YTgtYmI5Zi00NDhjMjBmOTk0YzkuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi50aGVEYXRhOmhvdmVyIC5jb250YWluaW5nRGF0YXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCAwLjVweCAkc2hhZG93LCAwIDBweCAzcHggMC41cHggJHNoYWRvdztcclxuXHJcbn1cclxuLnRoZURhdGEgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5oNiB7Y29sb3I6ICRsaWdodGVzdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udm90ZSB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAkbGlnaHRlc3Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya0NvbG9yO1xyXG4gICAgei1pbmRleDogMTQwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDApIHtcclxuICAgIC52b3RlIHtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIDAuNzE1KTtcclxufVxyXG4ub3ZlcmxheSBoMXtcclxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllTrendMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-trend-movies',
                templateUrl: './all-trend-movies.component.html',
                styleUrls: ['./all-trend-movies.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _all_trend_movies_all_trend_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-trend-movies/all-trend-movies.component */ "./src/app/all-trend-movies/all-trend-movies.component.ts");
/* harmony import */ var _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daliy-trending-movies/daliy-trending-movies.component */ "./src/app/daliy-trending-movies/daliy-trending-movies.component.ts");
/* harmony import */ var _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weekly-trending-movies/weekly-trending-movies.component */ "./src/app/weekly-trending-movies/weekly-trending-movies.component.ts");
/* harmony import */ var _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekly-trending-series/weekly-trending-series.component */ "./src/app/weekly-trending-series/weekly-trending-series.component.ts");








const routes = [
    { path: "", component: _all_trend_movies_all_trend_movies_component__WEBPACK_IMPORTED_MODULE_2__["AllTrendMoviesComponent"] },
    { path: "home", component: _all_trend_movies_all_trend_movies_component__WEBPACK_IMPORTED_MODULE_2__["AllTrendMoviesComponent"] },
    { path: "DTmovies", component: _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_3__["DaliyTrendingMoviesComponent"] },
    { path: "WTmovies", component: _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_4__["WeeklyTrendingMoviesComponent"] },
    { path: "WTseries", component: _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_5__["WeeklyTrendingSeriesComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    //  title = 'angularProject';
    ngOnInit() {
        let scrollTop = jquery__WEBPACK_IMPORTED_MODULE_1__("#trending").offset().top;
        console.log(scrollTop);
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
            let scroll = jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop();
            console.log(scroll);
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(".arrow").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("html,body").animate({ scrollTop: scrollTop }, 700);
            jquery__WEBPACK_IMPORTED_MODULE_1__("nav").slideUp(700);
        });
        window.addEventListener("mousemove", function (e) {
            if (e.clientY <= 64) {
                jquery__WEBPACK_IMPORTED_MODULE_1__("nav").slideDown(300);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weekly_movies_weekly_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weekly-movies/weekly-movies.component */ "./src/app/weekly-movies/weekly-movies.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _all_trend_movies_all_trend_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-trend-movies/all-trend-movies.component */ "./src/app/all-trend-movies/all-trend-movies.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./daliy-trending-movies/daliy-trending-movies.component */ "./src/app/daliy-trending-movies/daliy-trending-movies.component.ts");
/* harmony import */ var _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weekly-trending-movies/weekly-trending-movies.component */ "./src/app/weekly-trending-movies/weekly-trending-movies.component.ts");
/* harmony import */ var _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weekly-trending-series/weekly-trending-series.component */ "./src/app/weekly-trending-series/weekly-trending-series.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _weekly_movies_weekly_movies_component__WEBPACK_IMPORTED_MODULE_4__["WeeklyMoviesComponent"],
        _all_trend_movies_all_trend_movies_component__WEBPACK_IMPORTED_MODULE_6__["AllTrendMoviesComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_8__["DaliyTrendingMoviesComponent"],
        _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_9__["WeeklyTrendingMoviesComponent"],
        _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_10__["WeeklyTrendingSeriesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _weekly_movies_weekly_movies_component__WEBPACK_IMPORTED_MODULE_4__["WeeklyMoviesComponent"],
                    _all_trend_movies_all_trend_movies_component__WEBPACK_IMPORTED_MODULE_6__["AllTrendMoviesComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_8__["DaliyTrendingMoviesComponent"],
                    _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_9__["WeeklyTrendingMoviesComponent"],
                    _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_10__["WeeklyTrendingSeriesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/daliy-trending-movies/daliy-trending-movies.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/daliy-trending-movies/daliy-trending-movies.component.ts ***!
  \**************************************************************************/
/*! exports provided: DaliyTrendingMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaliyTrendingMoviesComponent", function() { return DaliyTrendingMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DaliyTrendingMoviesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImg + i_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.vote_average);
} }
class DaliyTrendingMoviesComponent {
    constructor(_MoviesService) {
        this._MoviesService = _MoviesService;
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.DailyMovies = [];
        _MoviesService.getDaliyTrendingMovies().subscribe((data) => {
            this.DailyMovies = data.results;
            console.log(this.DailyMovies);
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
}
DaliyTrendingMoviesComponent.ɵfac = function DaliyTrendingMoviesComponent_Factory(t) { return new (t || DaliyTrendingMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
DaliyTrendingMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DaliyTrendingMoviesComponent, selectors: [["app-daliy-trending-movies"]], decls: 7, vars: 1, consts: [[1, "dt-mainImg"], [1, "overlay"], [1, "container", "my-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "position-relative"], [1, "w-100", "myRounded", 3, "src"], [1, "theVote", "rounded", "position-absolute"]], template: function DaliyTrendingMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Daily trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DaliyTrendingMoviesComponent_div_6_Template, 7, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DailyMovies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".dt-mainImg[_ngcontent-%COMP%] {\n  background-image: url('d38rnod-2f6cb815-011d-47a8-bb9f-448c20f994c9.jpg');\n  background-position: center center;\n  background-size: cover;\n  height: 40vh;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(12, 12, 12, 0.715);\n  height: 100%;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFsaXktdHJlbmRpbmctbW92aWVzL2RhbGl5LXRyZW5kaW5nLW1vdmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlFQUFBO0VBQ0Esa0NBQUE7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBQ0w7O0FBQ0E7RUFDSSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9kYWxpeS10cmVuZGluZy1tb3ZpZXMvZGFsaXktdHJlbmRpbmctbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR0LW1haW5JbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2QzOHJub2QtMmY2Y2I4MTUtMDExZC00N2E4LWJiOWYtNDQ4YzIwZjk5NGM5LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxufVxyXG4ub3ZlcmxheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMC43MTUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaliyTrendingMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daliy-trending-movies',
                templateUrl: './daliy-trending-movies.component.html',
                styleUrls: ['./daliy-trending-movies.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movies.service.ts":
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class MoviesService {
    constructor(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    getTrendingMovies() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getDaliyTrendingMovies() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getWeeklyTrendingMovies() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getTrendingSeries() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getTrendingPersons() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getMovieId(id) {
        return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=cd8fd77939ca02736dde3389204808fc&language=en-US`);
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 55, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "border-bottom", "fixed-top"], [1, "container-fluid"], ["routerLink", "home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", "d-flex"], [1, "navbar-nav"], [1, "nav-item", "px-2"], ["routerLink", "home", 1, "nav-link", "rounded", "px-1", "border"], [1, "sr-only"], [1, "position-absolute", "rounded"], ["href", "#", 1, "nav-link", "border", "rounded", "px-1"], [1, "list-group", "bg-light", "style-none"], ["routerLink", "DTmovies"], [1, "list-group-item", "py-1", "px-2"], ["routerLink", "WTmovies"], ["routerLink", "DTseries"], ["routerLink", "WTseries"], [1, "list-group-item", "py-1", "px-5"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "movifiy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Trending Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Daily Trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Weekly Trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Trending Series ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Daily Trending series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Weekly Trending series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Popular Persons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "gfg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "gfg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "gfg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "gfg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  border-bottom: black solid 1px !important;\n  z-index: 1000;\n  background-color: rgba(253, 253, 253, 0.747);\n  box-shadow: 0 0.5px 3px 0 rgba(60, 64, 67, 0.302), 0 0.5px 5px 1px rgba(60, 64, 67, 0.149);\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n  background-color: #F8F9FA;\n}\n\n.addShadow[_ngcontent-%COMP%]:hover {\n  background-color: #fafbfd;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover   .list-group[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.style-none[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.myInput[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 30px;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0VBQ0EsMEZBQUE7QUFDSjs7QUFFQTtFQUNJLHNGQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esc0ZBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUVBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAxcHghaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAyNTMsIDI1MywgMC43NDcpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVweCAzcHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMzAyKSwgMCAwLjVweCA1cHggMXB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNDkpXHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMzAyKSwgMCAxcHggM3B4IDFweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTQ5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XHJcbn1cclxuXHJcbi5hZGRTaGFkb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmZDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zMDIpLCAwIDFweCAzcHggMXB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNDkpO1xyXG59XHJcbi5saXN0LWdyb3Vwe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmF2LWl0ZW06aG92ZXIgLmxpc3QtZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcbn1cclxuLnN0eWxlLW5vbmV7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5teUlucHV0IHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/weekly-movies/weekly-movies.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/weekly-movies/weekly-movies.component.ts ***!
  \**********************************************************/
/*! exports provided: WeeklyMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyMoviesComponent", function() { return WeeklyMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WeeklyMoviesComponent {
    constructor() { }
    ngOnInit() {
    }
}
WeeklyMoviesComponent.ɵfac = function WeeklyMoviesComponent_Factory(t) { return new (t || WeeklyMoviesComponent)(); };
WeeklyMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeeklyMoviesComponent, selectors: [["app-weekly-movies"]], decls: 2, vars: 0, template: function WeeklyMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "weekly-movies works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlZWtseS1tb3ZpZXMvd2Vla2x5LW1vdmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeeklyMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weekly-movies',
                templateUrl: './weekly-movies.component.html',
                styleUrls: ['./weekly-movies.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/weekly-trending-movies/weekly-trending-movies.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/weekly-trending-movies/weekly-trending-movies.component.ts ***!
  \****************************************************************************/
/*! exports provided: WeeklyTrendingMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyTrendingMoviesComponent", function() { return WeeklyTrendingMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function WeeklyTrendingMoviesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImg + i_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.vote_average);
} }
class WeeklyTrendingMoviesComponent {
    constructor(_MoviesService) {
        this._MoviesService = _MoviesService;
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.WeeklyTmovies = [];
        _MoviesService.getWeeklyTrendingMovies().subscribe((data) => {
            this.WeeklyTmovies = data.results;
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
}
WeeklyTrendingMoviesComponent.ɵfac = function WeeklyTrendingMoviesComponent_Factory(t) { return new (t || WeeklyTrendingMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
WeeklyTrendingMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeeklyTrendingMoviesComponent, selectors: [["app-weekly-trending-movies"]], decls: 7, vars: 1, consts: [[1, "dt-mainImg"], [1, "overlay"], [1, "container", "my-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "position-relative"], [1, "w-100", "myRounded", 3, "src"], [1, "theVote", "rounded", "position-absolute"]], template: function WeeklyTrendingMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our weekly trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeeklyTrendingMoviesComponent_div_6_Template, 7, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.WeeklyTmovies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".dt-mainImg[_ngcontent-%COMP%] {\n  background-image: url('d38rnod-2f6cb815-011d-47a8-bb9f-448c20f994c9.jpg');\n  background-position: center center;\n  background-size: cover;\n  height: 40vh;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(12, 12, 12, 0.715);\n  height: 100%;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vla2x5LXRyZW5kaW5nLW1vdmllcy93ZWVrbHktdHJlbmRpbmctbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUVBQUE7RUFDQSxrQ0FBQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFDTDs7QUFDQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3dlZWtseS10cmVuZGluZy1tb3ZpZXMvd2Vla2x5LXRyZW5kaW5nLW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kdC1tYWluSW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9kMzhybm9kLTJmNmNiODE1LTAxMWQtNDdhOC1iYjlmLTQ0OGMyMGY5OTRjOS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIDAuNzE1KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeeklyTrendingMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weekly-trending-movies',
                templateUrl: './weekly-trending-movies.component.html',
                styleUrls: ['./weekly-trending-movies.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/weekly-trending-series/weekly-trending-series.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/weekly-trending-series/weekly-trending-series.component.ts ***!
  \****************************************************************************/
/*! exports provided: WeeklyTrendingSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyTrendingSeriesComponent", function() { return WeeklyTrendingSeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function WeeklyTrendingSeriesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImg + i_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.vote_average);
} }
class WeeklyTrendingSeriesComponent {
    constructor(_MoviesService) {
        this.WeeklySeries = [];
        this.getImg = "https://image.tmdb.org/t/p/w500";
        _MoviesService.getWeeklyTrendingMovies().subscribe((data) => {
            this.WeeklySeries = data.results;
            console.log(this.WeeklySeries);
        }, (error) => { console.log(error); });
    }
    ngOnInit() {
    }
}
WeeklyTrendingSeriesComponent.ɵfac = function WeeklyTrendingSeriesComponent_Factory(t) { return new (t || WeeklyTrendingSeriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
WeeklyTrendingSeriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeeklyTrendingSeriesComponent, selectors: [["app-weekly-trending-series"]], decls: 5, vars: 1, consts: [[1, "container", "myMt"], [1, "myMt"], [1, "row"], ["class", "col-md-2  ", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "p-0", "theData", "rounded"], [1, "containingData", "w-100", "myRounded", 3, "src"], [1, "theVote", "rounded", "position-absolute"]], template: function WeeklyTrendingSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our weekly Trending series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeeklyTrendingSeriesComponent_div_4_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.WeeklySeries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".theData[_ngcontent-%COMP%]:hover   .containingData[_ngcontent-%COMP%] {\n  text-decoration: none;\n  box-shadow: 0 0px 3px 0.5px #04d99dc2, 0 0px 3px 0.5px #04d99dc2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vla2x5LXRyZW5kaW5nLXNlcmllcy93ZWVrbHktdHJlbmRpbmctc2VyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0kscUJBQUE7RUFDQSxnRUFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvd2Vla2x5LXRyZW5kaW5nLXNlcmllcy93ZWVrbHktdHJlbmRpbmctc2VyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcmtlc3RDb2xvcjojMDEyMzI2O1xyXG4kZGFya0NvbG9yOiMyQTQwM0M7XHJcbiRtZWR1aW06IzBGOEM2OTtcclxuJGxpZ2h0OiMwNEJGOEE7XHJcbiRsaWdodGVzdDojMDREOTlEO1xyXG4kc2hhZG93OiMwNGQ5OWRjMjtcclxuXHJcbi50aGVEYXRhOmhvdmVyIC5jb250YWluaW5nRGF0YXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCAwLjVweCAkc2hhZG93LCAwIDBweCAzcHggMC41cHggJHNoYWRvdztcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeeklyTrendingSeriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weekly-trending-series',
                templateUrl: './weekly-trending-series.component.html',
                styleUrls: ['./weekly-trending-series.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\front end\angularProject - Copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
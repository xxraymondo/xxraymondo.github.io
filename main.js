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

/***/ "./src/app/all-trending/all-trending.component.ts":
/*!********************************************************!*\
  !*** ./src/app/all-trending/all-trending.component.ts ***!
  \********************************************************/
/*! exports provided: AllTrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTrendingComponent", function() { return AllTrendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AllTrendingComponent_div_26_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.getImg + i_r4.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllTrendingComponent_div_26_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
const _c0 = function (a1) { return ["/moviedetails", a1]; };
function AllTrendingComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllTrendingComponent_div_26_img_3_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllTrendingComponent_div_26_ng_template_4_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, i_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.poster_path != null)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r4.name, "", i_r4.original_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4.vote_average, " ");
} }
function AllTrendingComponent_div_31_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.getImg + i_r9.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllTrendingComponent_div_31_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
const _c1 = function (a1) { return ["/tvdetails", a1]; };
function AllTrendingComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllTrendingComponent_div_31_img_3_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllTrendingComponent_div_31_ng_template_4_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, i_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r9.poster_path != null)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r9.name, "", i_r9.original_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r9.vote_average, " ");
} }
function AllTrendingComponent_div_36_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.getImg + i_r14.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllTrendingComponent_div_36_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
const _c2 = function (a1) { return ["/persondetails", a1]; };
function AllTrendingComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllTrendingComponent_div_36_img_3_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllTrendingComponent_div_36_ng_template_4_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.$implicit;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, i_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r14.profile_path != null)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r14.name, "", i_r14.original_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r14.popularity, " ");
} }
const _c3 = function (a1) { return ["/Search", a1]; };
class AllTrendingComponent {
    constructor(_MoviesService) {
        this._MoviesService = _MoviesService;
        this.value = '';
        this.movies = [];
        this.series = [];
        this.persons = [];
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.voting = [];
        this.voteFrom100 = [];
        this.movieId = [];
        this.valueAfter = this.value;
        console.log(this.valueAfter);
        _MoviesService.getSearchResult(this.valueAfter).subscribe((data) => {
            console.log(data);
        });
        _MoviesService.getTrendingMovies().subscribe((data) => {
            this.movies = data.results;
            console.log(this.movies);
        }, (error) => { console.log(error); });
        _MoviesService.getTrendingPersons().subscribe((data) => {
            this.persons = data.results;
        }, (error) => { console.log(error); });
        _MoviesService.getTrendingSeries().subscribe((data) => {
            this.series = data.results;
            console.log(this.series);
        }, (error) => {
            console.log(error);
        });
    }
    update(value) {
        this.value = value;
        console.log(this.value);
    }
    ngOnInit() {
        let arrow = document.getElementById("arrow");
        let trendingScroll = jquery__WEBPACK_IMPORTED_MODULE_1__("#trending").offset().top;
        arrow.addEventListener("click", function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("html,body").animate({ scrollTop: trendingScroll }, 500);
            jquery__WEBPACK_IMPORTED_MODULE_1__("nav").slideUp(500);
        });
        window.addEventListener("mousemove", function (e) {
            if (e.clientY < 144) {
                jquery__WEBPACK_IMPORTED_MODULE_1__("nav").slideDown(500);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".loading").slideUp(800, function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("body").css("overflow", "auto");
            });
        });
    }
}
AllTrendingComponent.ɵfac = function AllTrendingComponent_Factory(t) { return new (t || AllTrendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
AllTrendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllTrendingComponent, selectors: [["app-all-trending"]], decls: 37, vars: 6, consts: [[1, "loading"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "sk-chase"], [1, "sk-chase-dot"], [1, "mainImg", "dt-mainImg", "w-100"], ["id", "overlay", 1, "w-100", "h-100", "d-flex", "flex-column", "align-items-center", "justify-content-center"], ["placeholder", "search here ...", 1, "form-control", "inputBox", 3, "keyup.enter", "blur"], ["box", ""], ["id", "ggg", 1, "gradient-button", "gradient-button-4", 3, "routerLink"], ["id", "arrow", 1, "position-absolute"], [1, "fa", "fa-chevron-down"], ["id", "trending", 1, "container", "borderContainer"], [1, "py-4"], [1, "scrollmenu"], ["class", "col-md-2    main", 4, "ngFor", "ngForOf"], [1, "col-md-2", "main"], [1, "p-0", "theData", "rounded"], [1, "p-0", 3, "routerLink"], ["class", "containingData w-100 myRounded", 3, "src", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "w-100", "p-1", "main"], [1, "vote", "rounded", "text-center", "px-2", "py-2"], [1, "containingData", "w-100", "myRounded", 3, "src"], ["src", "../../assets/img/download.png", 1, "containingData", "nullImg", "w-100", "myRounded"], [3, "routerLink"], [1, "", 3, "routerLink"]], template: function AllTrendingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "welcome to movifiy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Millions of movies, TV shows and people to discover. Explore now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AllTrendingComponent_Template_input_keyup_enter_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.update(_r0.value); })("blur", function AllTrendingComponent_Template_input_blur_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.update(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AllTrendingComponent_div_26_Template, 10, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "trending series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AllTrendingComponent_div_31_Template, 10, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "trending persons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AllTrendingComponent_div_36_Template, 10, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, _r0.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.series);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.persons);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2072dd;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #6BA5F2;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #6d9ddb;\n}\n\ndiv.scrollmenu[_ngcontent-%COMP%] {\n  overflow: auto;\n  white-space: nowrap;\n}\n\ndiv.scrollmenu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n  z-index: 10;\n}\n\n#arrow[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  bottom: 10px;\n}\n\n.img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale3d(1.2, 1.2);\n}\n\n.borderContainer[_ngcontent-%COMP%] {\n  border-right: 1px solid #04d99d11;\n  box-shadow: 2px 0px 15px -4px #04d99d34, -2px 0 8px -4px #04d99d34;\n  border-left: 1px solid #04d99d11;\n}\n\n.mainImg[_ngcontent-%COMP%] {\n  background-image: url('d38rnod-2f6cb815-011d-47a8-bb9f-448c20f994c9.jpg');\n  background-repeat: no-repeat;\n  height: 100vh;\n  background-position: center center;\n  width: 100%;\n  background-size: cover;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: #6d9ddb;\n  width: 100%;\n  position: relative;\n  white-space: normal;\n  display: flex;\n  align-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.vote[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 25px;\n  margin: auto;\n  position: absolute;\n  color: #6d9ddb;\n  background-color: #2072dd;\n  z-index: 140;\n}\n\n@media only screen and (max-width: 1100) {\n  .vote[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n}\n\n@media only screen and (max-width: 766px) {\n  .nullImg[_ngcontent-%COMP%] {\n    width: 480px !important;\n  }\n}\n\n#overlay[_ngcontent-%COMP%] {\n  background-color: rgba(12, 12, 12, 0.499);\n}\n\n.overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n}\n\n.loading[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  background-color: #daedff;\n  z-index: 9999;\n}\n\n.inputBox[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.gradient-button[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 15px;\n  padding: 10px 5px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: #FFF;\n  box-shadow: 0 0 20px #eee;\n  border-radius: 10px;\n  width: 150px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  cursor: pointer;\n  display: inline-block;\n  border-radius: 25px;\n}\n\n.gradient-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  margin: 8px 10px 12px;\n}\n\n.gradient-button-4[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #6BA5F2 0%, #2372D9 51%, #6BA5F2 100%);\n}\n\n.gradient-button-4[_ngcontent-%COMP%]:hover {\n  background-position: right center;\n}\n\n.sk-chase[_ngcontent-%COMP%] {\n  margin-top: 300px;\n  width: 100px;\n  height: 100px;\n  position: relative;\n  animation: sk-chase 2.5s infinite linear both;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  animation: sk-chase-dot 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 25%;\n  height: 25%;\n  background-color: #6BA5F2;\n  border-radius: 100%;\n  animation: sk-chase-dot-before 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -1.1s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -1s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.9s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.8s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.7s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.6s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(1):before {\n  animation-delay: -1.1s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(2):before {\n  animation-delay: -1s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(3):before {\n  animation-delay: -0.9s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(4):before {\n  animation-delay: -0.8s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(5):before {\n  animation-delay: -0.7s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(6):before {\n  animation-delay: -0.6s;\n}\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  .inputBox[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n\n  .overlay[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  .darkMode[_ngcontent-%COMP%] {\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXRyZW5kaW5nL2FsbC10cmVuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQztFQUNHLFdBQUE7QUFMSjs7QUFRQztFQUNHLG1CQVZPO0FBS1g7O0FBUUM7RUFDRyxtQkFaRztBQU9QOztBQVFDO0VBQ0csbUJBZk07QUFVVjs7QUFRQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7QUFMRDs7QUFPQTtFQUNBLDRCQUFBO0FBSkE7O0FBTUE7RUFDSSxpQ0FBQTtFQUNBLGtFQUFBO0VBRUEsZ0NBQUE7QUFKSjs7QUFNQTtFQUNJLHlFQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNQTtFQUFJLGNBdERNO0VBdUROLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXBFTTtFQXFFTix5QkF4RU87RUF5RVAsWUFBQTtBQUZKOztBQUtBO0VBQ0k7SUFDSSxZQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNBO0lBQ0ksdUJBQUE7RUFIRjtBQUNGOztBQUtBO0VBQ0kseUNBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBS0E7RUFDSSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQU1BO0VBQ0ksVUFBQTtBQUhKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxxREFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBSUE7RUFDSSwwRUFBQTtFQUNBLHFCQUFBO0FBREo7O0FBR0E7RUFBb0Isa0ZBQUE7QUFDcEI7O0FBQUE7RUFBMkIsaUNBQUE7QUFJM0I7O0FBSEE7RUFDQyxpQkFBQTtFQUNHLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQU1KOztBQUZBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0RBQUE7QUFLQTs7QUFGQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkF6Sk87RUEwSlAsbUJBQUE7RUFDQSwyREFBQTtBQUtBOztBQUZBO0VBQTZCLHNCQUFBO0FBTTdCOztBQUxBO0VBQTZCLG9CQUFBO0FBUzdCOztBQVJBO0VBQTZCLHNCQUFBO0FBWTdCOztBQVhBO0VBQTZCLHNCQUFBO0FBZTdCOztBQWRBO0VBQTZCLHNCQUFBO0FBa0I3Qjs7QUFqQkE7RUFBNkIsc0JBQUE7QUFxQjdCOztBQXBCQTtFQUFvQyxzQkFBQTtBQXdCcEM7O0FBdkJBO0VBQW9DLG9CQUFBO0FBMkJwQzs7QUExQkE7RUFBb0Msc0JBQUE7QUE4QnBDOztBQTdCQTtFQUFvQyxzQkFBQTtBQWlDcEM7O0FBaENBO0VBQW9DLHNCQUFBO0FBb0NwQzs7QUFuQ0E7RUFBb0Msc0JBQUE7QUF1Q3BDOztBQXJDQTtFQUNBO0lBQU8seUJBQUE7RUF5Q0w7QUFDRjs7QUF2Q0E7RUFDQTtJQUFZLHlCQUFBO0VBMENWO0FBQ0Y7O0FBeENBO0VBQ0E7SUFDRSxxQkFBQTtFQTBDQTtFQXpDQTtJQUNBLG1CQUFBO0VBMkNBO0FBQ0Y7O0FBekNBO0VBQ0k7SUFDSSxVQUFBO0VBMkNOOztFQXpDRTtJQUNJLGtCQUFBO0VBNENOOztFQTFDRTtJQUNJLGlCQUFBO0VBNkNOOztFQTNDRTtJQUNJLGlCQUFBO0VBOENOOztFQTVDRTtJQUNJLFdBQUE7RUErQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FsbC10cmVuZGluZy9hbGwtdHJlbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFya2VzdENvbG9yOiNGMkYyRjI7XHJcbiRkYXJrQ29sb3I6IzIwNzJkZDtcclxuJG1lZHVpbTojMjM3MkQ5O1xyXG4kbGlnaHQ6IzZCQTVGMjtcclxuJGxpZ2h0ZXN0OiM2ZDlkZGI7XHJcbiRzaGFkb3c6Izk0YmRmMmM0O1xyXG4gOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogJGRhcmtDb2xvcjtcclxufVxyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0O1xyXG59XHJcblxyXG4gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHRlc3Q7XHJcbn1cclxuXHJcbmRpdi5zY3JvbGxtZW51IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuZGl2LnNjcm9sbG1lbnUgZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuI2Fycm93e1xyXG4gZm9udC1zaXplOiAxLjVyZW07XHJcbiBib3R0b206IDEwcHg7XHJcbn1cclxuLmltZzpob3ZlciBpbWd7XHJcbnRyYW5zZm9ybTogc2NhbGUzZCgxLjIsMS4yKTtcclxufVxyXG4uYm9yZGVyQ29udGFpbmVye1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzA0ZDk5ZDExO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAxNXB4IC00cHggIzA0ZDk5ZDM0LCAtMnB4IDAgOHB4IC00cHggIzA0ZDk5ZDM0O1xyXG5cclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzA0ZDk5ZDExIDtcclxufVxyXG4ubWFpbkltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2QzOHJub2QtMmY2Y2I4MTUtMDExZC00N2E4LWJiOWYtNDQ4YzIwZjk5NGM5LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuaDYge2NvbG9yOiAkbGlnaHRlc3Q7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnZvdGUge1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogJGxpZ2h0ZXN0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtDb2xvcjtcclxuICAgIHotaW5kZXg6IDE0MDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwKSB7XHJcbiAgICAudm90ZSB7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NnB4KSB7XHJcbi5udWxsSW1ne1xyXG4gICAgd2lkdGg6IDQ4MHB4IWltcG9ydGFudDtcclxufVxyXG4gIH1cclxuI292ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIDAuNDk5KTtcclxuXHJcbn1cclxuLm92ZXJsYXkgaDF7XHJcbiAgICBmb250LXNpemU6IDQuNXJlbTtcclxufVxyXG4ubG9hZGluZ3tcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWVkZmY7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4uaW5wdXRCb3h7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcbi5ncmFkaWVudC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4uZ3JhZGllbnQtYnV0dG9uOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICBtYXJnaW46IDhweCAxMHB4IDEycHg7XHJcbn1cclxuLmdyYWRpZW50LWJ1dHRvbi00IHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2QkE1RjIgMCUsICMyMzcyRDkgNTElLCAjNkJBNUYyIDEwMCUpfVxyXG4uZ3JhZGllbnQtYnV0dG9uLTQ6aG92ZXIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7IH1cclxuLnNrLWNoYXNlIHtcclxuIG1hcmdpbi10b3A6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxuICB9XHJcbiAgXHJcblxyXG4uc2stY2hhc2UtZG90IHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiAwO1xyXG50b3A6IDA7IFxyXG5hbmltYXRpb246IHNrLWNoYXNlLWRvdCAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7IFxyXG59XHJcblxyXG4uc2stY2hhc2UtZG90OmJlZm9yZSB7XHJcbmNvbnRlbnQ6ICcnO1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDI1JTtcclxuaGVpZ2h0OiAyNSU7XHJcbmJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcclxuYm9yZGVyLXJhZGl1czogMTAwJTtcclxuYW5pbWF0aW9uOiBzay1jaGFzZS1kb3QtYmVmb3JlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDsgXHJcbn1cclxuXHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDEpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogLTEuMHM7IH1cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC44czsgfVxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg1KSB7IGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNikgeyBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDEpOmJlZm9yZSB7IGFuaW1hdGlvbi1kZWxheTogLTEuMXM7IH1cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMik6YmVmb3JlIHsgYW5pbWF0aW9uLWRlbGF5OiAtMS4wczsgfVxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgzKTpiZWZvcmUgeyBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpOmJlZm9yZSB7IGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSk6YmVmb3JlIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC43czsgfVxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg2KTpiZWZvcmUgeyBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XHJcblxyXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlIHtcclxuMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stY2hhc2UtZG90IHtcclxuODAlLCAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3QtYmVmb3JlIHtcclxuNTAlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7IFxyXG59IDEwMCUsIDAlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7IFxyXG59IFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgIC5pbnB1dEJveHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLm92ZXJsYXl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm92ZXJsYXkgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICAub3ZlcmxheSBoNXtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIC5kYXJrTW9kZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllTrendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-trending',
                templateUrl: './all-trending.component.html',
                styleUrls: ['./all-trending.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }]; }, null); })();


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
/* harmony import */ var _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daliy-trending-movies/daliy-trending-movies.component */ "./src/app/daliy-trending-movies/daliy-trending-movies.component.ts");
/* harmony import */ var _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekly-trending-movies/weekly-trending-movies.component */ "./src/app/weekly-trending-movies/weekly-trending-movies.component.ts");
/* harmony import */ var _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weekly-trending-series/weekly-trending-series.component */ "./src/app/weekly-trending-series/weekly-trending-series.component.ts");
/* harmony import */ var _daily_trending_series_daily_trending_series_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily-trending-series/daily-trending-series.component */ "./src/app/daily-trending-series/daily-trending-series.component.ts");
/* harmony import */ var _weekly_trending_persons_weekly_trending_persons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weekly-trending-persons/weekly-trending-persons.component */ "./src/app/weekly-trending-persons/weekly-trending-persons.component.ts");
/* harmony import */ var _daily_trending_persons_daily_trending_persons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./daily-trending-persons/daily-trending-persons.component */ "./src/app/daily-trending-persons/daily-trending-persons.component.ts");
/* harmony import */ var _all_trending_all_trending_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-trending/all-trending.component */ "./src/app/all-trending/all-trending.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tv-details/tv-details.component */ "./src/app/tv-details/tv-details.component.ts");
/* harmony import */ var _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./person-details/person-details.component */ "./src/app/person-details/person-details.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _get_search_get_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-search/get-search.component */ "./src/app/get-search/get-search.component.ts");


// import {AllTrendMoviesComponent} from './all-trend-movies/all-trend-movies.component';














const routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: _all_trending_all_trending_component__WEBPACK_IMPORTED_MODULE_8__["AllTrendingComponent"] },
    { path: "d-t-movies", component: _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_2__["DaliyTrendingMoviesComponent"] },
    { path: "w-t-movies", component: _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_3__["WeeklyTrendingMoviesComponent"] },
    { path: "w-t-series", component: _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_4__["WeeklyTrendingSeriesComponent"] },
    { path: "d-t-series", component: _daily_trending_series_daily_trending_series_component__WEBPACK_IMPORTED_MODULE_5__["DailyTrendingSeriesComponent"] },
    { path: "w-t-persons", component: _weekly_trending_persons_weekly_trending_persons_component__WEBPACK_IMPORTED_MODULE_6__["WeeklyTrendingPersonsComponent"] },
    { path: "d-t-persons", component: _daily_trending_persons_daily_trending_persons_component__WEBPACK_IMPORTED_MODULE_7__["DailyTrendingPersonsComponent"] },
    { path: "moviedetails/:id", component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsComponent"] },
    { path: "tvdetails/:id", component: _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_10__["TvDetailsComponent"] },
    { path: "persondetails/:id", component: _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_11__["PersonDetailsComponent"] },
    { path: "Search/:box.value", component: _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"] },
    { path: "getSearch/:id", component: _get_search_get_search_component__WEBPACK_IMPORTED_MODULE_13__["GetSearchComponent"] },
    { path: '*', redirectTo: '/404' }
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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fotter_fotter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fotter/fotter.component */ "./src/app/fotter/fotter.component.ts");





class AppComponent {
    //  title = 'angularProject';
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fotter");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _fotter_fotter_component__WEBPACK_IMPORTED_MODULE_3__["FotterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./daliy-trending-movies/daliy-trending-movies.component */ "./src/app/daliy-trending-movies/daliy-trending-movies.component.ts");
/* harmony import */ var _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weekly-trending-movies/weekly-trending-movies.component */ "./src/app/weekly-trending-movies/weekly-trending-movies.component.ts");
/* harmony import */ var _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weekly-trending-series/weekly-trending-series.component */ "./src/app/weekly-trending-series/weekly-trending-series.component.ts");
/* harmony import */ var _daily_trending_series_daily_trending_series_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./daily-trending-series/daily-trending-series.component */ "./src/app/daily-trending-series/daily-trending-series.component.ts");
/* harmony import */ var _weekly_trending_persons_weekly_trending_persons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./weekly-trending-persons/weekly-trending-persons.component */ "./src/app/weekly-trending-persons/weekly-trending-persons.component.ts");
/* harmony import */ var _daily_trending_persons_daily_trending_persons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./daily-trending-persons/daily-trending-persons.component */ "./src/app/daily-trending-persons/daily-trending-persons.component.ts");
/* harmony import */ var _fotter_fotter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fotter/fotter.component */ "./src/app/fotter/fotter.component.ts");
/* harmony import */ var _all_trending_all_trending_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./all-trending/all-trending.component */ "./src/app/all-trending/all-trending.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./person-details/person-details.component */ "./src/app/person-details/person-details.component.ts");
/* harmony import */ var _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tv-details/tv-details.component */ "./src/app/tv-details/tv-details.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _get_search_get_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./get-search/get-search.component */ "./src/app/get-search/get-search.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");






















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
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_7__["DaliyTrendingMoviesComponent"],
        _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_8__["WeeklyTrendingMoviesComponent"],
        _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_9__["WeeklyTrendingSeriesComponent"],
        _daily_trending_series_daily_trending_series_component__WEBPACK_IMPORTED_MODULE_10__["DailyTrendingSeriesComponent"],
        _weekly_trending_persons_weekly_trending_persons_component__WEBPACK_IMPORTED_MODULE_11__["WeeklyTrendingPersonsComponent"],
        _daily_trending_persons_daily_trending_persons_component__WEBPACK_IMPORTED_MODULE_12__["DailyTrendingPersonsComponent"],
        _fotter_fotter_component__WEBPACK_IMPORTED_MODULE_13__["FotterComponent"],
        _all_trending_all_trending_component__WEBPACK_IMPORTED_MODULE_14__["AllTrendingComponent"],
        _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_15__["MovieDetailsComponent"],
        _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_16__["PersonDetailsComponent"],
        _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_17__["TvDetailsComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
        _get_search_get_search_component__WEBPACK_IMPORTED_MODULE_19__["GetSearchComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _weekly_movies_weekly_movies_component__WEBPACK_IMPORTED_MODULE_4__["WeeklyMoviesComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _daliy_trending_movies_daliy_trending_movies_component__WEBPACK_IMPORTED_MODULE_7__["DaliyTrendingMoviesComponent"],
                    _weekly_trending_movies_weekly_trending_movies_component__WEBPACK_IMPORTED_MODULE_8__["WeeklyTrendingMoviesComponent"],
                    _weekly_trending_series_weekly_trending_series_component__WEBPACK_IMPORTED_MODULE_9__["WeeklyTrendingSeriesComponent"],
                    _daily_trending_series_daily_trending_series_component__WEBPACK_IMPORTED_MODULE_10__["DailyTrendingSeriesComponent"],
                    _weekly_trending_persons_weekly_trending_persons_component__WEBPACK_IMPORTED_MODULE_11__["WeeklyTrendingPersonsComponent"],
                    _daily_trending_persons_daily_trending_persons_component__WEBPACK_IMPORTED_MODULE_12__["DailyTrendingPersonsComponent"],
                    _fotter_fotter_component__WEBPACK_IMPORTED_MODULE_13__["FotterComponent"],
                    _all_trending_all_trending_component__WEBPACK_IMPORTED_MODULE_14__["AllTrendingComponent"],
                    _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_15__["MovieDetailsComponent"],
                    _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_16__["PersonDetailsComponent"],
                    _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_17__["TvDetailsComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
                    _get_search_get_search_component__WEBPACK_IMPORTED_MODULE_19__["GetSearchComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundComponent"],
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

/***/ "./src/app/daily-trending-persons/daily-trending-persons.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/daily-trending-persons/daily-trending-persons.component.ts ***!
  \****************************************************************************/
/*! exports provided: DailyTrendingPersonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyTrendingPersonsComponent", function() { return DailyTrendingPersonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function DailyTrendingPersonsComponent_div_6_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImg + i_r1.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DailyTrendingPersonsComponent_div_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
const _c0 = function (a1) { return ["/persondetails", a1]; };
function DailyTrendingPersonsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DailyTrendingPersonsComponent_div_6_img_3_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DailyTrendingPersonsComponent_div_6_ng_template_4_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, i_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r1.profile_path != null)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r1.title, "", i_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.popularity);
} }
class DailyTrendingPersonsComponent {
    constructor(_MoviesService) {
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.DailyTpersons = [];
        _MoviesService.getDailyTrendingPersons().subscribe((data) => {
            this.DailyTpersons = data.results;
        }, (err) => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
}
DailyTrendingPersonsComponent.ɵfac = function DailyTrendingPersonsComponent_Factory(t) { return new (t || DailyTrendingPersonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
DailyTrendingPersonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyTrendingPersonsComponent, selectors: [["app-daily-trending-persons"]], decls: 7, vars: 1, consts: [[1, "dt-mainImg"], [1, "overlay"], [1, "container", "my-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "position-relative", "theData"], [3, "routerLink"], ["class", "containingData w-100 myRounded", 3, "src", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "theVote", "rounded", "position-absolute"], [1, "containingData", "w-100", "myRounded", 3, "src"], ["src", "../../assets/img/download.png", 1, "containingData", "nullImg", "w-100", "myRounded"]], template: function DailyTrendingPersonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our daily trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DailyTrendingPersonsComponent_div_6_Template, 10, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DailyTpersons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhaWx5LXRyZW5kaW5nLXBlcnNvbnMvZGFpbHktdHJlbmRpbmctcGVyc29ucy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyTrendingPersonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily-trending-persons',
                templateUrl: './daily-trending-persons.component.html',
                styleUrls: ['./daily-trending-persons.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/daily-trending-series/daily-trending-series.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/daily-trending-series/daily-trending-series.component.ts ***!
  \**************************************************************************/
/*! exports provided: DailyTrendingSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyTrendingSeriesComponent", function() { return DailyTrendingSeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/tvdetails", a1]; };
function DailyTrendingSeriesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, i_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImg + i_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r1.title, "", i_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.vote_average);
} }
class DailyTrendingSeriesComponent {
    constructor(_MoviesService) {
        this.value = '';
        this.DailySeries = [];
        this.getImg = "https://image.tmdb.org/t/p/w500";
        _MoviesService.getDailyTrendingSeries().subscribe((data) => {
            this.DailySeries = data.results;
        }, (error) => { console.log(error); });
    }
    update(value) {
        this.value = value;
        let obj = this.DailySeries.find(obj => obj.title == this.value);
        this.seriesId = obj.id;
        console.log(this.seriesId);
    }
    ngOnInit() {
    }
}
DailyTrendingSeriesComponent.ɵfac = function DailyTrendingSeriesComponent_Factory(t) { return new (t || DailyTrendingSeriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
DailyTrendingSeriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyTrendingSeriesComponent, selectors: [["app-daily-trending-series"]], decls: 7, vars: 1, consts: [[1, "dt-mainImg"], [1, "overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container", "my-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "position-relative", "theData"], [3, "routerLink"], [1, "containingData", "w-100", "myRounded", 3, "src"], [1, "theVote", "rounded", "position-absolute"]], template: function DailyTrendingSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our daily Trending series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DailyTrendingSeriesComponent_div_6_Template, 8, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DailySeries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhaWx5LXRyZW5kaW5nLXNlcmllcy9kYWlseS10cmVuZGluZy1zZXJpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyTrendingSeriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily-trending-series',
                templateUrl: './daily-trending-series.component.html',
                styleUrls: ['./daily-trending-series.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/moviedetails", a1]; };
function DaliyTrendingMoviesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImg + i_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.vote_average);
} }
class DaliyTrendingMoviesComponent {
    constructor(_MoviesService) {
        this._MoviesService = _MoviesService;
        this.value = '';
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.DailyMovies = [];
        _MoviesService.getDaliyTrendingMovies().subscribe((data) => {
            this.DailyMovies = data.results;
            console.log(this.DailyMovies);
        }, (error) => {
            console.log(error);
        });
    }
    update(value) {
        this.value = value;
        let obj = this.DailyMovies.find(obj => obj.title == this.value);
        this.moviesId = obj.id;
        console.log(this.moviesId);
    }
    ngOnInit() {
    }
}
DaliyTrendingMoviesComponent.ɵfac = function DaliyTrendingMoviesComponent_Factory(t) { return new (t || DaliyTrendingMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
DaliyTrendingMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DaliyTrendingMoviesComponent, selectors: [["app-daliy-trending-movies"]], decls: 7, vars: 1, consts: [[1, "dt-mainImg"], [1, "overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container", "my-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "position-relative", "theData"], [3, "routerLink"], [1, "containingData", "w-100", "myRounded", 3, "src"], [1, "theVote", "rounded", "position-absolute"]], template: function DaliyTrendingMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Daily trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DaliyTrendingMoviesComponent_div_6_Template, 8, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DailyMovies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".dt-mainImg[_ngcontent-%COMP%] {\n  background-image: url('d38rnod-2f6cb815-011d-47a8-bb9f-448c20f994c9.jpg');\n  background-position: center center;\n  background-size: cover;\n  height: 40vh;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(12, 12, 12, 0.715);\n  height: 100%;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFsaXktdHJlbmRpbmctbW92aWVzL2RhbGl5LXRyZW5kaW5nLW1vdmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlFQUFBO0VBQ0Esa0NBQUE7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBQ0w7O0FBQ0E7RUFDSSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9kYWxpeS10cmVuZGluZy1tb3ZpZXMvZGFsaXktdHJlbmRpbmctbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR0LW1haW5JbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2QzOHJub2QtMmY2Y2I4MTUtMDExZC00N2E4LWJiOWYtNDQ4YzIwZjk5NGM5LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxufVxyXG4ub3ZlcmxheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMC43MTUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaliyTrendingMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daliy-trending-movies',
                templateUrl: './daliy-trending-movies.component.html',
                styleUrls: ['./daliy-trending-movies.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/fotter/fotter.component.ts":
/*!********************************************!*\
  !*** ./src/app/fotter/fotter.component.ts ***!
  \********************************************/
/*! exports provided: FotterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotterComponent", function() { return FotterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FotterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FotterComponent.ɵfac = function FotterComponent_Factory(t) { return new (t || FotterComponent)(); };
FotterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotterComponent, selectors: [["app-fotter"]], decls: 48, vars: 0, consts: [[1, "py-4"], [1, "container"], [1, "row"], [1, "col-md-3"], [1, "myList", "text-left"]], template: function FotterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "THE BASICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " About Movifiy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Support Forums ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " System Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " GET INVOLVED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Contribution Bible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add New Movie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Add New TV Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " COMMUNITY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "COMMUNITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Guidelines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Discussions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Leaderboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "LEGAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "API Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #001414;\n}\n\n.myList[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm90dGVyL2ZvdHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0VBQVcsVUFBQTtFQUNYLGdCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9mb3R0ZXIvZm90dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQxNDtcclxufVxyXG4ubXlMaXN0e1xyXG4gICAgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FotterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fotter',
                templateUrl: './fotter.component.html',
                styleUrls: ['./fotter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/get-search/get-search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/get-search/get-search.component.ts ***!
  \****************************************************/
/*! exports provided: GetSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSearchComponent", function() { return GetSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GetSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
GetSearchComponent.ɵfac = function GetSearchComponent_Factory(t) { return new (t || GetSearchComponent)(); };
GetSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetSearchComponent, selectors: [["app-get-search"]], decls: 0, vars: 0, template: function GetSearchComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC1zZWFyY2gvZ2V0LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-get-search',
                templateUrl: './get-search.component.html',
                styleUrls: ['./get-search.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MovieDetailsComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1.name, " ");
} }
class MovieDetailsComponent {
    constructor(_MoviesService, _ActivatedRoute) {
        this._MoviesService = _MoviesService;
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.genere = [];
        this.production_companies = [];
        this.id = _ActivatedRoute.snapshot.paramMap.get('id');
        _MoviesService.getMovieDetails(this.id).subscribe((data) => {
            this.movieDetails = data;
            this.genere = data.genres;
            this.production_companies = data.production_companies;
            console.log(this.movieDetails);
            console.log(this.production_companies);
        });
    }
    ngOnInit() {
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 16, vars: 6, consts: [[1, "container", "my-5"], [1, "row"], [1, "col-md-6"], [3, "src"], [1, "pr-2"], ["class", "pr-3", 4, "ngFor", "ngForOf"], [1, "overview"], [3, "href"], [1, "pr-3"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " genre : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MovieDetailsComponent_span_11_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "the movie's homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImg + ctx.movieDetails.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movieDetails.original_title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieDetails.release_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genere);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieDetails.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.movieDetails.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-details',
                templateUrl: './movie-details.component.html',
                styleUrls: ['./movie-details.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
    getTrendingSeries() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getTrendingPersons() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getDaliyTrendingMovies() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getWeeklyTrendingMovies() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getWeeklyTrendingSeries() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getDailyTrendingSeries() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getWeeklyTrendingPersons() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/week?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getDailyTrendingPersons() {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/day?api_key=cd8fd77939ca02736dde3389204808fc");
    }
    getMovieDetails(id) {
        return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cd8fd77939ca02736dde3389204808fc&language=en-US`);
    }
    getTvDetails(id) {
        return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=cd8fd77939ca02736dde3389204808fc&language=en-US`);
    }
    getPersonsDetails(id) {
        return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=cd8fd77939ca02736dde3389204808fc&language=en-US`);
    }
    getSearchResult(searchQuery) {
        return this._HttpClient.get(`
    https://api.themoviedb.org/3/search/multi?api_key=cd8fd77939ca02736dde3389204808fc&language=en-US&query=${searchQuery}&page=1&include_adult=false
    `);
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
        let switchButton = document.getElementById("switchButton");
        let buttonn;
        let darkModeStatus = document.querySelectorAll('p')[0];
        let darkModeStatusColor = document.getElementById("darkModeStatus");
        let on = "Dark Mode On";
        let off = "Dark Mode Off";
        darkModeStatus.setAttribute('data-value', off);
        let result = document.getElementsByClassName("result");
        $(".result").css("color", "red");
        switchButton.addEventListener("click", function () {
            darkModeStatus.style.color = "transparent";
            if (buttonn == true) {
                buttonn = false;
                darkModeOff();
            }
            else {
                buttonn = true;
                darkModeOn();
            }
        });
        function darkModeOn() {
            document.body.style.backgroundColor = "#131926";
            let overlay = document.getElementById("overlay");
            overlay.style.backgroundColor = "rgba(12, 12, 12, 0.715)";
            darkModeStatus.setAttribute('data-value', on);
            darkModeStatusColor.style.color = "black";
        }
        function darkModeOff() {
            document.body.style.backgroundColor = "#F2F2F2";
            let overlay = document.getElementById("overlay");
            overlay.style.backgroundColor = "rgba(12, 12, 12, 0.499)";
            darkModeStatus.setAttribute('data-value', off);
            darkModeStatusColor.style.color = "white";
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 44, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top"], ["routerLink", "home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "px-2"], ["routerLink", "home", 1, "nav-link", "px-2"], [1, "sr-only"], [1, "nav-item", "dropdown", "px-2"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "myBorderRadius"], ["routerLink", "d-t-movies", 1, "dropdown-item", "px-1"], [1, "dropdown-divider"], ["routerLink", "w-t-movies", 1, "dropdown-item", "px-1"], ["routerLink", "d-t-series", 1, "dropdown-item", "px-1"], ["routerLink", "w-t-series", 1, "dropdown-item", "px-1"], ["routerLink", "d-t-persons", 1, "dropdown-item", "px-1"], ["routerLink", "w-t-persons", 1, "dropdown-item", "px-1"], [1, "darkMode", "row", "px-3", "justify-content-center", "align-items-center"], ["id", "darkModeStatus", 1, "pr-2", "mt-2"], [1, "switch"], ["id", "switchButton", "type", "checkbox"], [1, "slider", "round"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "movifiy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Trending Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Daily Trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Weekly Trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Trending Series ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Daily Trending series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Weekly Trending series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " popular persons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Daily Trending persons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Weekly Trending persons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  border-bottom: rgba(0, 0, 0, 0.301) solid 1px !important;\n  z-index: 1000;\n  background-color: #6ba5f29c;\n  box-shadow: 0 0.5px 3px 0 rgba(60, 64, 67, 0.302), 0 0.5px 5px 1px rgba(60, 64, 67, 0.149);\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n  background-color: #94bdf2c4;\n  border-radius: 10px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  background-color: #94bdf2c4;\n}\n\n.addShadow[_ngcontent-%COMP%]:hover {\n  background-color: #fafbfd;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.style-none[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.myInput[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 30px;\n}\n\n\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n#darkModeStatus[_ngcontent-%COMP%]::after {\n  content: attr(data-value);\n}\n\n#darkModeStatus[_ngcontent-%COMP%] {\n  color: white;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  font-size: 14PX;\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n\n@media only screen and (max-width: 750px) {\n  .darkMode[_ngcontent-%COMP%] {\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLHdEQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEZBQUE7QUFMSjs7QUFRQTtFQUNJLHNGQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU9BO0VBQ0ksMkJBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0VBQ0Esc0ZBQUE7QUFKSjs7QUFNQTtFQUNJLGFBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBS0E7RUFDSSxpQkFBQTtFQUVBLG1CQUFBO0FBSEo7O0FBUUEsMkNBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMSjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBT0U7RUFDRSxZQUFBO0FBSko7O0FBT0UsK0JBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFKSjs7QUFPRSxlQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7QUFKSjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQUpKOztBQVFFO0VBQ0UseUJBQUE7QUFMSjs7QUFRRTtFQUNFLDJCQUFBO0FBTEo7O0FBUUU7RUFHRSwyQkFBQTtBQUxKOztBQVFFLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFMSjs7QUFRRTtFQUNFLGtCQUFBO0FBTEo7O0FBT0U7RUFFRTtJQUNJLFdBQUE7RUFMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXJrZXN0Q29sb3I6I0YyRjJGMjtcclxuJGRhcmtDb2xvcjojMEQ2NUQ5O1xyXG4kbWVkdWltOiMyMzcyRDk7XHJcbiRsaWdodDojNkJBNUYyO1xyXG4kbGlnaHRlc3Q6Izk0QkRGMjtcclxuJHNoYWRvdzojOTRiZGYyYzQ7XHJcbm5hdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiByZ2JhKDAsIDAsIDAsIDAuMzAxKSBzb2xpZCAxcHghaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YmE1ZjI5YztcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cHggM3B4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMwMiksIDAgMC41cHggNXB4IDFweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTQ5KVxyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMwMiksIDAgMXB4IDNweCAxcHggcmdiYSg2MCwgNjQsIDY3LCAwLjE0OSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRiZGYyYzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5kcm9wZG93bi1tZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0YmRmMmM0O1xyXG59XHJcblxyXG4uYWRkU2hhZG93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMzAyKSwgMCAxcHggM3B4IDFweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTQ5KTtcclxufVxyXG4ubGlzdC1ncm91cHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zdHlsZS1ub25le1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubXlJbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuI2RhcmtNb2RlU3RhdHVzOjphZnRlcntcclxuICBjb250ZW50OiBhdHRyKGRhdGEtdmFsdWUpO1xyXG5cclxufVxyXG4gICNkYXJrTW9kZVN0YXR1c3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cclxuICAuc3dpdGNoIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNsaWRlciAqL1xyXG4gIC5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZm9udC1zaXplOiAxNFBYO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4gIC5zbGlkZXIucm91bmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcblxyXG4gICAgLmRhcmtNb2Rle1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, consts: [["src", "../../assets/img/Screenshot (89).png", 1, "w-100"], [1, "d-flex", "justifiy-content-center"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0646\u062A \u0639\u0627\u064A\u0632 \u062A\u0631\u0648\u062D \u0641\u064A\u0646 \u062D\u0636\u0631\u062A\u0643");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/person-details/person-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/person-details/person-details.component.ts ***!
  \************************************************************/
/*! exports provided: PersonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailsComponent", function() { return PersonDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");




class PersonDetailsComponent {
    constructor(_ActivatedRoute, _MoviesService) {
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.id = _ActivatedRoute.snapshot.paramMap.get('id');
        _MoviesService.getPersonsDetails(this.id).subscribe((data) => {
            this.ourData = data;
            console.log(this.ourData);
        });
    }
    ngOnInit() {
    }
}
PersonDetailsComponent.ɵfac = function PersonDetailsComponent_Factory(t) { return new (t || PersonDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
PersonDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonDetailsComponent, selectors: [["app-person-details"]], decls: 13, vars: 4, consts: [[1, "container", "pt-4", "my-5"], [1, "row"], [1, "col-md-6"], [3, "src"], [1, "pr-2"], [1, "pr-3"], [1, "mt-2"], [1, "overview"]], template: function PersonDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImg + ctx.ourData.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ourData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("birthday : ", ctx.ourData.birthday, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ourData.biography);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1kZXRhaWxzL3BlcnNvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-person-details',
                templateUrl: './person-details.component.html',
                styleUrls: ['./person-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SearchComponent_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImg + i_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SearchComponent_div_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} }
function SearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_2_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_2_ng_template_5_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/find?q=", i_r1.original_title, "&ref_=nv_sr_sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r1.poster_path != null)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" title : ", i_r1.original_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.overview);
} }
class SearchComponent {
    constructor(_MoviesService, _ActivatedRoute) {
        this._MoviesService = _MoviesService;
        this.searchData = [];
        this.title = [];
        this.poster_path = [];
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.value = _ActivatedRoute.snapshot.paramMap.get('box.value');
        _MoviesService.getSearchResult(this.value).subscribe((data) => {
            this.searchData = data.results;
            console.log(this.searchData);
        });
    }
    ngOnInit() {
        let overview = document.getElementsByClassName("overview");
        function myfunc() {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".overview").slideDown(300);
        }
        for (let i = 0; i < overview.length; i++) {
            overview[i].addEventListener("mouseover", myfunc);
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 3, vars: 1, consts: [[1, "container", "mt-5"], [1, "row"], ["class", "col-md-10 py-2  searchImg", 4, "ngFor", "ngForOf"], [1, "col-md-10", "py-2", "searchImg"], [3, "href"], [1, "row", "py-2", "rounded", "result"], [1, "col-md-2"], ["class", " w-100 rounded ", 3, "src", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col-md-10"], [1, "w-100", "rounded", 3, "src"], ["src", "../../assets/img/download.png", 1, "containingData", "nullImg", "w-100", "myRounded"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_2_Template, 14, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".overview[_ngcontent-%COMP%] {\n  z-index: 100;\n  background-color: #04d99d9d;\n  display: none;\n  color: #F2F2F2;\n  height: 100%;\n  position: absolute;\n  top: 100px;\n  right: 0px;\n  height: 100%;\n  overflow: auto;\n  word-wrap: break-word;\n  transition: top 2s ease-out, opacity 2s;\n}\n\n.result[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(var(--lightGrey), 1);\n}\n\n.mainPic[_ngcontent-%COMP%]:hover   .overview[_ngcontent-%COMP%] {\n  top: 0px;\n  display: block;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0f3a02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFFQSxjQVpVO0VBYVYsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0MsY0FBQTtFQUNELHFCQUFBO0VBQ0EsdUNBQUE7QUFSSjs7QUFZQTtFQUNJLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQVRKOztBQVlBO0VBRUksUUFBQTtFQUNKLGNBQUE7QUFWQTs7QUFjQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXJrZXN0Q29sb3I6I0YyRjJGMjtcclxuJGRhcmtDb2xvcjojMEQ2NUQ5O1xyXG4kbWVkdWltOiMyMzcyRDk7XHJcbiRsaWdodDojNkJBNUYyO1xyXG4kbGlnaHRlc3Q6Izk0QkRGMjtcclxuJHNoYWRvdzojOTRiZGYyYzQ7XHJcblxyXG4ub3ZlcnZpZXd7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRkOTlkOWQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIGNvbG9yOiAkZGFya2VzdENvbG9yO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDJzIGVhc2Utb3V0LG9wYWNpdHkgMnM7XHJcbiAgICBcclxuIFxyXG59XHJcbi5yZXN1bHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1saWdodEdyZXkpLCAxKTtcclxuICAgXHJcbn1cclxuLm1haW5QaWM6aG92ZXIgLm92ZXJ2aWV3e1xyXG4gICAgXHJcbiAgICB0b3A6IDBweDtcclxuZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigxNSwgNTgsIDIpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tv-details/tv-details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tv-details/tv-details.component.ts ***!
  \****************************************************/
/*! exports provided: TvDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvDetailsComponent", function() { return TvDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TvDetailsComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r2.name, " ");
} }
function TvDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("airdate :", j_r3.air_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("episode count : ", j_r3.episode_count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("name : ", j_r3.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("overview : ", j_r3.overview, "");
} }
class TvDetailsComponent {
    constructor(_ActivatedRoute, _MoviesService) {
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.genere = [];
        this.production_companies = [];
        this.seasons = [];
        this.id = _ActivatedRoute.snapshot.paramMap.get('id');
        _MoviesService.getTvDetails(this.id).subscribe((data) => {
            this.tvDetails = data;
            console.log(this.tvDetails);
            this.genere = data.genres;
            this.seasons = data.seasons;
            console.log(this.seasons);
            this.production_companies = data.production_companies;
        });
    }
    ngOnInit() {
    }
}
TvDetailsComponent.ɵfac = function TvDetailsComponent_Factory(t) { return new (t || TvDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
TvDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvDetailsComponent, selectors: [["app-tv-details"]], decls: 29, vars: 13, consts: [[1, "container", "pt-4", "my-5"], [1, "row"], [1, "col-md-6", "d-flex", "align-content-center"], [3, "src"], [1, "col-md-6"], [1, "pr-2"], ["class", "pr-3", 4, "ngFor", "ngForOf"], [1, "overview"], ["target", " _blank", 1, "d-inline", 3, "href"], [1, "mt-3"], [4, "ngFor", "ngForOf"], [1, "pr-3"]], template: function TvDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " genre : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TvDetailsComponent_span_11_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "home page : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TvDetailsComponent_div_28_Template, 9, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImg + ctx.tvDetails.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tvDetails.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvDetails.release_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genere);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvDetails.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("episode run time ", ctx.tvDetails.episode_run_time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("first air date : ", ctx.tvDetails.first_air_date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("last air date : ", ctx.tvDetails.last_air_date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.tvDetails.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvDetails.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("number of episodes : ", ctx.tvDetails.number_of_episodes, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("number of seasons : ", ctx.tvDetails.number_of_seasons, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seasons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2LWRldGFpbHMvdHYtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tv-details',
                templateUrl: './tv-details.component.html',
                styleUrls: ['./tv-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/moviedetails", a1]; };
function WeeklyTrendingMoviesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
WeeklyTrendingMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeeklyTrendingMoviesComponent, selectors: [["app-weekly-trending-movies"]], decls: 7, vars: 1, consts: [[1, "dt-mainImg"], [1, "overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container", "my-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "position-relative", "theData"], [3, "routerLink"], [1, "containingData", "w-100", "myRounded", 3, "src"], [1, "theVote", "rounded", "position-absolute"]], template: function WeeklyTrendingMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our weekly trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeeklyTrendingMoviesComponent_div_6_Template, 8, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.WeeklyTmovies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".dt-mainImg[_ngcontent-%COMP%] {\n  background-image: url('d38rnod-2f6cb815-011d-47a8-bb9f-448c20f994c9.jpg');\n  background-position: center center;\n  background-size: cover;\n  height: 40vh;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(12, 12, 12, 0.715);\n  height: 100%;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vla2x5LXRyZW5kaW5nLW1vdmllcy93ZWVrbHktdHJlbmRpbmctbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUVBQUE7RUFDQSxrQ0FBQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFDTDs7QUFDQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3dlZWtseS10cmVuZGluZy1tb3ZpZXMvd2Vla2x5LXRyZW5kaW5nLW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kdC1tYWluSW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9kMzhybm9kLTJmNmNiODE1LTAxMWQtNDdhOC1iYjlmLTQ0OGMyMGY5OTRjOS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIDAuNzE1KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeeklyTrendingMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weekly-trending-movies',
                templateUrl: './weekly-trending-movies.component.html',
                styleUrls: ['./weekly-trending-movies.component.scss']
            }]
    }], function () { return [{ type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/weekly-trending-persons/weekly-trending-persons.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/weekly-trending-persons/weekly-trending-persons.component.ts ***!
  \******************************************************************************/
/*! exports provided: WeeklyTrendingPersonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyTrendingPersonsComponent", function() { return WeeklyTrendingPersonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function WeeklyTrendingPersonsComponent_div_6_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImg + i_r1.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WeeklyTrendingPersonsComponent_div_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
const _c0 = function (a1) { return ["/persondetails", a1]; };
function WeeklyTrendingPersonsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WeeklyTrendingPersonsComponent_div_6_img_3_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeeklyTrendingPersonsComponent_div_6_ng_template_4_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, i_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r1.profile_path != null)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r1.title, "", i_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.popularity);
} }
class WeeklyTrendingPersonsComponent {
    constructor(_MoviesService) {
        this.getImg = "https://image.tmdb.org/t/p/w500";
        this.WeeklyTpersons = [];
        _MoviesService.getWeeklyTrendingPersons().subscribe((data) => {
            this.WeeklyTpersons = data.results;
            console.log(this.WeeklyTpersons);
        }, (error) => { console.log(error); });
    }
    ngOnInit() {
    }
}
WeeklyTrendingPersonsComponent.ɵfac = function WeeklyTrendingPersonsComponent_Factory(t) { return new (t || WeeklyTrendingPersonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
WeeklyTrendingPersonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeeklyTrendingPersonsComponent, selectors: [["app-weekly-trending-persons"]], decls: 7, vars: 1, consts: [[1, "dt-mainImg"], [1, "overlay"], [1, "container", "my-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "position-relative", "theData"], [3, "routerLink"], ["class", "containingData w-100 myRounded", 3, "src", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "theVote", "rounded", "position-absolute"], [1, "containingData", "w-100", "myRounded", 3, "src"], ["src", "../../assets/img/download.png", 1, "containingData", "nullImg", "w-100", "myRounded"]], template: function WeeklyTrendingPersonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our weekly trending movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeeklyTrendingPersonsComponent_div_6_Template, 10, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.WeeklyTpersons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlZWtseS10cmVuZGluZy1wZXJzb25zL3dlZWtseS10cmVuZGluZy1wZXJzb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeeklyTrendingPersonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weekly-trending-persons',
                templateUrl: './weekly-trending-persons.component.html',
                styleUrls: ['./weekly-trending-persons.component.scss']
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/tvdetails", a1]; };
function WeeklyTrendingSeriesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, i_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImg + i_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r1.title, "", i_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.vote_average);
} }
class WeeklyTrendingSeriesComponent {
    constructor(_MoviesService) {
        this.value = '';
        this.WeeklySeries = [];
        this.getImg = "https://image.tmdb.org/t/p/w500";
        _MoviesService.getWeeklyTrendingSeries().subscribe((data) => {
            this.WeeklySeries = data.results;
            console.log(this.WeeklySeries);
        }, (error) => { console.log(error); });
    }
    update(value) {
        this.value = value;
        let obj = this.WeeklySeries.find(obj => obj.original_name == this.value);
        this.seriesId = obj.id;
    }
    ngOnInit() {
    }
}
WeeklyTrendingSeriesComponent.ɵfac = function WeeklyTrendingSeriesComponent_Factory(t) { return new (t || WeeklyTrendingSeriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
WeeklyTrendingSeriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeeklyTrendingSeriesComponent, selectors: [["app-weekly-trending-series"]], decls: 7, vars: 1, consts: [[1, "dt-mainImg"], [1, "overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container", "my-4"], [1, "mb-4"], [1, "row"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "position-relative", "theData"], [3, "routerLink"], [1, "containingData", "w-100", "myRounded", 3, "src"], [1, "theVote", "rounded", "position-absolute"]], template: function WeeklyTrendingSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our weekly Trending series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeeklyTrendingSeriesComponent_div_6_Template, 8, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.WeeklySeries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".theData[_ngcontent-%COMP%]:hover   .containingData[_ngcontent-%COMP%] {\n  text-decoration: none;\n  box-shadow: 0 0px 3px 0.5px #04d99dc2, 0 0px 3px 0.5px #04d99dc2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vla2x5LXRyZW5kaW5nLXNlcmllcy93ZWVrbHktdHJlbmRpbmctc2VyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0kscUJBQUE7RUFDQSxnRUFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvd2Vla2x5LXRyZW5kaW5nLXNlcmllcy93ZWVrbHktdHJlbmRpbmctc2VyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcmtlc3RDb2xvcjojMDEyMzI2O1xyXG4kZGFya0NvbG9yOiMyQTQwM0M7XHJcbiRtZWR1aW06IzBGOEM2OTtcclxuJGxpZ2h0OiMwNEJGOEE7XHJcbiRsaWdodGVzdDojMDREOTlEO1xyXG4kc2hhZG93OiMwNGQ5OWRjMjtcclxuXHJcbi50aGVEYXRhOmhvdmVyIC5jb250YWluaW5nRGF0YXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCAwLjVweCAkc2hhZG93LCAwIDBweCAzcHggMC41cHggJHNoYWRvdztcclxuXHJcbn0iXX0= */"] });
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

module.exports = __webpack_require__(/*! E:\front end\angularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
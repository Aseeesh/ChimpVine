webpackJsonp([47],{

/***/ 2260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCoursesPageModule", function() { return CoreGradesCoursesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses__ = __webpack_require__(2420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreGradesCoursesPageModule = /** @class */ (function () {
    function CoreGradesCoursesPageModule() {
    }
    CoreGradesCoursesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__courses__["a" /* CoreGradesCoursesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__courses__["a" /* CoreGradesCoursesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreGradesCoursesPageModule);
    return CoreGradesCoursesPageModule;
}());

//# sourceMappingURL=courses.module.js.map

/***/ }),

/***/ 2420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreGradesCoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_grades__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_tag_providers_tag__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_tag_providers_area_delegate__ = __webpack_require__(143);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Page that displays courses grades (main menu option).
 */
var CoreGradesCoursesPage = /** @class */ (function () {
    function CoreGradesCoursesPage(gradesProvider, domUtils, gradesHelper, tagProvider, tagAreaDelegate) {
        var _this = this;
        this.gradesProvider = gradesProvider;
        this.domUtils = domUtils;
        this.gradesHelper = gradesHelper;
        this.tagProvider = tagProvider;
        this.tagAreaDelegate = tagAreaDelegate;
        this.grades = [];
        this.gradesLoaded = false;
        this.hasUnsupportedAreas = false;
        this.isDestroyed = false;
        this.accordindata = [
            { grade: 'Pre-k ' },
            { grade: 'KinderGarden ' },
            { grade: '1st Grade ' },
            { grade: '2nd Grade ' },
            { grade: '3rd Grade ' },
            { grade: '4th Grade' },
            { grade: '5th Grade' },
            { grade: '6th Grade' },
            { grade: '7th Grade' },
            { grade: '8th Grade' },
        ];
        this.categorylist = [
            { categoryId: 1, categoryName: "Games", link: "" },
            { categoryId: 2, categoryName: "Quizzes", link: "" },
            { categoryId: 3, categoryName: "Additional-Resources", link: "" }
        ];
        this.accordindata.forEach(function (element) {
            element.subjectList = [
                { subjectId: 11, category: _this.categorylist, rawgrade: null, courseFullName: "Math", showCategoryDetails: false, icon: 'ios-add-circle-outline' },
                { subjectId: 39, category: _this.categorylist, rawgrade: null, courseFullName: "English", showCategoryDetails: false, icon: 'ios-add-circle-outline' },
                { subjectId: 13, category: _this.categorylist, rawgrade: null, courseFullName: "Science", showCategoryDetails: false, icon: 'ios-add-circle-outline' },
            ];
            element.icon = 'ios-add-circle-outline', element.showDetails = false;
        });
        this.activeActive = 'gradeList';
    }
    CoreGradesCoursesPage.prototype.setActiveTag = function (tag) {
        this.activeActive = tag;
    };
    CoreGradesCoursesPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-add-circle-outline';
        }
        else {
            data.showDetails = true;
            data.icon = 'ios-remove-circle-outline';
        }
    };
    CoreGradesCoursesPage.prototype.toggleCatgoryDetails = function (data) {
        if (data.showCategoryDetails) {
            data.showCategoryDetails = false;
            data.icon = 'ios-add-circle-outline';
        }
        else {
            data.showCategoryDetails = true;
            data.icon = 'ios-remove-circle-outline';
        }
    };
    CoreGradesCoursesPage.prototype.GetTagDetails = function (tagName) {
        var _this = this;
        this.tagName = tagName.replace(/\s/g, ''); //"Pre-k/Math/Games"; 
        this.recursive = true;
        this.collectionId = 6;
        this.tagId = 0;
        this.fromContextId = 0;
        this.areaId = 0;
        this.contextId = 0;
        return this.tagProvider.getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, 0).then(function (areas) {
            _this.areas = [];
            _this.hasUnsupportedAreas = false;
            return Promise.all(areas.map(function (area) {
                return _this.tagAreaDelegate.parseContent(area.component, area.itemtype, area.content).then(function (items) {
                    if (!items || !items.length) {
                        // Tag area not supported, skip.
                        _this.hasUnsupportedAreas = true;
                        return null;
                    }
                    return {
                        id: area.ta,
                        componentName: area.component,
                        itemType: area.itemtype,
                        nameKey: _this.tagAreaDelegate.getDisplayNameKey(area.component, area.itemtype),
                        items: items,
                        canLoadMore: !!area.nextpageurl,
                        badge: items && items.length ? items.length + (area.nextpageurl ? '+' : '') : '',
                    };
                });
            })).then(function (areas) {
                _this.areas = areas.filter(function (area) { return area != null; });
                if (_this.areas.length > 0) {
                    _this.openArea(_this.areas[0]);
                }
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading tag index');
        });
    };
    CoreGradesCoursesPage.prototype.openArea = function (area) {
        this.selectedAreaId = area.id;
        var params = {
            tagId: this.tagId,
            tagName: this.tagName,
            collectionId: this.collectionId,
            areaId: area.id,
            fromContextId: this.fromContextId,
            contextId: this.contextId,
            recursive: this.recursive,
            areaNameKey: area.nameKey,
            componentName: area.component,
            itemType: area.itemType,
            items: area.items.slice(),
            canLoadMore: area.canLoadMore,
            nextPage: 1
        };
        this.splitviewCtrl.isOn();
        this.splitviewCtrl.push('CoreTagIndexAreaPage', params);
    };
    /**
     * View loaded.
     */
    CoreGradesCoursesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.courseId) {
            // There is the course to load, open the course in a new state.
            this.gotoCourseGrades(this.courseId);
        }
        this.fetchData().then(function () {
            if (!_this.courseId && _this.splitviewCtrl.isOn() && _this.grades.length > 0) {
                _this.gotoCourseGrades(_this.grades[0].courseid);
            }
            // Add log in Moodle.
            return _this.gradesProvider.logCoursesGradesView().catch(function () {
                // Ignore errors.
            });
        }).finally(function () {
            _this.gradesLoaded = true;
        });
    };
    /**
     * Fetch all the data required for the view.
     *
     * @return Resolved when done.
     */
    CoreGradesCoursesPage.prototype.fetchData = function () {
        var _this = this;
        return this.gradesProvider.getCoursesGrades().then(function (grades) {
            return _this.gradesHelper.getGradesCourseData(grades).then(function (grades) {
                _this.grades = grades;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading grades');
        });
    };
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    CoreGradesCoursesPage.prototype.refreshGrades = function (refresher) {
        var _this = this;
        this.gradesProvider.invalidateCoursesGradesData().finally(function () {
            _this.fetchData().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Navigate to the grades of the selected course.
     * @param courseId Course Id where to navigate.
     */
    CoreGradesCoursesPage.prototype.gotoCourseGrades = function (courseId) {
        this.courseId = courseId;
        this.splitviewCtrl.push('CoreGradesCoursePage', { courseId: courseId, userId: this.userId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CoreGradesCoursesPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], CoreGradesCoursesPage.prototype, "splitviewCtrl", void 0);
    CoreGradesCoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-grades-courses',template:/*ion-inline-start:"F:\moodle\from github\Version2\moodleapp\src\core\grades\pages\courses\courses.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.grades.grades\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="gradesLoaded" (ionRefresh)="refreshGrades($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="gradesLoaded">\n\n            <core-empty-box *ngIf="grades && grades.length == 0" icon="stats" [message]="\'core.grades.nogradesreturned\' | translate">\n\n            </core-empty-box>\n\n\n\n          \n\n            <ion-segment >\n\n                <ion-segment-button   (click)="setActiveTag(\'gradeList\')"\n\n                [ngClass]="activeActive==\'gradeList\'?\'activeTab\':\'tab\'" >\n\n                  Grade-List\n\n                </ion-segment-button>\n\n                <ion-segment-button    (click)="setActiveTag(\'gradeScore\')"\n\n                [ngClass]="activeActive==\'gradeScore\'?\'activeTab\':\'tab\'" >\n\n                  Grade-Score\n\n                </ion-segment-button>\n\n              </ion-segment>\n\n              <ion-list-header *ngIf="activeActive==\'gradeList\'"> \n\n                <ion-list> \n\n                    <ion-item  *ngFor="let item of accordindata ; let index = index" >\n\n                   <h3 (click)="toggleDetails(item)"  [ngClass]="(item.showDetails)?\'activeSubject\':\'normalSubject\'">\n\n                       <strong>{{index +1}}. {{item.grade}} </strong>\n\n                        <ion-icon color="primary"  class="iconAccordion" item-right [name]="item.icon"></ion-icon> </h3>   \n\n                         <div *ngIf="item.showDetails">\n\n    \n\n                            <ion-list>\n\n                                <ion-item\n\n                                  class="animate__animated animate__fadeIn animate_faster"\n\n                                  *ngFor="let subject of item.subjectList; let indexSubject = index " >\n\n                                 \n\n                                    <ion-item >\n\n                                        <h3 (click)="toggleCatgoryDetails(subject)" [ngClass]="(subject.showCategoryDetails)?\'activeSubject\':\'normalSubject\'">\n\n                                            {{indexSubject +1}}.   {{subject.courseFullName}}  <ion-icon color="primary" class="iconAccordion" item-right [name]="subject.icon"></ion-icon> </h3>   \n\n                                              <div *ngIf="subject.showCategoryDetails">\n\n     <div class="item-inner">\n\n       \n\n                                            \n\n                                                     <ion-item \n\n                                                       class="animate__animated animate__fadeIn animate_faster"\n\n                                                       *ngFor="let itemCategory of subject.category " >\n\n                                                       <div class="input-wrapper">\n\n                                                              <div class="input-wrapper">\n\n                                                         <button  *ngIf="itemCategory.categoryName !== \'Additional-Resources\'"\n\n                                                         (click)="GetTagDetails(item.grade+\'/\'+subject.courseFullName+\'/\'+itemCategory.categoryName)" \n\n                                                         class="btnSubjectCategory"> {{itemCategory.categoryName}}</button>    \n\n                                                             <button  *ngIf="itemCategory.categoryName === \'Additional-Resources\'"\n\n                                            (click)="GetTagDetails(subject.courseFullName+\'/Blogs\')"\n\n                                             class="btnSubjectCategory"> {{itemCategory.categoryName}}</button> \n\n                                        </div>\n\n                                        </div>\n\n                                                         \n\n                                         </ion-item>\n\n                        \n\n    </div>\n\n                                         </div>\n\n                                         </ion-item>\n\n    \n\n    \n\n                    </ion-item>\n\n                </ion-list>  \n\n                    </div>\n\n                    </ion-item>\n\n                  </ion-list>  \n\n              </ion-list-header>\n\n              <ion-list-header *ngIf="activeActive==\'gradeScore\'"> \n\n                <ion-list *ngIf="grades && grades.length > 0">\n\n                    <a ion-item text-wrap *ngFor="let grade of grades" [title]="grade.courseFullName" (click)="gotoCourseGrades(grade.courseid)" [class.core-split-item-selected]="grade.courseid == courseId">\n\n                        <h2><core-format-text [text]="grade.courseFullName" contextLevel="course" [contextInstanceId]="grade.courseid"></core-format-text></h2>\n\n                        <ion-badge item-end color="light">{{grade.grade}}</ion-badge>\n\n                    </a>\n\n                </ion-list>\n\n              </ion-list-header>\n\n            \n\n        </core-loading>\n\n       \n\n \n\n    </ion-content>\n\n</core-split-view>'/*ion-inline-end:"F:\moodle\from github\Version2\moodleapp\src\core\grades\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_grades__["a" /* CoreGradesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* CoreGradesHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__core_tag_providers_tag__["a" /* CoreTagProvider */],
            __WEBPACK_IMPORTED_MODULE_7__core_tag_providers_area_delegate__["a" /* CoreTagAreaDelegate */]])
    ], CoreGradesCoursesPage);
    return CoreGradesCoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ })

});
//# sourceMappingURL=47.js.map
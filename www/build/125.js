webpackJsonp([125],{

/***/ 2175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignSubmissionListPageModule", function() { return AddonModAssignSubmissionListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__submission_list__ = __webpack_require__(2331);
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






var AddonModAssignSubmissionListPageModule = /** @class */ (function () {
    function AddonModAssignSubmissionListPageModule() {
    }
    AddonModAssignSubmissionListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__submission_list__["a" /* AddonModAssignSubmissionListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__submission_list__["a" /* AddonModAssignSubmissionListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModAssignSubmissionListPageModule);
    return AddonModAssignSubmissionListPageModule;
}());

//# sourceMappingURL=submission-list.module.js.map

/***/ }),

/***/ 2331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModAssignSubmissionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_groups__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_assign__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_assign_offline__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_assign_sync__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_helper__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_split_view_split_view__ = __webpack_require__(85);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Page that displays a list of submissions of an assignment.
 */
var AddonModAssignSubmissionListPage = /** @class */ (function () {
    function AddonModAssignSubmissionListPage(navParams, sitesProvider, eventsProvider, domUtils, translate, assignProvider, assignOfflineProvider, assignHelper, groupsProvider) {
        var _this = this;
        this.sitesProvider = sitesProvider;
        this.eventsProvider = eventsProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.assignProvider = assignProvider;
        this.assignOfflineProvider = assignOfflineProvider;
        this.assignHelper = assignHelper;
        this.groupsProvider = groupsProvider;
        this.groupId = 0; // Group ID to show.
        this.groupInfo = {
            groups: [],
            separateGroups: false,
            visibleGroups: false
        };
        this.moduleId = navParams.get('moduleId');
        this.courseId = navParams.get('courseId');
        this.groupId = navParams.get('groupId');
        this.selectedStatus = navParams.get('status');
        if (this.selectedStatus) {
            if (this.selectedStatus == __WEBPACK_IMPORTED_MODULE_7__providers_assign__["a" /* AddonModAssignProvider */].NEED_GRADING) {
                this.title = this.translate.instant('addon.mod_assign.numberofsubmissionsneedgrading');
            }
            else {
                this.title = this.translate.instant('addon.mod_assign.submissionstatus_' + this.selectedStatus);
            }
        }
        else {
            this.title = this.translate.instant('addon.mod_assign.numberofparticipants');
        }
        // Update data if some grade changes.
        this.gradedObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_assign__["a" /* AddonModAssignProvider */].GRADED_EVENT, function (data) {
            if (_this.loaded && _this.assign && data.assignmentId == _this.assign.id &&
                data.userId == sitesProvider.getCurrentSiteUserId()) {
                // Grade changed, refresh the data.
                _this.loaded = false;
                _this.refreshAllData(true).finally(function () {
                    _this.loaded = true;
                });
            }
        }, sitesProvider.getCurrentSiteId());
        // Refresh data if this assign is synchronized.
        var events = [__WEBPACK_IMPORTED_MODULE_9__providers_assign_sync__["b" /* AddonModAssignSyncProvider */].AUTO_SYNCED, __WEBPACK_IMPORTED_MODULE_9__providers_assign_sync__["b" /* AddonModAssignSyncProvider */].MANUAL_SYNCED];
        this.syncObserver = eventsProvider.onMultiple(events, function (data) {
            if (!_this.loaded || data.context == 'submission-list') {
                return;
            }
            _this.loaded = false;
            _this.refreshAllData(false).finally(function () {
                _this.loaded = true;
            });
        }, this.sitesProvider.getCurrentSiteId());
    }
    /**
     * Component being initialized.
     */
    AddonModAssignSubmissionListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchAssignment(true).finally(function () {
            if (!_this.selectedSubmissionId && _this.splitviewCtrl.isOn() && _this.submissions.length > 0) {
                // Take first and load it.
                _this.loadSubmission(_this.submissions[0]);
            }
            _this.loaded = true;
        });
    };
    /**
     * Fetch assignment data.
     *
     * @param sync Whether to try to synchronize data.
     * @return Promise resolved when done.
     */
    AddonModAssignSubmissionListPage.prototype.fetchAssignment = function (sync) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, result, error_1, _b, _c, error_2;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 9, , 10]);
                        // Get assignment data.
                        _a = this;
                        return [4 /*yield*/, this.assignProvider.getAssignment(this.courseId, this.moduleId)];
                    case 1:
                        // Get assignment data.
                        _a.assign = _d.sent();
                        this.title = this.assign.name || this.title;
                        if (!sync) return [3 /*break*/, 5];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_9__providers_assign_sync__["a" /* AddonModAssignSync */].instance.syncAssign(this.assign.id)];
                    case 3:
                        result = _d.sent();
                        if (result && result.updated) {
                            this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_9__providers_assign_sync__["b" /* AddonModAssignSyncProvider */].MANUAL_SYNCED, {
                                assignId: this.assign.id,
                                warnings: result.warnings,
                                gradesBlocked: result.gradesBlocked,
                                context: 'submission-list',
                            }, this.sitesProvider.getCurrentSiteId());
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _d.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        // Get assignment submissions.
                        _b = this;
                        return [4 /*yield*/, this.assignProvider.getSubmissions(this.assign.id, { cmId: this.assign.cmid })];
                    case 6:
                        // Get assignment submissions.
                        _b.submissionsData = _d.sent();
                        if (!this.submissionsData.canviewsubmissions) {
                            // User shouldn't be able to reach here.
                            throw new Error('Cannot view submissions.');
                        }
                        // Check if groupmode is enabled to avoid showing wrong numbers.
                        _c = this;
                        return [4 /*yield*/, this.groupsProvider.getActivityGroupInfo(this.assign.cmid, false)];
                    case 7:
                        // Check if groupmode is enabled to avoid showing wrong numbers.
                        _c.groupInfo = _d.sent();
                        return [4 /*yield*/, this.setGroup(this.groupsProvider.validateGroupId(this.groupId, this.groupInfo))];
                    case 8:
                        _d.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        error_2 = _d.sent();
                        this.domUtils.showErrorModalDefault(error_2, 'Error getting assigment data.');
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set group to see the summary.
     *
     * @param groupId Group ID.
     * @return Resolved when done.
     */
    AddonModAssignSubmissionListPage.prototype.setGroup = function (groupId) {
        var _this = this;
        this.groupId = groupId;
        this.haveAllParticipants = true;
        if (!this.sitesProvider.getCurrentSite().wsAvailable('mod_assign_list_participants')) {
            // Submissions are not displayed in Moodle 3.1 without the local plugin, see MOBILE-2968.
            this.haveAllParticipants = false;
            this.submissions = [];
            return Promise.resolve();
        }
        // Fetch submissions and grades.
        var promises = [
            this.assignHelper.getSubmissionsUserData(this.assign, this.submissionsData.submissions, this.groupId),
            // Get assignment grades only if workflow is not enabled to check grading date.
            !this.assign.markingworkflow ? this.assignProvider.getAssignmentGrades(this.assign.id, { cmId: this.assign.cmid }) :
                Promise.resolve(null),
        ];
        return Promise.all(promises).then(function (_a) {
            var submissions = _a[0], grades = _a[1];
            // Filter the submissions to get only the ones with the right status and add some extra data.
            var getNeedGrading = _this.selectedStatus == __WEBPACK_IMPORTED_MODULE_7__providers_assign__["a" /* AddonModAssignProvider */].NEED_GRADING, searchStatus = getNeedGrading ? __WEBPACK_IMPORTED_MODULE_7__providers_assign__["a" /* AddonModAssignProvider */].SUBMISSION_STATUS_SUBMITTED : _this.selectedStatus, promises = [], showSubmissions = [];
            submissions.forEach(function (submission) {
                if (!searchStatus || searchStatus == submission.status) {
                    promises.push(_this.assignOfflineProvider.getSubmissionGrade(_this.assign.id, submission.userid).catch(function () {
                        // Ignore errors.
                    }).then(function (data) {
                        var promise, notSynced = false;
                        // Load offline grades.
                        if (data && submission.timemodified < data.timemodified) {
                            notSynced = true;
                        }
                        if (getNeedGrading) {
                            // Only show the submissions that need to be graded.
                            promise = _this.assignProvider.needsSubmissionToBeGraded(submission, _this.assign.id);
                        }
                        else {
                            promise = Promise.resolve(true);
                        }
                        return promise.then(function (add) {
                            if (!add) {
                                return;
                            }
                            if (submission.gradingstatus == 'graded' && !_this.assign.markingworkflow) {
                                // Get the last grade of the submission.
                                var grade = grades.filter(function (grade) {
                                    return grade.userid == submission.userid;
                                }).reduce(function (a, b) {
                                    return (a.timemodified > b.timemodified ? a : b);
                                });
                                if (grade && grade.timemodified < submission.timemodified) {
                                    submission.gradingstatus = __WEBPACK_IMPORTED_MODULE_7__providers_assign__["a" /* AddonModAssignProvider */].GRADED_FOLLOWUP_SUBMIT;
                                }
                            }
                            submission.statusColor = _this.assignProvider.getSubmissionStatusColor(submission.status);
                            submission.gradingColor = _this.assignProvider.getSubmissionGradingStatusColor(submission.gradingstatus);
                            // Show submission status if not submitted for grading.
                            if (submission.statusColor != 'success' || !submission.gradingstatus) {
                                submission.statusTranslated = _this.translate.instant('addon.mod_assign.submissionstatus_' +
                                    submission.status);
                            }
                            else {
                                submission.statusTranslated = '';
                            }
                            if (notSynced) {
                                submission.gradingStatusTranslationId = 'addon.mod_assign.gradenotsynced';
                                submission.gradingColor = '';
                            }
                            else if (submission.statusColor != 'danger' || submission.gradingColor != 'danger') {
                                // Show grading status if one of the statuses is not done.
                                submission.gradingStatusTranslationId =
                                    _this.assignProvider.getSubmissionGradingStatusTranslationId(submission.gradingstatus);
                            }
                            else {
                                submission.gradingStatusTranslationId = '';
                            }
                            showSubmissions.push(submission);
                        });
                    }));
                }
            });
            return Promise.all(promises).then(function () {
                _this.submissions = showSubmissions;
            });
        });
    };
    /**
     * Load a certain submission.
     *
     * @param submission The submission to load.
     */
    AddonModAssignSubmissionListPage.prototype.loadSubmission = function (submission) {
        if (this.selectedSubmissionId === submission.submitid && this.splitviewCtrl.isOn()) {
            // Already selected.
            return;
        }
        this.selectedSubmissionId = submission.submitid;
        this.splitviewCtrl.push('AddonModAssignSubmissionReviewPage', {
            courseId: this.courseId,
            moduleId: this.moduleId,
            submitId: submission.submitid,
            blindId: submission.blindid
        });
    };
    /**
     * Refresh all the data.
     *
     * @param sync Whether to try to synchronize data.
     * @return Promise resolved when done.
     */
    AddonModAssignSubmissionListPage.prototype.refreshAllData = function (sync) {
        var _this = this;
        var promises = [];
        promises.push(this.assignProvider.invalidateAssignmentData(this.courseId));
        if (this.assign) {
            promises.push(this.assignProvider.invalidateAllSubmissionData(this.assign.id));
            promises.push(this.assignProvider.invalidateAssignmentUserMappingsData(this.assign.id));
            promises.push(this.assignProvider.invalidateAssignmentGradesData(this.assign.id));
            promises.push(this.assignProvider.invalidateListParticipantsData(this.assign.id));
        }
        return Promise.all(promises).finally(function () {
            return _this.fetchAssignment(sync);
        });
    };
    /**
     * Refresh the list.
     *
     * @param refresher Refresher.
     */
    AddonModAssignSubmissionListPage.prototype.refreshList = function (refresher) {
        this.refreshAllData(true).finally(function () {
            refresher.complete();
        });
    };
    /**
     * Component being destroyed.
     */
    AddonModAssignSubmissionListPage.prototype.ngOnDestroy = function () {
        this.gradedObserver && this.gradedObserver.off();
        this.syncObserver && this.syncObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_11__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonModAssignSubmissionListPage.prototype, "splitviewCtrl", void 0);
    AddonModAssignSubmissionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-assign-submission-list',template:/*ion-inline-start:"F:\moodle\from github\Version2\moodleapp\src\addon\mod\assign\pages\submission-list\submission-list.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="moduleId"  [courseId]="courseId"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end></ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="loaded" (ionRefresh)="refreshList($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="loaded">\n\n            <core-empty-box *ngIf="!submissions || submissions.length == 0" icon="paper" [message]="\'addon.mod_assign.submissionstatus_\' | translate">\n\n            </core-empty-box>\n\n\n\n            <ion-list>\n\n                <ion-item text-wrap *ngIf="(groupInfo.separateGroups || groupInfo.visibleGroups)">\n\n                    <ion-label id="addon-assign-groupslabel" *ngIf="groupInfo.separateGroups">{{ \'core.groupsseparate\' | translate }}</ion-label>\n\n                    <ion-label id="addon-assign-groupslabel" *ngIf="groupInfo.visibleGroups">{{ \'core.groupsvisible\' | translate }}</ion-label>\n\n                    <ion-select [(ngModel)]="groupId" (ionChange)="setGroup(groupId)" aria-labelledby="addon-assign-groupslabel" interface="action-sheet">\n\n                        <ion-option *ngFor="let groupOpt of groupInfo.groups" [value]="groupOpt.id">{{groupOpt.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <!-- List of submissions. -->\n\n                <ng-container *ngFor="let submission of submissions">\n\n                    <a ion-item text-wrap (click)="loadSubmission(submission)" [class.core-split-item-selected]="submission.submitid == selectedSubmissionId">\n\n                        <ion-avatar core-user-avatar [user]="submission" [linkProfile]="false" item-start></ion-avatar>\n\n                        <h2 *ngIf="submission.userfullname">{{submission.userfullname}}</h2>\n\n                        <h2 *ngIf="!submission.userfullname">{{ \'addon.mod_assign.hiddenuser\' | translate }}{{submission.blindid}}</h2>\n\n                        <p *ngIf="assign.teamsubmission">\n\n                            <span *ngIf="submission.groupname">{{submission.groupname}}</span>\n\n                            <span *ngIf="assign.preventsubmissionnotingroup && !submission.groupname && submission.noGroups && !submission.blindid" class="text-danger">{{ \'addon.mod_assign.noteam\' | translate }}</span>\n\n                            <span *ngIf="assign.preventsubmissionnotingroup && !submission.groupname && submission.manyGroups && !submission.blindid" class="text-danger">{{ \'addon.mod_assign.multipleteams\' | translate }}</span>\n\n                            <span *ngIf="!assign.preventsubmissionnotingroup && !submission.groupname">{{ \'addon.mod_assign.defaultteam\' | translate }}</span>\n\n                        </p>\n\n                        <ion-badge text-center text-wrap [color]="submission.statusColor" *ngIf="submission.statusTranslated">\n\n                            {{ submission.statusTranslated }}\n\n                        </ion-badge>\n\n                        <ion-badge text-center text-wrap [color]="submission.gradingColor" *ngIf="submission.gradingStatusTranslationId">\n\n                            {{ submission.gradingStatusTranslationId | translate }}\n\n                        </ion-badge>\n\n                    </a>\n\n                </ng-container>\n\n\n\n                <ion-item text-wrap class="core-warning-card" *ngIf="!haveAllParticipants" icon-start>\n\n                    <ion-icon name="warning"></ion-icon>\n\n                    {{ \'addon.mod_assign.notallparticipantsareshown\' | translate }}\n\n                </ion-item>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>\n\n'/*ion-inline-end:"F:\moodle\from github\Version2\moodleapp\src\addon\mod\assign\pages\submission-list\submission-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_assign__["a" /* AddonModAssignProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_assign_offline__["a" /* AddonModAssignOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_helper__["a" /* AddonModAssignHelperProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_groups__["a" /* CoreGroupsProvider */]])
    ], AddonModAssignSubmissionListPage);
    return AddonModAssignSubmissionListPage;
}());

//# sourceMappingURL=submission-list.js.map

/***/ })

});
//# sourceMappingURL=125.js.map
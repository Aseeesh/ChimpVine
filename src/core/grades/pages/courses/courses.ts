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

import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import { CoreGradesProvider } from '../../providers/grades';
import { CoreDomUtilsProvider } from '@providers/utils/dom';
import { CoreSplitViewComponent } from '@components/split-view/split-view';
import { CoreGradesHelperProvider } from '../../providers/helper';
import { CoreTagProvider } from '@core/tag/providers/tag';
import { CoreTagAreaDelegate } from '@core/tag/providers/area-delegate';

/**
 * Page that displays courses grades (main menu option).
 */
@IonicPage({ segment: 'core-grades-courses' })
@Component({
    selector: 'page-core-grades-courses',
    templateUrl: 'courses.html',
})
export class CoreGradesCoursesPage {
    @ViewChild(Content) content: Content;
    @ViewChild(CoreSplitViewComponent) splitviewCtrl: CoreSplitViewComponent;

    grades = [];
    courseId: number;
    userId: number;
    gradesLoaded = false;
    tagName: string;
    collectionId: number;
    areaId: number;
    fromContextId: number;
    contextId: number;
    recursive: boolean;
    areas: Array<{
        id: number,
        componentName: string,
        itemType: string,
        nameKey: string,
        items: any[],
        canLoadMore: boolean,
        badge: string
    }>;
    tagId: number;
    selectedAreaId: number;
    hasUnsupportedAreas = false;
    iosSharedFiles: number;
    protected sitesObserver: any;
    protected isDestroyed = false;
    categorylist: {categoryId: number, categoryName: string, link: string}[];
    accordindata: { grade: string; 
        subjectList?: {subjectId: number,
                    category?: {categoryId: number, categoryName: string, link: string}[],
                    rawgrade: any, courseFullName: string, showCategoryDetails?: boolean, icon?: string;}[];
     icon?: string; showDetails?: boolean; }[];
    activeActive: any;

    constructor(private gradesProvider: CoreGradesProvider, private domUtils: CoreDomUtilsProvider,
        private gradesHelper: CoreGradesHelperProvider,
        private tagProvider: CoreTagProvider,
        private tagAreaDelegate: CoreTagAreaDelegate) {
            this.accordindata=[
                { grade: 'Pre-k'},
                { grade: 'Kindergarten'},
                { grade: 'Grade1'},
                { grade: 'Grade2'},
                { grade: 'Grade3'},
                { grade: 'Grade4'},
                { grade: 'Grade5'},
                { grade: 'Grade6'},
                { grade: 'Grade7'},
                { grade: 'Grade8'},
                // { grade: '9th Grade'},
                // { grade: '10th Grade'} 
              
              ]
              this.categorylist = [
                  { categoryId: 1, categoryName: "Games", link: "" },
                  { categoryId: 2, categoryName: "Quizzes", link: ""},
                  { categoryId: 3, categoryName: "Additional-Resources", link: ""}
                ]
              this.accordindata.forEach(element => {
             
                  element.subjectList= [
                       {subjectId: 11, category: this.categorylist, rawgrade: null, courseFullName: "Math", showCategoryDetails: false, icon: 'ios-add-circle-outline'},
                      {subjectId: 39, category: this.categorylist, rawgrade: null, courseFullName: "English", showCategoryDetails: false, icon: 'ios-add-circle-outline'},
                       {subjectId: 13, category: this.categorylist, rawgrade: null, courseFullName: "Science", showCategoryDetails: false, icon: 'ios-add-circle-outline'},
                    //    {subjectId: 14, category: this.categorylist, rawgrade: null, courseFullName: "Social Studies", showCategoryDetails: false, icon: 'ios-add-circle-outline'}
                ];

                 
                 element.icon= 'ios-add-circle-outline', element.showDetails= false
              });
              this.activeActive='gradeList';
    }


    setActiveTag(tag){
        this.activeActive=tag; 
        }
    toggleDetails(data) {
        if (data.showDetails) {
          data.showDetails = false;
          data.icon = 'ios-add-circle-outline';
        } else {
          data.showDetails = true;
          data.icon = 'ios-remove-circle-outline';
        }
      }

      toggleCatgoryDetails(data) {
        if (data.showCategoryDetails) {
          data.showCategoryDetails = false;
          data.icon = 'ios-add-circle-outline';
        } else {
          data.showCategoryDetails = true;
          data.icon = 'ios-remove-circle-outline';
        }
      }
      GetTagDetails(tagName): Promise<any> {  
        this.tagName = tagName.replace(/\s/g, '');//"Pre-k/Math/Games"; 
        this.recursive = true;
        if(tagName=="Math/Blogs"||tagName=="English/Blogs"||tagName=="Science/Blogs"){
            
        this.collectionId = 7;
        }else{

        this.collectionId = 6;
        }
        this.tagId = 0;
        this.fromContextId = 0;
        this.areaId = 0;
        this.contextId = 0;
        return this.tagProvider.getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId,
                this.contextId, this.recursive, 0).then((areas) => {
            this.areas = [];
            this.hasUnsupportedAreas = false;

            return Promise.all(areas.map((area) => {
                return this.tagAreaDelegate.parseContent(area.component, area.itemtype, area.content).then((items) => {
                    if (!items || !items.length) {
                        // Tag area not supported, skip.
                        this.hasUnsupportedAreas = true;

                        return null;
                    }

                    return {
                        id: area.ta,
                        componentName: area.component,
                        itemType: area.itemtype,
                        nameKey: this.tagAreaDelegate.getDisplayNameKey(area.component, area.itemtype),
                        items,
                        canLoadMore: !!area.nextpageurl,
                        badge: items && items.length ? items.length + (area.nextpageurl ? '+' : '') : '',
                    };
                });
            })).then((areas) => { 
                this.areas = areas.filter((area) => area != null);
                if(this.areas.length>0){
                    this.openArea(this.areas[0]);
                }
            });
        }).catch((error) => {
            this.domUtils.showErrorModalDefault(error, 'Error loading tag index');
        });
    }

    openArea(area: any): void {
        
        this.selectedAreaId = area.id; 
        const params = {
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
        this.splitviewCtrl.isOn()
        this.splitviewCtrl.push('CoreTagIndexAreaPage', params);
    }
    /**
     * View loaded.
     */
    ionViewDidLoad(): void {
        if (this.courseId) {
            // There is the course to load, open the course in a new state.
            this.gotoCourseGrades(this.courseId);
        }

        this.fetchData().then(() => {
            if (!this.courseId && this.splitviewCtrl.isOn() && this.grades.length > 0) {
                this.gotoCourseGrades(this.grades[0].courseid);
            }

            // Add log in Moodle.
            return this.gradesProvider.logCoursesGradesView().catch(() => {
                // Ignore errors.
            });
        }).finally(() => {
            this.gradesLoaded = true;
        });
    }

    /**
     * Fetch all the data required for the view.
     *
     * @return Resolved when done.
     */
    fetchData(): Promise<any> {
        return this.gradesProvider.getCoursesGrades().then((grades) => {
            return this.gradesHelper.getGradesCourseData(grades).then((grades) => {
               this.grades = grades;
            });
        }).catch((error) => {
            this.domUtils.showErrorModalDefault(error, 'Error loading grades');
        });
    }

    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    refreshGrades(refresher: any): void {
        this.gradesProvider.invalidateCoursesGradesData().finally(() => {
            this.fetchData().finally(() => {
                refresher.complete();
            });
        });
    }

    /**
     * Navigate to the grades of the selected course.
     * @param courseId Course Id where to navigate.
     */
    gotoCourseGrades(courseId: number): void {
        this.courseId = courseId;
        this.splitviewCtrl.push('CoreGradesCoursePage', {courseId: courseId, userId: this.userId});
    }
}

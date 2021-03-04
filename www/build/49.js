webpackJsonp([49],{

/***/ 2256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreEmulatorCaptureMediaPageModule", function() { return CoreEmulatorCaptureMediaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capture_media__ = __webpack_require__(2416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
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






var CoreEmulatorCaptureMediaPageModule = /** @class */ (function () {
    function CoreEmulatorCaptureMediaPageModule() {
    }
    CoreEmulatorCaptureMediaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__capture_media__["a" /* CoreEmulatorCaptureMediaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__capture_media__["a" /* CoreEmulatorCaptureMediaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreEmulatorCaptureMediaPageModule);
    return CoreEmulatorCaptureMediaPageModule;
}());

//# sourceMappingURL=capture-media.module.js.map

/***/ }),

/***/ 2416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreEmulatorCaptureMediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_mimetype__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__ = __webpack_require__(1109);
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
 * Page to capture media in browser or desktop, or to capture audio in mobile devices.
 */
var CoreEmulatorCaptureMediaPage = /** @class */ (function () {
    function CoreEmulatorCaptureMediaPage(viewCtrl, params, domUtils, timeUtils, fileProvider, textUtils, cdr, plaform, media) {
        this.viewCtrl = viewCtrl;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.fileProvider = fileProvider;
        this.textUtils = textUtils;
        this.cdr = cdr;
        this.plaform = plaform;
        this.media = media;
        this.window = window;
        this.type = params.get('type');
        this.maxTime = params.get('maxTime');
        this.facingMode = params.get('facingMode') || 'environment';
        this.mimetype = params.get('mimetype');
        this.extension = params.get('extension');
        this.quality = params.get('quality') || 0.92;
        this.returnDataUrl = !!params.get('returnDataUrl');
    }
    /**
     * Component being initialized.
     */
    CoreEmulatorCaptureMediaPage.prototype.ngOnInit = function () {
        this.initVariables();
        if (this.isCordovaAudioCapture) {
            this.initCordovaMediaPlugin();
        }
        else {
            this.initHtmlCapture();
        }
    };
    /**
     * Init recording with Cordova media plugin.
     *
     * @return Promise resolved when ready.
     */
    CoreEmulatorCaptureMediaPage.prototype.initCordovaMediaPlugin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var absolutePath, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.filePath = this.getFilePath();
                        absolutePath = this.textUtils.concatenatePaths(this.fileProvider.getBasePathInstant(), this.filePath);
                        if (this.plaform.is('ios')) {
                            // In iOS we need to remove the file:// part.
                            absolutePath = absolutePath.replace(/^file:\/\//, '');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        // First create the file.
                        _a = this;
                        return [4 /*yield*/, this.fileProvider.createFile(this.filePath)];
                    case 2:
                        // First create the file.
                        _a.fileEntry = _b.sent();
                        // Now create the media instance.
                        this.mediaFile = this.media.create(absolutePath);
                        this.readyToCapture = true;
                        this.previewMedia = this.previewAudio.nativeElement;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.dismissWithError(-1, error_1.message || error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Init HTML recorder, for desktop apps.
     *
     * @return Promise resolved when done.
     */
    CoreEmulatorCaptureMediaPage.prototype.initHtmlCapture = function () {
        var _this = this;
        var constraints = {
            video: this.isAudio ? false : { facingMode: this.facingMode },
            audio: !this.isImage
        };
        return navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            var chunks = [];
            _this.localMediaStream = stream;
            if (!_this.isImage) {
                if (_this.isVideo) {
                    _this.previewMedia = _this.previewVideo.nativeElement;
                }
                else {
                    _this.previewMedia = _this.previewAudio.nativeElement;
                    _this.initAudioDrawer(_this.localMediaStream);
                    _this.audioDrawer.start();
                }
                _this.mediaRecorder = new _this.window.MediaRecorder(_this.localMediaStream, { mimeType: _this.mimetype });
                // When video or audio is recorded, add it to the list of chunks.
                _this.mediaRecorder.ondataavailable = function (e) {
                    if (e.data.size > 0) {
                        chunks.push(e.data);
                    }
                };
                // When recording stops, create a Blob element with the recording and set it to the video or audio.
                _this.mediaRecorder.onstop = function () {
                    _this.mediaBlob = new Blob(chunks);
                    chunks = [];
                    _this.previewMedia.src = window.URL.createObjectURL(_this.mediaBlob);
                };
            }
            if (_this.isImage || _this.isVideo) {
                var hasLoaded_1 = false, waitTimeout_1;
                // Listen for stream ready to display the stream.
                _this.streamVideo.nativeElement.onloadedmetadata = function () {
                    if (hasLoaded_1) {
                        // Already loaded or timeout triggered, stop.
                        return;
                    }
                    hasLoaded_1 = true;
                    clearTimeout(waitTimeout_1);
                    _this.readyToCapture = true;
                    _this.streamVideo.nativeElement.onloadedmetadata = null;
                    // Force change detection. Angular doesn't detect these async operations.
                    _this.cdr.detectChanges();
                };
                // Set the stream as the source of the video.
                if ('srcObject' in _this.streamVideo.nativeElement) {
                    _this.streamVideo.nativeElement.srcObject = _this.localMediaStream;
                }
                else {
                    // Fallback for old browsers.
                    // See https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject#Examples
                    _this.streamVideo.nativeElement.src = window.URL.createObjectURL(_this.localMediaStream);
                }
                // If stream isn't ready in a while, show error.
                waitTimeout_1 = setTimeout(function () {
                    if (!hasLoaded_1) {
                        // Show error.
                        hasLoaded_1 = true;
                        _this.dismissWithError(-1, 'Cannot connect to webcam.');
                    }
                }, 10000);
            }
            else {
                // It's ready to capture.
                _this.readyToCapture = true;
            }
        }).catch(function (error) {
            _this.dismissWithError(-1, error.message || error);
        });
    };
    /**
     * Initialize the audio drawer. This code has been extracted from MDN's example on MediaStream Recording:
     * https://github.com/mdn/web-dictaphone
     *
     * @param stream Stream returned by getUserMedia.
     */
    CoreEmulatorCaptureMediaPage.prototype.initAudioDrawer = function (stream) {
        var skip = true, running = false;
        var audioCtx = new (this.window.AudioContext || this.window.webkitAudioContext)(), canvasCtx = this.streamAudio.nativeElement.getContext('2d'), source = audioCtx.createMediaStreamSource(stream), analyser = audioCtx.createAnalyser(), bufferLength = analyser.frequencyBinCount, dataArray = new Uint8Array(bufferLength), width = this.streamAudio.nativeElement.width, height = this.streamAudio.nativeElement.height, drawAudio = function () {
            if (!running) {
                return;
            }
            // Update the draw every animation frame.
            requestAnimationFrame(drawAudio);
            // Skip half of the frames to improve performance, shouldn't affect the smoothness.
            skip = !skip;
            if (skip) {
                return;
            }
            var sliceWidth = width / bufferLength;
            var x = 0;
            analyser.getByteTimeDomainData(dataArray);
            canvasCtx.fillStyle = 'rgb(200, 200, 200)';
            canvasCtx.fillRect(0, 0, width, height);
            canvasCtx.lineWidth = 1;
            canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
            canvasCtx.beginPath();
            for (var i = 0; i < bufferLength; i++) {
                var v = dataArray[i] / 128.0, y = v * height / 2;
                if (i === 0) {
                    canvasCtx.moveTo(x, y);
                }
                else {
                    canvasCtx.lineTo(x, y);
                }
                x += sliceWidth;
            }
            canvasCtx.lineTo(width, height / 2);
            canvasCtx.stroke();
        };
        analyser.fftSize = 2048;
        source.connect(analyser);
        this.audioDrawer = {
            start: function () {
                if (running) {
                    return;
                }
                running = true;
                drawAudio();
            },
            stop: function () {
                running = false;
            }
        };
    };
    /**
     * Initialize some variables based on the params.
     */
    CoreEmulatorCaptureMediaPage.prototype.initVariables = function () {
        if (this.type == 'captureimage') {
            this.isCaptureImage = true;
            this.type = 'image';
        }
        // Initialize some data based on the type of media to capture.
        if (this.type == 'video') {
            this.isVideo = true;
            this.title = 'core.capturevideo';
        }
        else if (this.type == 'audio') {
            this.isAudio = true;
            this.title = 'core.captureaudio';
        }
        else if (this.type == 'image') {
            this.isImage = true;
            this.title = 'core.captureimage';
        }
        this.isCordovaAudioCapture = __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreApp */].instance.isMobile() && this.isAudio;
        if (this.isCordovaAudioCapture) {
            this.extension = this.plaform.is('ios') ? 'wav' : 'aac';
            this.returnDataUrl = false;
        }
    };
    /**
     * Main action clicked: record or stop recording.
     */
    CoreEmulatorCaptureMediaPage.prototype.actionClicked = function () {
        var _this = this;
        if (this.isCapturing) {
            // It's capturing, stop.
            this.stopCapturing();
            this.cdr.detectChanges();
        }
        else {
            if (!this.isImage) {
                // Start the capture.
                this.isCapturing = true;
                this.resetChrono = false;
                if (this.isCordovaAudioCapture) {
                    this.mediaFile.startRecord();
                    this.previewMedia.src = '';
                }
                else {
                    this.mediaRecorder && this.mediaRecorder.start();
                }
                this.cdr.detectChanges();
            }
            else {
                // Get the image from the video and set it to the canvas, using video width/height.
                var width = this.streamVideo.nativeElement.videoWidth, height = this.streamVideo.nativeElement.videoHeight, loadingModal_1 = this.domUtils.showModalLoading();
                this.imgCanvas.nativeElement.width = width;
                this.imgCanvas.nativeElement.height = height;
                this.imgCanvas.nativeElement.getContext('2d').drawImage(this.streamVideo.nativeElement, 0, 0, width, height);
                // Convert the image to blob and show it in an image element.
                this.imgCanvas.nativeElement.toBlob(function (blob) {
                    loadingModal_1.dismiss();
                    _this.mediaBlob = blob;
                    _this.previewImage.nativeElement.setAttribute('src', window.URL.createObjectURL(_this.mediaBlob));
                    _this.hasCaptured = true;
                }, this.mimetype, this.quality);
            }
        }
    };
    /**
     * User cancelled.
     */
    CoreEmulatorCaptureMediaPage.prototype.cancel = function () {
        // Send a "cancelled" error like the Cordova plugin does.
        this.dismissWithError(3, 'Canceled.', 'Camera cancelled');
        if (this.isCordovaAudioCapture) {
            // Delete the tmp file.
            this.fileProvider.removeFile(this.filePath);
        }
    };
    /**
     * Discard the captured media.
     */
    CoreEmulatorCaptureMediaPage.prototype.discard = function () {
        this.previewMedia && this.previewMedia.pause();
        this.streamVideo && this.streamVideo.nativeElement.play();
        this.audioDrawer && this.audioDrawer.start();
        this.hasCaptured = false;
        this.isCapturing = false;
        this.resetChrono = true;
        delete this.mediaBlob;
        this.cdr.detectChanges();
    };
    /**
     * Close the modal, returning some data (success).
     *
     * @param data Data to return.
     */
    CoreEmulatorCaptureMediaPage.prototype.dismissWithData = function (data) {
        this.viewCtrl.dismiss(data, 'success');
    };
    /**
     * Close the modal, returning an error.
     *
     * @param code Error code. Will not be used if it's a Camera capture.
     * @param message Error message.
     * @param cameraMessage A specific message to use if it's a Camera capture. If not set, message will be used.
     */
    CoreEmulatorCaptureMediaPage.prototype.dismissWithError = function (code, message, cameraMessage) {
        var isCamera = this.isImage && !this.isCaptureImage, error = isCamera ? (cameraMessage || message) : { code: code, message: message };
        this.viewCtrl.dismiss(error, 'error');
    };
    /**
     * Done capturing, write the file.
     */
    CoreEmulatorCaptureMediaPage.prototype.done = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileEntry, loadingModal, metadata, mimetype, mediaFile, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.returnDataUrl) {
                            // Return the image as a base64 string.
                            this.dismissWithData(this.imgCanvas.nativeElement.toDataURL(this.mimetype, this.quality));
                            return [2 /*return*/];
                        }
                        if (!this.mediaBlob && !this.isCordovaAudioCapture) {
                            // Shouldn't happen.
                            this.domUtils.showErrorModal('Please capture the media first.');
                            return [2 /*return*/];
                        }
                        fileEntry = this.fileEntry;
                        loadingModal = this.domUtils.showModalLoading();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, 8, 9]);
                        if (!!this.isCordovaAudioCapture) return [3 /*break*/, 3];
                        // Capturing in browser. Write the blob in a file.
                        if (!this.mediaBlob) {
                            // Shouldn't happen.
                            throw new Error('Please capture the media first.');
                        }
                        return [4 /*yield*/, this.fileProvider.writeFile(this.getFilePath(), this.mediaBlob)];
                    case 2:
                        fileEntry = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(this.isImage && !this.isCaptureImage)) return [3 /*break*/, 4];
                        this.dismissWithData(fileEntry.toURL());
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.fileProvider.getMetadata(fileEntry)];
                    case 5:
                        metadata = _a.sent();
                        mimetype = null;
                        if (this.extension) {
                            mimetype = __WEBPACK_IMPORTED_MODULE_5__providers_utils_mimetype__["a" /* CoreMimetypeUtils */].instance.getMimeType(this.extension);
                        }
                        mediaFile = {
                            name: fileEntry.name,
                            fullPath: fileEntry.nativeURL || fileEntry.fullPath,
                            type: mimetype,
                            lastModifiedDate: metadata.modificationTime,
                            size: metadata.size,
                            getFormatData: function (successFn, errorFn) {
                                // Nothing to do.
                            }
                        };
                        this.dismissWithData([mediaFile]);
                        _a.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        err_1 = _a.sent();
                        this.domUtils.showErrorModal(err_1);
                        return [3 /*break*/, 9];
                    case 8:
                        loadingModal.dismiss();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get path to the file where the media will be stored.
     *
     * @return Path.
     */
    CoreEmulatorCaptureMediaPage.prototype.getFilePath = function () {
        var fileName = this.type + '_' + this.timeUtils.readableTimestamp() + '.' + this.extension;
        return this.textUtils.concatenatePaths(__WEBPACK_IMPORTED_MODULE_3__providers_file__["b" /* CoreFileProvider */].TMPFOLDER, 'media/' + fileName);
    };
    /**
     * Stop capturing. Only for video and audio.
     */
    CoreEmulatorCaptureMediaPage.prototype.stopCapturing = function () {
        this.isCapturing = false;
        this.hasCaptured = true;
        if (this.isCordovaAudioCapture) {
            this.mediaFile.stopRecord();
            this.previewMedia.src = this.fileProvider.convertFileSrc(this.fileEntry.toURL());
        }
        else {
            this.streamVideo && this.streamVideo.nativeElement.pause();
            this.audioDrawer && this.audioDrawer.stop();
            this.mediaRecorder && this.mediaRecorder.stop();
        }
    };
    /**
     * Page destroyed.
     */
    CoreEmulatorCaptureMediaPage.prototype.ngOnDestroy = function () {
        this.mediaFile && this.mediaFile.release();
        if (this.localMediaStream) {
            var tracks = this.localMediaStream.getTracks();
            tracks.forEach(function (track) {
                track.stop();
            });
        }
        this.streamVideo && this.streamVideo.nativeElement.pause();
        this.previewMedia && this.previewMedia.pause();
        this.audioDrawer && this.audioDrawer.stop();
        delete this.mediaBlob;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('streamVideo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreEmulatorCaptureMediaPage.prototype, "streamVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('previewVideo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreEmulatorCaptureMediaPage.prototype, "previewVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('imgCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreEmulatorCaptureMediaPage.prototype, "imgCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('previewImage'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreEmulatorCaptureMediaPage.prototype, "previewImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('streamAudio'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreEmulatorCaptureMediaPage.prototype, "streamAudio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('previewAudio'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreEmulatorCaptureMediaPage.prototype, "previewAudio", void 0);
    CoreEmulatorCaptureMediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-emulator-capture-media',template:/*ion-inline-start:"F:\moodle\from github\Version2\moodleapp\src\core\emulator\pages\capture-media\capture-media.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="cancel()">{{ \'core.cancel\' | translate }}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{ title | translate }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button *ngIf="hasCaptured" (click)="done()">{{ \'core.done\' | translate }}</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content  class="has-footer">\n\n    <core-loading [hideUntil]="readyToCapture">\n\n        <div class="core-av-wrapper">\n\n            <!-- Video stream for image and video. -->\n\n            <video *ngIf="!isAudio" [hidden]="hasCaptured" class="core-webcam-stream" autoplay #streamVideo></video>\n\n\n\n            <!-- For video recording, use 2 videos and show/hide them because a CSS rule caused problems with the controls. -->\n\n            <video *ngIf="isVideo" [hidden]="!hasCaptured" class="core-webcam-video-captured" controls #previewVideo></video>\n\n\n\n            <!-- Canvas to treat the image and an img to show the result. -->\n\n            <canvas *ngIf="isImage" class="core-webcam-image-canvas" #imgCanvas></canvas>\n\n            <img *ngIf="isImage" [hidden]="!hasCaptured" class="core-webcam-image" alt="{{ \'core.capturedimage\' | translate }}" #previewImage>\n\n\n\n            <!-- Recording audio. -->\n\n            <div *ngIf="isAudio" class="core-audio-record-container">\n\n                <!-- Canvas to show audio waves when recording audio in desktop. -->\n\n                <canvas [hidden]="hasCaptured || isCordovaAudioCapture" class="core-audio-canvas" #streamAudio></canvas>\n\n\n\n                <!-- Button to start/stop in mobile devices. -->\n\n                <button ion-button icon-only clear *ngIf="!hasCaptured && isCordovaAudioCapture" (click)="actionClicked()" [attr.aria-label]="title">\n\n                    <ion-icon *ngIf="!isCapturing" name="microphone"></ion-icon>\n\n                    <ion-icon *ngIf="isCapturing" name="square"></ion-icon>\n\n                </button>\n\n\n\n                <!-- Audio player to listen to the result. -->\n\n                <audio [hidden]="!hasCaptured" class="core-audio-captured" controls #previewAudio></audio>\n\n            </div>\n\n        </div>\n\n    </core-loading>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-row *ngIf="readyToCapture">\n\n        <ion-col></ion-col>\n\n        <ion-col text-center>\n\n            <button ion-button icon-only clear *ngIf="!hasCaptured && !isCordovaAudioCapture" (click)="actionClicked()" [attr.aria-label]="title">\n\n                <ion-icon *ngIf="!isCapturing && isAudio" name="microphone"></ion-icon>\n\n                <ion-icon *ngIf="!isCapturing && isVideo" name="videocam"></ion-icon>\n\n                <ion-icon *ngIf="isImage" name="camera"></ion-icon>\n\n                <ion-icon *ngIf="isCapturing" name="square"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only clear *ngIf="hasCaptured" (click)="discard()" [attr.aria-label]="\'core.discard\' | translate">\n\n                <ion-icon name="trash"></ion-icon>\n\n            </button>\n\n        </ion-col>\n\n        <ion-col padding text-end class="chrono-container">\n\n            <core-chrono *ngIf="!isImage" [hidden]="hasCaptured" [running]="isCapturing" [reset]="resetChrono" [endTime]="maxTime" (onEnd)="stopCapturing()"></core-chrono>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"F:\moodle\from github\Version2\moodleapp\src\core\emulator\pages\capture-media\capture-media.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_time__["b" /* CoreTimeUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_file__["b" /* CoreFileProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__["b" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__["a" /* Media */]])
    ], CoreEmulatorCaptureMediaPage);
    return CoreEmulatorCaptureMediaPage;
}());

//# sourceMappingURL=capture-media.js.map

/***/ })

});
//# sourceMappingURL=49.js.map
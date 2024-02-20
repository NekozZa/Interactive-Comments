/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Script/comFunction.js":
/*!*******************************!*\
  !*** ./Script/comFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeRows: () => (/* binding */ changeRows),\n/* harmony export */   editComment: () => (/* binding */ editComment),\n/* harmony export */   replyComment: () => (/* binding */ replyComment),\n/* harmony export */   sendComment: () => (/* binding */ sendComment)\n/* harmony export */ });\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_json__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./Script/index.js\");\n\r\n\r\nconst comments = (_data_json__WEBPACK_IMPORTED_MODULE_0___default().comments);\r\nvar newComment;\r\n\r\nfunction sendComment(content, id, currentUser){\r\n    newComment = comments.reduce((result, currentObject) => {\r\n        return {...result, ...currentObject};\r\n    }, {});\r\n\r\n    comments.push(newComment);\r\n    newComment.id = id;\r\n    newComment.content = content;\r\n    newComment.createdAt = '1 hour ago';\r\n    newComment.score = 0;\r\n    newComment.user.image.webp = currentUser.image.webp;\r\n    newComment.user.username = currentUser.username;\r\n    newComment.replies = [];\r\n    \r\n}\r\n\r\nfunction changeRows(numRows, gridContainer){\r\n    // numRows = numRows + 1;\r\n    gridContainer.style.gridTemplateRows = `repeat(${numRows}, auto)`;\r\n    gridContainer.style.height= `${numRows * 160}px`;\r\n    console.log(numRows)\r\n}\r\n\r\nfunction editComment(event, clickHandler, editBtn){\r\n    var boxChat = event.target.parentNode.parentNode.parentNode;\r\n    boxChat.style.height = '200px';\r\n    if(boxChat.parentNode.classList.contains('rep-container')){\r\n        boxChat.parentNode.style.gridRow = 'span 2';\r\n    }\r\n    \r\n    boxChat.style.gridRow = 'span 2';\r\n    boxChat.style.marginBottom = '10px';\r\n\r\n    var parentElement = event.target.parentNode.parentNode;\r\n    var target = parentElement.querySelector('.com-details');\r\n    target.readOnly = false;\r\n    target.style.outline = '1px solid hsl(238, 40%, 52%)';\r\n    target.style.borderRadius = '5px';\r\n\r\n    function focusHandler() {\r\n        target.style.border = '1px solid hsl(238, 40%, 52%)';\r\n        target.style.color = 'black';\r\n    }\r\n\r\n    target.addEventListener('focus', focusHandler);\r\n    \r\n\r\n    var updateBtn = document.createElement('btn');\r\n    updateBtn.classList.add('update-btn');\r\n    updateBtn.innerHTML = 'Update';\r\n\r\n    \r\n\r\n    updateBtn.addEventListener('click', () => {\r\n        boxChat.style.height = '150px';\r\n        target.readOnly = true;\r\n        target.style.outline = 'none';\r\n        target.style.border = 'none';\r\n        target.style.color = 'hsl(211, 10%, 45%)';\r\n        updateBtn.remove();\r\n        boxChat.style.gridRow = 'span 0';\r\n        target.removeEventListener('focus', focusHandler);\r\n        editBtn.addEventListener('click', clickHandler);\r\n    });\r\n\r\n    boxChat.appendChild(updateBtn);\r\n    \r\n    \r\n}\r\n\r\nfunction replyComment(event, repBtn, clickHandler, currentUser) {\r\n    var boxChat = event.target.parentNode.parentNode.parentNode;\r\n    var userRepUI = document.createElement('div');\r\n    userRepUI.classList.add('user');\r\n\r\n    var userAva = document.createElement('img');\r\n    userAva.classList.add('avatar', 'grid-item');\r\n    userAva.src = currentUser.image.webp;\r\n\r\n    var content = document.createElement('textarea');\r\n    content.classList.add('com-function', 'grid-item');\r\n\r\n    var button = document.createElement('button');\r\n    button.classList.add('send-btn', 'grid-item');\r\n    button.innerHTML = 'Reply';\r\n    buttonEventHandler(button, boxChat, currentUser, content, userRepUI, repBtn, clickHandler);\r\n\r\n    userRepUI.appendChild(userAva);\r\n    userRepUI.appendChild(content);\r\n    userRepUI.appendChild(button);\r\n\r\n    \r\n    // console.log(boxChat);\r\n\r\n    \r\n    \r\n    if(boxChat.classList.contains('reply')){\r\n        boxChat.parentNode.parentNode.insertBefore(userRepUI, boxChat.parentNode.nextSibling);\r\n\r\n    }else{\r\n        boxChat.parentNode.insertBefore(userRepUI, boxChat.nextSibling);\r\n    }\r\n    \r\n\r\n\r\n    // repBtn.addEventListener('click', clickHandler);\r\n}\r\n\r\nfunction buttonEventHandler(button, boxChat, currentUser, content, userRepUI, repBtn, eventHandler){\r\n    var clickHander = (event) => {\r\n        var reply = document.createElement('div');\r\n        reply.classList.add('rep-container');\r\n\r\n        var newBoxChat = document.createElement('div');\r\n        newBoxChat.classList.add('box-chat');\r\n        newBoxChat.classList.add('reply');\r\n\r\n        var vertical_line = document.createElement('div');\r\n        vertical_line.classList.add('vertical-line');\r\n\r\n        replyVoteUpdate(newBoxChat, currentUser);\r\n        replyCommentUpdate(newBoxChat, currentUser, content);\r\n        \r\n        reply.appendChild(vertical_line);\r\n        reply.appendChild(newBoxChat);\r\n\r\n        if(boxChat.classList.contains('reply')){\r\n            boxChat.parentNode.parentNode.insertBefore(reply, boxChat.parentNode.nextSibling);\r\n    \r\n        }else{\r\n            boxChat.parentNode.insertBefore(reply, boxChat.nextSibling);\r\n        }\r\n\r\n        repBtn.addEventListener('click', eventHandler);\r\n        userRepUI.remove();\r\n        \r\n    }\r\n\r\n    button.addEventListener('click', clickHander)\r\n}\r\n\r\nfunction replyVoteUpdate(parent, currentUser) {\r\n    var vote = document.createElement('div');\r\n    vote.classList.add('vote');\r\n    \r\n    var vote_content = document.createElement('div');\r\n    vote_content.classList.add('vote-content');\r\n    \r\n    var plus_icon = document.createElement('img');\r\n    plus_icon.src = './images/icon-plus.svg';\r\n    plus_icon.classList.add('plus-icon');\r\n    plus_icon.classList.add('icon');\r\n\r\n    var minus_icon = document.createElement('img');\r\n    minus_icon.src = './images/icon-minus.svg';\r\n    minus_icon.classList.add('minus-icon');\r\n    minus_icon.classList.add('icon');\r\n\r\n    var para = document.createElement('p');\r\n    para.classList.add('vote-num');\r\n    para.innerHTML = `0`;\r\n\r\n    vote_content.appendChild(plus_icon);\r\n    vote_content.appendChild(para);\r\n    vote_content.appendChild(minus_icon);\r\n\r\n    vote.appendChild(vote_content);\r\n    parent.appendChild(vote);\r\n}\r\n\r\nfunction replyCommentUpdate(parent, currentUser, inpContent) {\r\n    \r\n\r\n    var user_details = document.createElement('div');\r\n    user_details.classList.add('user-details');\r\n\r\n    var user_intel = document.createElement('div');\r\n    user_intel.classList.add('user-intel');\r\n\r\n    var avatar = document.createElement('img');\r\n    avatar.classList.add('avatar');\r\n    avatar.src = `${currentUser.image.webp}`;\r\n\r\n    var name = document.createElement('p');\r\n    name.classList.add('user-name');\r\n    name.innerHTML = `${currentUser.username}`;\r\n\r\n    var is_currentuser = document.createElement('p');\r\n    is_currentuser.classList.add('is-user');\r\n    is_currentuser.innerHTML = 'you';\r\n\r\n    var rep_time = document.createElement('p');\r\n    rep_time.classList.add('rep-time');\r\n    rep_time.innerHTML = `1 minute ago`;\r\n\r\n    var rep_btn = document.createElement('p');\r\n    rep_btn.classList.add('rep-btn');\r\n    rep_btn.classList.add('btn');\r\n    rep_btn.innerHTML = '<img src=\"./images/icon-reply.svg\" alt=\"\" class=\"rep-icon\">Reply';\r\n\r\n    var delete_btn = document.createElement('p');\r\n    delete_btn.innerHTML = '<img src=\"./images/icon-delete.svg\" alt=\"\" class=\"rep-icon\"> Delete';\r\n    delete_btn.classList.add('user-properties');\r\n    delete_btn.classList.add('delete-btn');\r\n\r\n    var edit_btn = document.createElement('p');\r\n    edit_btn.innerHTML = '<img src=\"./images/icon-edit.svg\" alt=\"\" class=\"rep-icon\"> Edit';\r\n    edit_btn.classList.add('user-properties');\r\n    edit_btn.classList.add('edit-btn');\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_1__.updateUserBtn)(edit_btn, delete_btn, rep_btn);\r\n\r\n    var content = document.createElement('div');\r\n    content.classList.add('com-details');\r\n\r\n    var content = document.createElement('textarea');\r\n    content.readOnly = true;\r\n    content.classList.add('com-details');\r\n    content.id = 'com-details';\r\n    content.value = `${inpContent.value}`;\r\n\r\n    user_intel.appendChild(avatar);\r\n    user_intel.appendChild(name);\r\n    user_intel.appendChild(is_currentuser);\r\n    user_intel.appendChild(rep_time);\r\n    user_intel.appendChild(delete_btn);\r\n    user_intel.appendChild(edit_btn);\r\n\r\n    user_details.appendChild(user_intel);\r\n    user_details.appendChild(content);\r\n\r\n    parent.appendChild(user_details);\r\n\r\n    \r\n\r\n}\n\n//# sourceURL=webpack://interactive-comments-section-main/./Script/comFunction.js?");

/***/ }),

/***/ "./Script/index.js":
/*!*************************!*\
  !*** ./Script/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentUpdate: () => (/* binding */ commentUpdate),\n/* harmony export */   updateUserBtn: () => (/* binding */ updateUserBtn)\n/* harmony export */ });\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_json__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comFunction */ \"./Script/comFunction.js\");\n\r\n\r\n\r\n\r\nconst userAva = document.getElementById('user-ava');\r\nconst sendBtn = document.getElementById('send-btn');\r\nconst userComment = document.getElementById('user-comment');\r\nconst userUI = document.getElementById('user-ui');\r\n\r\nconst currentUser = (_data_json__WEBPACK_IMPORTED_MODULE_0___default().currentUser);\r\nconst comments = (_data_json__WEBPACK_IMPORTED_MODULE_0___default().comments);\r\n\r\nvar allComments = document.createElement('div');\r\nallComments.classList.add('comments');\r\nallComments.appendChild(userUI);\r\ndocument.body.appendChild(allComments);\r\n\r\n\r\n\r\nvar idTracking = 1;\r\n\r\ncomments.forEach((comment) => {\r\n    addComment(comment);\r\n    if(comment.replies.length > 0){\r\n        replyUpdate(comment.replies);\r\n    }\r\n    \r\n}) \r\n\r\n\r\nuserAva.src = currentUser.image.webp;\r\n\r\nfunction voteUpdate(parent, object){\r\n    var vote = document.createElement('div');\r\n    vote.classList.add('vote');\r\n    \r\n    var vote_content = document.createElement('div');\r\n    vote_content.classList.add('vote-content');\r\n    \r\n    var plus_icon = document.createElement('img');\r\n    plus_icon.src = './images/icon-plus.svg';\r\n    plus_icon.classList.add('plus-icon');\r\n    plus_icon.classList.add('icon');\r\n\r\n    var minus_icon = document.createElement('img');\r\n    minus_icon.src = './images/icon-minus.svg';\r\n    minus_icon.classList.add('minus-icon');\r\n    minus_icon.classList.add('icon');\r\n\r\n    var para = document.createElement('p');\r\n    para.classList.add('vote-num');\r\n    para.innerHTML = `${object.score}`;\r\n\r\n    vote_content.appendChild(plus_icon);\r\n    vote_content.appendChild(para);\r\n    vote_content.appendChild(minus_icon);\r\n\r\n    vote.appendChild(vote_content);\r\n    parent.appendChild(vote);\r\n\r\n}\r\n\r\nfunction addComment(comment){\r\n    var box_chat = document.createElement('div');\r\n    box_chat.classList.add('box-chat');\r\n    \r\n    allComments.appendChild(box_chat);\r\n    \r\n    voteUpdate(box_chat, comment);\r\n    commentUpdate(box_chat, comment);\r\n}\r\n\r\nfunction commentUpdate(parent, object){\r\n    idTracking++;\r\n    var user = object.user;\r\n    \r\n    console.log(user);\r\n\r\n    var user_details = document.createElement('div');\r\n    user_details.classList.add('user-details');\r\n\r\n    var user_intel = document.createElement('div');\r\n    user_intel.classList.add('user-intel');\r\n\r\n    var avatar = document.createElement('img');\r\n    avatar.classList.add('avatar');\r\n    avatar.src = `${user.image.webp}`;\r\n\r\n    var name = document.createElement('p');\r\n    name.classList.add('user-name');\r\n    name.innerHTML = `${user.username}`;\r\n\r\n    var is_currentuser = document.createElement('p');\r\n    is_currentuser.classList.add('is-user');\r\n    is_currentuser.innerHTML = 'you';\r\n\r\n    var rep_time = document.createElement('p');\r\n    rep_time.classList.add('rep-time');\r\n    rep_time.innerHTML = `${object.createdAt}`;\r\n\r\n    var rep_btn = document.createElement('p');\r\n    rep_btn.classList.add('rep-btn');\r\n    rep_btn.classList.add('btn');\r\n    rep_btn.innerHTML = '<img src=\"./images/icon-reply.svg\" alt=\"\" class=\"rep-icon\">Reply';\r\n\r\n    var delete_btn = document.createElement('p');\r\n    delete_btn.innerHTML = '<img src=\"./images/icon-delete.svg\" alt=\"\" class=\"rep-icon\"> Delete';\r\n    delete_btn.classList.add('user-properties');\r\n    delete_btn.classList.add('delete-btn');\r\n\r\n    var edit_btn = document.createElement('p');\r\n    edit_btn.innerHTML = '<img src=\"./images/icon-edit.svg\" alt=\"\" class=\"rep-icon\"> Edit';\r\n    edit_btn.classList.add('user-properties');\r\n    edit_btn.classList.add('edit-btn');\r\n    updateUserBtn(edit_btn, delete_btn, rep_btn);\r\n\r\n    var content = document.createElement('div');\r\n    content.classList.add('com-details');\r\n\r\n    var content = document.createElement('textarea');\r\n    content.readOnly = true;\r\n    content.classList.add('com-details');\r\n    content.id = 'com-details'\r\n    content.value = `${object.content}`;\r\n\r\n    \r\n\r\n    user_intel.appendChild(avatar);\r\n    user_intel.appendChild(name);\r\n    if(user.username == currentUser.username){\r\n        user_intel.appendChild(is_currentuser);\r\n        user_intel.appendChild(rep_time);\r\n        user_intel.appendChild(delete_btn);\r\n        user_intel.appendChild(edit_btn);\r\n        \r\n    }else {\r\n        user_intel.appendChild(rep_time);\r\n        user_intel.appendChild(rep_btn);\r\n    }\r\n\r\n    \r\n\r\n    user_details.appendChild(user_intel);\r\n    user_details.appendChild(content);\r\n\r\n    parent.appendChild(user_details);\r\n}\r\n\r\nfunction replyUpdate(replies) {\r\n    replies.forEach((reply) => {\r\n        var rep_container = document.createElement('div');\r\n        rep_container.classList.add('rep-container');\r\n\r\n        var vertical_line = document.createElement('div');\r\n        vertical_line.classList.add('vertical-line');\r\n\r\n        var box_chat = document.createElement('div');\r\n        box_chat.classList.add('box-chat');\r\n        box_chat.classList.add('reply');\r\n        \r\n\r\n        voteUpdate(box_chat, reply);\r\n        commentUpdate(box_chat, reply);\r\n\r\n        rep_container.appendChild(vertical_line);\r\n        rep_container.appendChild(box_chat);\r\n\r\n        allComments.appendChild(rep_container);\r\n\r\n    })\r\n\r\n}\r\n\r\n\r\nfunction updateUserBtn(editBtn, deleteBtn, repBtn){\r\n    var editClickHandler = (event) => {\r\n        console.log(event.target);\r\n        event.target.style.color = 'hsl(238, 40%, 52%)';\r\n        editBtn.removeEventListener('click', editClickHandler);\r\n        (0,_comFunction__WEBPACK_IMPORTED_MODULE_1__.editComment)(event, editClickHandler, editBtn); \r\n    }\r\n\r\n    editBtn.addEventListener('click', editClickHandler);\r\n\r\n    var delClickHandler = (event) => {\r\n        idTracking--;\r\n        var boxChat = event.target.parentNode.parentNode.parentNode;\r\n        if(boxChat.classList.contains('reply')){\r\n            boxChat = boxChat.parentNode;\r\n        }\r\n        boxChat.remove();\r\n        (0,_comFunction__WEBPACK_IMPORTED_MODULE_1__.changeRows)(idTracking, allComments);\r\n    }\r\n\r\n    deleteBtn.addEventListener('click', delClickHandler);\r\n\r\n    var repClickHandler = (event) => {\r\n        idTracking++;\r\n        repBtn.removeEventListener('click', repClickHandler);\r\n        (0,_comFunction__WEBPACK_IMPORTED_MODULE_1__.replyComment)(event, repBtn, repClickHandler, currentUser);\r\n        (0,_comFunction__WEBPACK_IMPORTED_MODULE_1__.changeRows)(idTracking, allComments);\r\n    }\r\n\r\n    repBtn.addEventListener('click', repClickHandler);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nsendBtn.addEventListener('click', () => {\r\n    (0,_comFunction__WEBPACK_IMPORTED_MODULE_1__.sendComment)(userComment.value, idTracking, currentUser);\r\n    (0,_comFunction__WEBPACK_IMPORTED_MODULE_1__.changeRows)(idTracking, allComments);\r\n    addComment(comments[comments.length - 1]);  \r\n\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://interactive-comments-section-main/./Script/index.js?");

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = {\"currentUser\":{\"image\":{\"png\":\"./images/avatars/image-juliusomo.png\",\"webp\":\"./images/avatars/image-juliusomo.webp\"},\"username\":\"juliusomo\"},\"comments\":[{\"id\":1,\"content\":\"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.\",\"createdAt\":\"1 month ago\",\"score\":12,\"user\":{\"image\":{\"png\":\"./images/avatars/image-amyrobson.png\",\"webp\":\"./images/avatars/image-amyrobson.webp\"},\"username\":\"amyrobson\"},\"replies\":[]},{\"id\":2,\"content\":\"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!\",\"createdAt\":\"2 weeks ago\",\"score\":5,\"user\":{\"image\":{\"png\":\"./images/avatars/image-maxblagun.png\",\"webp\":\"./images/avatars/image-maxblagun.webp\"},\"username\":\"maxblagun\"},\"replies\":[{\"id\":3,\"content\":\"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.\",\"createdAt\":\"1 week ago\",\"score\":4,\"replyingTo\":\"maxblagun\",\"user\":{\"image\":{\"png\":\"./images/avatars/image-ramsesmiron.png\",\"webp\":\"./images/avatars/image-ramsesmiron.webp\"},\"username\":\"ramsesmiron\"}},{\"id\":4,\"content\":\"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.\",\"createdAt\":\"2 days ago\",\"score\":2,\"replyingTo\":\"ramsesmiron\",\"user\":{\"image\":{\"png\":\"./images/avatars/image-juliusomo.png\",\"webp\":\"./images/avatars/image-juliusomo.webp\"},\"username\":\"juliusomo\"}}]}]}\n\n//# sourceURL=webpack://interactive-comments-section-main/./data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./Script/index.js");
/******/ 	
/******/ })()
;
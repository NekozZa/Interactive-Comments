import jsonData from '../data.json';
import {commentUpdate, updateUserBtn} from './index';
const comments = jsonData.comments;
var newComment;

export function sendComment(content, id, currentUser){
    newComment = comments.reduce((result, currentObject) => {
        return {...result, ...currentObject};
    }, {});

    comments.push(newComment);
    newComment.id = id;
    newComment.content = content;
    newComment.createdAt = '1 hour ago';
    newComment.score = 0;
    newComment.user.image.webp = currentUser.image.webp;
    newComment.user.username = currentUser.username;
    newComment.replies = [];
    
}

export function changeRows(numRows, gridContainer){
    // numRows = numRows + 1;
    gridContainer.style.gridTemplateRows = `repeat(${numRows}, auto)`;
    gridContainer.style.height= `${numRows * 160}px`;
    console.log(numRows)
}

export function editComment(event, clickHandler, editBtn){
    var boxChat = event.target.parentNode.parentNode.parentNode;
    boxChat.style.height = '200px';
    if(boxChat.parentNode.classList.contains('rep-container')){
        boxChat.parentNode.style.gridRow = 'span 2';
    }
    
    boxChat.style.gridRow = 'span 2';
    boxChat.style.marginBottom = '10px';

    var parentElement = event.target.parentNode.parentNode;
    var target = parentElement.querySelector('.com-details');
    target.readOnly = false;
    target.style.outline = '1px solid hsl(238, 40%, 52%)';
    target.style.borderRadius = '5px';

    function focusHandler() {
        target.style.border = '1px solid hsl(238, 40%, 52%)';
        target.style.color = 'black';
    }

    target.addEventListener('focus', focusHandler);
    

    var updateBtn = document.createElement('btn');
    updateBtn.classList.add('update-btn');
    updateBtn.innerHTML = 'Update';

    

    updateBtn.addEventListener('click', () => {
        boxChat.style.height = '150px';
        target.readOnly = true;
        target.style.outline = 'none';
        target.style.border = 'none';
        target.style.color = 'hsl(211, 10%, 45%)';
        updateBtn.remove();
        boxChat.style.gridRow = 'span 0';
        target.removeEventListener('focus', focusHandler);
        editBtn.addEventListener('click', clickHandler);
    });

    boxChat.appendChild(updateBtn);
    
    
}

export function replyComment(event, repBtn, clickHandler, currentUser) {
    var boxChat = event.target.parentNode.parentNode.parentNode;
    var userRepUI = document.createElement('div');
    userRepUI.classList.add('user');

    var userAva = document.createElement('img');
    userAva.classList.add('avatar', 'grid-item');
    userAva.src = currentUser.image.webp;

    var content = document.createElement('textarea');
    content.classList.add('com-function', 'grid-item');

    var button = document.createElement('button');
    button.classList.add('send-btn', 'grid-item');
    button.innerHTML = 'Reply';
    buttonEventHandler(button, boxChat, currentUser, content, userRepUI, repBtn, clickHandler);

    userRepUI.appendChild(userAva);
    userRepUI.appendChild(content);
    userRepUI.appendChild(button);

    
    // console.log(boxChat);

    
    
    if(boxChat.classList.contains('reply')){
        boxChat.parentNode.parentNode.insertBefore(userRepUI, boxChat.parentNode.nextSibling);

    }else{
        boxChat.parentNode.insertBefore(userRepUI, boxChat.nextSibling);
    }
    


    // repBtn.addEventListener('click', clickHandler);
}

function buttonEventHandler(button, boxChat, currentUser, content, userRepUI, repBtn, eventHandler){
    var clickHander = (event) => {
        var reply = document.createElement('div');
        reply.classList.add('rep-container');

        var newBoxChat = document.createElement('div');
        newBoxChat.classList.add('box-chat');
        newBoxChat.classList.add('reply');

        var vertical_line = document.createElement('div');
        vertical_line.classList.add('vertical-line');

        replyVoteUpdate(newBoxChat, currentUser);
        replyCommentUpdate(newBoxChat, currentUser, content);
        
        reply.appendChild(vertical_line);
        reply.appendChild(newBoxChat);

        if(boxChat.classList.contains('reply')){
            boxChat.parentNode.parentNode.insertBefore(reply, boxChat.parentNode.nextSibling);
    
        }else{
            boxChat.parentNode.insertBefore(reply, boxChat.nextSibling);
        }

        repBtn.addEventListener('click', eventHandler);
        userRepUI.remove();
        
    }

    button.addEventListener('click', clickHander)
}

function replyVoteUpdate(parent, currentUser) {
    var vote = document.createElement('div');
    vote.classList.add('vote');
    
    var vote_content = document.createElement('div');
    vote_content.classList.add('vote-content');
    
    var plus_icon = document.createElement('img');
    plus_icon.src = './images/icon-plus.svg';
    plus_icon.classList.add('plus-icon');
    plus_icon.classList.add('icon');

    var minus_icon = document.createElement('img');
    minus_icon.src = './images/icon-minus.svg';
    minus_icon.classList.add('minus-icon');
    minus_icon.classList.add('icon');

    var para = document.createElement('p');
    para.classList.add('vote-num');
    para.innerHTML = `0`;

    vote_content.appendChild(plus_icon);
    vote_content.appendChild(para);
    vote_content.appendChild(minus_icon);

    vote.appendChild(vote_content);
    parent.appendChild(vote);
}

function replyCommentUpdate(parent, currentUser, inpContent) {
    

    var user_details = document.createElement('div');
    user_details.classList.add('user-details');

    var user_intel = document.createElement('div');
    user_intel.classList.add('user-intel');

    var avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = `${currentUser.image.webp}`;

    var name = document.createElement('p');
    name.classList.add('user-name');
    name.innerHTML = `${currentUser.username}`;

    var is_currentuser = document.createElement('p');
    is_currentuser.classList.add('is-user');
    is_currentuser.innerHTML = 'you';

    var rep_time = document.createElement('p');
    rep_time.classList.add('rep-time');
    rep_time.innerHTML = `1 minute ago`;

    var rep_btn = document.createElement('p');
    rep_btn.classList.add('rep-btn');
    rep_btn.classList.add('btn');
    rep_btn.innerHTML = '<img src="./images/icon-reply.svg" alt="" class="rep-icon">Reply';

    var delete_btn = document.createElement('p');
    delete_btn.innerHTML = '<img src="./images/icon-delete.svg" alt="" class="rep-icon"> Delete';
    delete_btn.classList.add('user-properties');
    delete_btn.classList.add('delete-btn');

    var edit_btn = document.createElement('p');
    edit_btn.innerHTML = '<img src="./images/icon-edit.svg" alt="" class="rep-icon"> Edit';
    edit_btn.classList.add('user-properties');
    edit_btn.classList.add('edit-btn');
    updateUserBtn(edit_btn, delete_btn, rep_btn);

    var content = document.createElement('div');
    content.classList.add('com-details');

    var content = document.createElement('textarea');
    content.readOnly = true;
    content.classList.add('com-details');
    content.id = 'com-details';
    content.value = `${inpContent.value}`;

    user_intel.appendChild(avatar);
    user_intel.appendChild(name);
    user_intel.appendChild(is_currentuser);
    user_intel.appendChild(rep_time);
    user_intel.appendChild(delete_btn);
    user_intel.appendChild(edit_btn);

    user_details.appendChild(user_intel);
    user_details.appendChild(content);

    parent.appendChild(user_details);

    

}
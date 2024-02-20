import jsonData from '../data.json';
import { sendComment, changeRows, editComment, replyComment } from './comFunction';


const userAva = document.getElementById('user-ava');
const sendBtn = document.getElementById('send-btn');
const userComment = document.getElementById('user-comment');
const userUI = document.getElementById('user-ui');

const currentUser = jsonData.currentUser;
const comments = jsonData.comments;

var allComments = document.createElement('div');
allComments.classList.add('comments');
allComments.appendChild(userUI);
document.body.appendChild(allComments);



var idTracking = 1;

comments.forEach((comment) => {
    addComment(comment);
    if(comment.replies.length > 0){
        replyUpdate(comment.replies);
    }
    
}) 


userAva.src = currentUser.image.webp;

function voteUpdate(parent, object){
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
    para.innerHTML = `${object.score}`;

    vote_content.appendChild(plus_icon);
    vote_content.appendChild(para);
    vote_content.appendChild(minus_icon);

    vote.appendChild(vote_content);
    parent.appendChild(vote);

}

function addComment(comment){
    var box_chat = document.createElement('div');
    box_chat.classList.add('box-chat');
    
    allComments.appendChild(box_chat);
    
    voteUpdate(box_chat, comment);
    commentUpdate(box_chat, comment);
}

export function commentUpdate(parent, object){
    idTracking++;
    var user = object.user;
    
    console.log(user);

    var user_details = document.createElement('div');
    user_details.classList.add('user-details');

    var user_intel = document.createElement('div');
    user_intel.classList.add('user-intel');

    var avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = `${user.image.webp}`;

    var name = document.createElement('p');
    name.classList.add('user-name');
    name.innerHTML = `${user.username}`;

    var is_currentuser = document.createElement('p');
    is_currentuser.classList.add('is-user');
    is_currentuser.innerHTML = 'you';

    var rep_time = document.createElement('p');
    rep_time.classList.add('rep-time');
    rep_time.innerHTML = `${object.createdAt}`;

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
    content.id = 'com-details'
    content.value = `${object.content}`;

    

    user_intel.appendChild(avatar);
    user_intel.appendChild(name);
    if(user.username == currentUser.username){
        user_intel.appendChild(is_currentuser);
        user_intel.appendChild(rep_time);
        user_intel.appendChild(delete_btn);
        user_intel.appendChild(edit_btn);
        
    }else {
        user_intel.appendChild(rep_time);
        user_intel.appendChild(rep_btn);
    }

    

    user_details.appendChild(user_intel);
    user_details.appendChild(content);

    parent.appendChild(user_details);
}

function replyUpdate(replies) {
    replies.forEach((reply) => {
        var rep_container = document.createElement('div');
        rep_container.classList.add('rep-container');

        var vertical_line = document.createElement('div');
        vertical_line.classList.add('vertical-line');

        var box_chat = document.createElement('div');
        box_chat.classList.add('box-chat');
        box_chat.classList.add('reply');
        

        voteUpdate(box_chat, reply);
        commentUpdate(box_chat, reply);

        rep_container.appendChild(vertical_line);
        rep_container.appendChild(box_chat);

        allComments.appendChild(rep_container);

    })

}


export function updateUserBtn(editBtn, deleteBtn, repBtn){
    var editClickHandler = (event) => {
        console.log(event.target);
        event.target.style.color = 'hsl(238, 40%, 52%)';
        editBtn.removeEventListener('click', editClickHandler);
        editComment(event, editClickHandler, editBtn); 
    }

    editBtn.addEventListener('click', editClickHandler);

    var delClickHandler = (event) => {
        idTracking--;
        var boxChat = event.target.parentNode.parentNode.parentNode;
        if(boxChat.classList.contains('reply')){
            boxChat = boxChat.parentNode;
        }
        boxChat.remove();
        changeRows(idTracking, allComments);
    }

    deleteBtn.addEventListener('click', delClickHandler);

    var repClickHandler = (event) => {
        idTracking++;
        repBtn.removeEventListener('click', repClickHandler);
        replyComment(event, repBtn, repClickHandler, currentUser);
        changeRows(idTracking, allComments);
    }

    repBtn.addEventListener('click', repClickHandler);
}






sendBtn.addEventListener('click', () => {
    sendComment(userComment.value, idTracking, currentUser);
    changeRows(idTracking, allComments);
    addComment(comments[comments.length - 1]);  

})






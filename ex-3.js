class User{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = name;
    }
}
class postList{
    constructor(posts){
        this.posts = [];
    }
    addPost(post){
        this.posts.push({
            id : this.posts.length +1,
            title : post.title,
            content : post.content,
            comment : post.comment,
        })
    }
    sharePost(postId){
        console.log(`You've shared post "${this.posts[postId-1].title}" to your friend`)
    }
}
class Post{
    constructor(id, title, content, comment){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment =[];
    }
    addComment(comment){
        this.comment.push(comment);
    }
}
class comment{
    constructor(id, content, createdBy, like){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike(){
        this.like += 1 
    }
}
class Facebook{
    constructor(groupList, pageList){
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(group){
        this.groupList.push(group);
    }
    addPage(page){
        this.pageList.push(page);
    }
}
class FacebookPage {
    constructor(name){
        this.name = name;
    }
}
class FacebookGroup {
    constructor(name){
        this.name= name
    }
}
class Notification {
    constructor(id){
        this.id =id
    }
    send(comment){
        console.log(`Notification: ${comment.createdBy.name} has just commented on this post-"${post.title}"`)
    }
}
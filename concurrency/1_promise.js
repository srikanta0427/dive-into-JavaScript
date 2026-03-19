// Function to simulate getting a userId  (after 1 second)
function getUserId(id){
    return new Promise(function(res, rej){
        setTimeout(()=>{
            res(id); // resolve the promise with the user id
        }, 1000);
    });
}

// Function to simulate fetching user posts (after 3 seconds)
function getUserPost(id){
    return new Promise(function(res, rej){
        setTimeout(()=>{
            res(["Post1","Post2"]); // return list of posts
        }, 3000);
    });
}

// Function to simulate fetching comments of posts (after 2 seconds)
function getPostComments(post){
    return new Promise(function(res, rej){
        setTimeout(()=>{
            res(["comment1","comment2"]); // return comments
        }, 2000);
    });
}

// Start promise chain
getUserId(1)
.then((data)=>{
    console.log(data); // prints user id (1)
    return getUserPost(data); // pass id to next function
})
.then((data)=>{
    console.log(data); // prints ["Post1", "Post2"]
    return getPostComments(data); // pass posts to next function
})
.then((data)=>{
    console.log(data); // prints ["comment1", "comment2"]
});

// This runs immediately (before promises resolve)
console.log("stop"); // prints first because JS is asynchronous

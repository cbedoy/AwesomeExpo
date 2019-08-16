let stream = require('getstream');

const contents = [
    "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/03/materialdesign-730x315.jpg",
    "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/materialdesignfeat-796x398.jpg",
    "https://betanews.com/wp-content/uploads/2015/10/materialdesign_principles_metaphor.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TFmeZloTg2EwyXeeh8tb36TkHy0WMUf1kbHeHiJNLr4lCfp8aQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjHwqm4uJBFOjLSSzOWluplMFD35X5qlYNBk8USO2Q7cM2kMu",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkQGYLrJBMQRb1buPFIDvfQSc3YeEKpDQsJK-dceF6DsrWgAM",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQtMUFNd94CvlK09pafvpz0pS5JNP3iA-B1fIvGca4tmRjx6J",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OBcMscT73SQRW6iG-L5AyVY5iF6DiitWcZ3X8Wrd2C9n7wEZMw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWq7JVfYEVqpYroZcPoS9iyzKjrhF9d26nCdvYRC0ha54lJIcT",
    "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/material_design_awards_2016_share.jpg",
    "https://boygeniusreport.files.wordpress.com/2018/09/google-chrome-redesign.jpg?quality=98&strip=all&w=782",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhCCqoVM0tSSbI22t8A5puux3qA4gRtSKdt-MNY-D3okeAkerlA",
    "https://fruitfulcode.com/wp-content/uploads/2016/08/material-design-main.jpg"
];

function createActivityWithTypeAndNickname(type, nickname) {
    let feed = client.feed(type, nickname, token);

    let activity = {
        'actor' : nickname,
        'verb' : 'example',
        'object' : 'Created from react native',
        'tweet' : 'It was created from react native',
        'content' : contents[Math.floor(Math.random() * contents.length)]
    };

    feed.addActivity(activity)
        .then(function(data) { 
            /* on success */ 
            console.log("SUCCESS")
            console.log(data)
        })
        .catch(function(reason) { 
            /* on failure, reason.error contains an explanation */ 
            console.log(reason)
        });
}

export default {createActivityWithTypeAndNickname}
const { BlogPost } = require("../models")

const postSeeds = [
    {
        title: "first post",
        contents: "this is my first post"
    },
    {
        title: "second post",
        contents: "this is my second post"
    },
    {
        title: "third post",
        contents: "this is my third post"
    },
    {
        title: "fourth post",
        contents: "this is my fourth post"
    },
]

async function seed () {
    await BlogPost.bulkCreate(postSeeds);

    console.log("done")
}

seed();
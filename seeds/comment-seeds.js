const { Comment } = require("../models")

const postCommentSeeds = [
    {
        contents: "this is my first comment"
    },
    {
        contents: "this is my second comment"
    },
    {
        contents: "this is my third comment"
    },
    {
        contents: "this is my fourth comment"
    },
]

async function seed () {
    await Comment.bulkCreate(postCommentSeeds);

    console.log("done")
}

seed();
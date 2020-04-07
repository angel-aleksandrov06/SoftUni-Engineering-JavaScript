class Article {
    _comments = [];
    _likes = [];

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {
        if (username === this.creator) {
            throw new Error("You can't like your own articles!");
        }
        if (this._likes.some(x=>x === username)) {
            throw new Error("You can't like the same article twice!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this._likes.every(x=>x !==username)) {
            throw new Error("You can't dislike this article!");
        }

        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let targetComment = this._comments.find(x => x.Id === id);

        if(id === undefined || !targetComment ) {
            let nextId = this._comments.length+1;
            let newestCommnet = {
                Id: nextId,
                Username: username,
                Content: content,
                Replies: []
            }
            this._comments.push(newestCommnet);
            return `${username} commented on ${this.title}`;
        }
        if(targetComment){
            let repliesCount = targetComment.Replies.length+1;
            let currReplay = `${targetComment.Id}.${repliesCount}`;
            let newestReply = {
                Id: currReplay,
                Username: username,
                Content: content
            }
            targetComment.Replies.push(newestReply);
            return`You replied successfully`;
        }
    }
    toString(sortingType) {
        let sb = "";
        sb += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        if (sortingType === 'asc') {
            this._comments.sort(function (a, b) {
                if (a.Id > b.Id) {
                    return 1;
                }
                if (a.Username < b.Username) {
                    return -1;
                }
                return 0;
            })
            for (const comment of this._comments) {
                if (comment.Replies.length > 0) {
                    comment.Replies.sort(function (a, b) {
                        if (a.Id > b.Id) {
                            return 1;
                        }
                        if (a.Username < b.Username) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
        }

        if (sortingType === 'desc') {
            this._comments.sort(function (a, b) {
                if (a.Id > b.Id) {
                    return -1;
                }
                if (a.Username < b.Username) {
                    return 1;
                }
                return 0;
            })
            for (const comment of this._comments) {
                if (comment.Replies.length > 0) {
                    comment.Replies.sort(function (a, b) {
                        if (a.Id > b.Id) {
                            return -1;
                        }
                        if (a.Username < b.Username) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
        }
        if (sortingType === 'username') {
            this._comments.sort(function (a, b) {
                if (a.Username > b.Username) {
                    return 1;
                }
                if (a.Username < b.Username) {
                    return -1;
                }
                return 0;
            })

            for (const comment of this._comments) {
                if (comment.Replies.length > 0) {
                    comment.Replies.sort(function (a, b) {
                        if (a.Username > b.Username) {
                            return 1;
                        }
                        if (a.Username < b.Username) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
        }
        for (const Comment of this._comments) {
            sb += `-- ${Comment.Id}. ${Comment.Username}: ${Comment.Content}\n`;
            if (Comment.Replies.length !== 0) {
                for (const Replay of Comment.Replies) {
                    sb += `--- ${Replay.Id}. ${Replay.Username}: ${Replay.Content}\n`;
                }
            }
        }
        return sb.trim();
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


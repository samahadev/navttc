let tweet = prompt("Enter your tweet: ");
let tweetLength = tweet.length;
let result =
  tweetLength <= 140
    ? `Your ${tweetLength} char tweet will work!`
    : `Your ${tweetLength} char tweet is ${tweetLength - 140} chars too long`;
console.log(result);

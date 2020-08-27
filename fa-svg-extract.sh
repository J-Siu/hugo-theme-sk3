#!/bin/sh

# ${1} = Font Awesome svg file path

file=${1}

svg="
baidu
douban
facebook
flickr
github
instagram
linkedin
pinterest
qq
reddit
rss
stack-exchange
stack-overflow
telegram
tumblr
twitch
twitter
vimeo
vk
weibo
weixin
youtube
"

echo '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">'
for i in ${svg}; do
	grep -A 2 \"${i}\" ${file}
done
echo '</svg>'
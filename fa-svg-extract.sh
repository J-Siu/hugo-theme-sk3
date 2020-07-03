#!/bin/sh

SVG=$1

site="
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
for i in $site; do
	grep -A 2 \"$i\" ${SVG}
done
echo '</svg>'
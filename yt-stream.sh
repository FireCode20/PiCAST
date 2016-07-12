omxplayer -r -o both $(yt-downloader -g $1) < ~/fifo/ompi
echo p > ~/fifo/ompi
echo p > ~/fifo/ompi
fbset -depth 8 && fbset -depth 16
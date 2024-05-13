FROM golang:1.19.13-bullseye
ADD build_syncthing.sh patches /llc/
RUN cd /llc; ./build_syncthing.sh
CMD /llc/syncthing -no-browser -no-restart -logflags=0 -no-default-folder -home=/data

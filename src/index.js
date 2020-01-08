(function run () {
  const videoElement = document.getElementById('video');
  const videoElement2 = document.getElementById('video2');
  const video = new VideoManager(videoElement);
  const video2 = new VideoManager(videoElement2);

  video.initPlayer({}, console.log);
  video.load({
    url: '<our_hls_no_drm_stream>/h264_master.m3u8',
    data: null,
  });

  video2.initPlayer({}, console.log);
  video2.load({
    url: '<our_hls_no_drm_stream>/h264_master.m3u8',
    data: null,
  });
})();

class VideoManager {
  constructor(videoElement) {
    this.videoElement = videoElement;
    this.player = new shaka.Player(videoElement);
  }

  getPlayer() {
    return this.player;
  }

  initPlayer(playerConfiguration, errorHandler) {
    this.player.configure(playerConfiguration);
    this.errorHandler = errorHandler;
    this.player.addEventListener('error', e => this.errorHandler(e));
  }

  load({ url, data }) {
    this.player.getNetworkingEngine().registerRequestFilter((type, request) => {
      if (type !== shaka.net.NetworkingEngine.RequestType.LICENSE) return;
      request.headers.customdata = data;
    });

    this.player.load(url).then(() => {
      console.log('The video has been loaded!');
    }).catch(e => this.errorHandler(e));
  }

  stop() {
    this.player.unload();
  }
}

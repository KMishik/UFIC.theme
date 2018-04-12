//declare const $: any;
var BgSlider = /** @class */ (function () {
    function BgSlider() {
        this.imgPool = [
            '/themes/custom/ufic/img/bgslides/0.jpg',
            '/themes/custom/ufic/img/bgslides/1.jpg',
            '/themes/custom/ufic/img/bgslides/2.jpg',
            '/themes/custom/ufic/img/bgslides/3.jpg',
            '/themes/custom/ufic/img/bgslides/4.jpg',
            '/themes/custom/ufic/img/bgslides/5.jpg',
            '/themes/custom/ufic/img/bgslides/6.jpg',
            '/themes/custom/ufic/img/bgslides/7.jpg',
            '/themes/custom/ufic/img/bgslides/8.jpg',
            '/themes/custom/ufic/img/bgslides/9.jpg',
            '/themes/custom/ufic/img/bgslides/10.jpg',
            '/themes/custom/ufic/img/bgslides/11.jpg',
            '/themes/custom/ufic/img/bgslides/12.jpg',
            '/themes/custom/ufic/img/bgslides/13.jpg',
            '/themes/custom/ufic/img/bgslides/14.jpg',
            '/themes/custom/ufic/img/bgslides/15.jpg',
            '/themes/custom/ufic/img/bgslides/16.jpg',
            '/themes/custom/ufic/img/bgslides/17.jpg',
            '/themes/custom/ufic/img/bgslides/18.jpg',
        ];
        this.currentImg = 1;
        this.activeLayer = $('#bgslider-active');
        this.backgroundLayer = $('#block-views-block-bgslider-views-block-block-1');
        this.setEndTransitionEventListener();
    }
    BgSlider.prototype.setEndTransitionEventListener = function () {
        var _this = this;
        this.activeLayer.get(0).addEventListener('transitionend', function () {
            if (_this.activeLayer.hasClass('hidden')) {
                _this.activeLayer.css({ 'background-image': 'url(' + _this.imgPool[_this.currentImg] + ')' });
            }
            else {
                _this.backgroundLayer.css({ 'background-image': 'url(' + _this.imgPool[_this.currentImg] + ')' });
            }
        }, false);
    };
    BgSlider.prototype.run = function () {
        var _this = this;
        var mainControllerInterval = setInterval(function () {
            _this.activeLayer.toggleClass('hidden');
            if (++_this.currentImg > _this.imgPool.length - 1) {
                _this.currentImg = 0;
            }
        }, 8000);
        return mainControllerInterval;
    };
    return BgSlider;
}());
var slider = new BgSlider();
slider.run();

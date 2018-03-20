declare const $: any;
class BgSlider {

	private imgPool: string[] = [
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
	private currentImg: number;
	public activeLayer: any;
	private backgroundLayer: any;

	constructor() {
		this.currentImg = 1;
		this.activeLayer = $('#bgslider-active');
		this.backgroundLayer = $('#block-views-block-bgslider-views-block-block-1');
		this.setEndTransitionEventListener();
	}
	
	private setEndTransitionEventListener(): void {
  	
  	this.activeLayer.get(0).addEventListener('transitionend', 
  		() => 
  		{
	  		if (this.activeLayer.hasClass('hidden'))
					{
						this.activeLayer.css({'background-image':'url(' + this.imgPool[this.currentImg] + ')'});
					}
				else 
					{
						this.backgroundLayer.css({'background-image':'url(' + this.imgPool[this.currentImg] + ')'});
					}
	  	}, 
  		false);
	}

	public run(): any {
			let mainControllerInterval: any = setInterval(() => {
			this.activeLayer.toggleClass('hidden');
			if (++this.currentImg > this.imgPool.length - 1) { this.currentImg = 0; }
		}, 8000);
		return mainControllerInterval;
	}
}

let slider: BgSlider = new BgSlider();
slider.run();
import { EffectBase } from "././EffectBase";
import { Ease } from "../../../../core/src/laya/utils/Ease"
	import { Tween } from "../../../../core/src/laya/utils/Tween"
	
	/**
	 * 淡入效果
	 */
	export class FadeIn extends EffectBase {
		/*override*/ protected _doTween():Tween {
			this.target.alpha = 0;
			return Tween.to(this.target, {alpha: 1}, this.duration, Ease[this.ease], this._comlete, this.delay);
		}
	}

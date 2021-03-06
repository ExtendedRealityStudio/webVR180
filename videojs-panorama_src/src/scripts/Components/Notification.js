// @flow

import type { Player } from '../types';
import Component from './Component';

class Notification extends Component{
    constructor(player: Player, options: {
        Message: string | HTMLElement;
        el?: HTMLElement;
    }){
        let el: HTMLElement;

        let message = options.Message;
        if(typeof message === 'string'){
            el = document.createElement('div');
            el.className = "vjs-video-notice-label vjs-video-notice-show";
            el.innerText = message;
        } else {
            el = message;
            el.classList.add("vjs-video-notice-show");
        }

        options.el = el;

        super(player, options);
    }
}

export default Notification;
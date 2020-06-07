import LiveCovidProxy from './live-covid.component.proxy';
import template from './live-covid.component.template';

class LiveCovidComponent extends HTMLElement{
    constructor(){
        super();

        this.render();
    }

    render(){
        LiveCovidProxy.get().then(items =>{
            this.innerHTML = template(items);

        });
        
    }
}

customElements.define('live-covid',LiveCovidComponent);
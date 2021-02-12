

export function debounce(func: Function, wait: number) {

	var timeout: any
	return function() {
		const context = this
        const args = arguments;
		var later = function() {
			timeout = null;
		};
		var callNow = !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



export function debounceEvent(callback: Function, time: number) {
    let interval: any;
    const args = arguments
    return () => {
      clearTimeout(interval);
      interval = setTimeout(() => {
        interval = null;
  
        // eslint-disable-next-line
        callback(args);
      }, time);
    };
}


var _timer:null|number = null;
function __debounce(callback:Function, delay: number) {
    if (_timer != null) {
      window.clearTimeout(_timer);
    }
    _timer = window.setTimeout(function() { 
      _timer = null; 
      callback(); 
    }, delay);
}


export function createDebouncer() {
  let myTimer: number|null = null
  
  return function(callback:Function, delay: number) {
      if (myTimer != null) {
        window.clearTimeout(myTimer);
      }
      myTimer = window.setTimeout(function() { 
        myTimer = null; 
        callback(); 
      }, delay)
  }
}
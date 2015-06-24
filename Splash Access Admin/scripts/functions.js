function isNullOrEmpty(value) {
    return typeof value === 'undefined' || value === null || value === '';
};

function isKeySet(key) {
    var regEx = /^\$[A-Z_]+\$$/;
    return !isNullOrEmpty(key) && !regEx.test(key);
};

var getTimeNow = function() {
	function twoDigits(d) {
	    if(0 <= d && d < 10) return "0" + d.toString();
	    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
	    return d.toString();
	}

	function pad(n) {
		return (n < 10) ? '0' + n : n;
	}

	function format(h, m, s) {
		return pad(h) + ':' + pad(m)  + ':' + pad(s);
	}

	Date.prototype.toMysqlFormat = function() {
	    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
	};

	var d = new Date();
	// return format(d.getHours(), d.getMinutes(), d.getSeconds());
	return d.toMysqlFormat();
};
function apply(self, fn, args) {
	var selfless = (self === undefined) || (self === null);
	var length = args ? args.length : 0;
	
	switch (length) {
		case 0:
			return selfless ? fn() : fn.call(self);
		case 1:
			return selfless ? fn(args[0]) : fn.call(self, args[0]);
		case 2:
			return selfless ? fn(args[0], args[1]) : fn.call(self, args[0], args[1]);
		case 3:
			return selfless ? fn(args[0], args[1], args[2]) : fn.call(self, args[0], args[1], args[2]);
		case 4:
			return selfless ? fn(args[0], args[1], args[2], args[3]) : fn.call(self, args[0], args[1], args[2], args[3]);
		case 5:
			return selfless ? fn(args[0], args[1], args[2], args[3], args[4]) : fn.call(self, args[0], args[1], args[2], args[3], args[4]);
		case 6:
			return selfless ? fn(args[0], args[1], args[2], args[3], args[4], args[5]) : fn.call(self, args[0], args[1], args[2], args[3], args[4], args[5]);
		// the crucial point
		case 7:
			return selfless ? fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]) : fn.call(self, args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
		default:
			return selfless ? fn.apply(null, args) : fn.apply(self, args);
	}
};

module.exports = apply;
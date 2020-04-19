function exportMain(module, main){
	return module.exports.default = module.exports = main;
}

exportMain(module, exportMain);

function exportMain(module, main){
	return module.exports = main.default = main;
}

exportMain(module, exportMain);

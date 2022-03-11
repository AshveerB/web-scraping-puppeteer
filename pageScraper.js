const scraper = {
	url: 'https://ashveer-dossier.netlify.app/',
	async scraper(browser) {
		let page = await browser.newPage();

		console.log(`Navigating to this ${this.url}...`);

		await page.goto(this.url);

		console.log('page loaded');
	},
};

module.exports = scraper;

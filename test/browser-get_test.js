casper.test.begin('Main page test', 3, function suite(test) {

    casper.start('test/index.html', function() {
        test.assertTitle('Test page', 'page title is set correctly');
        test.assertExists('textarea', 'textarea exists');
    });

    casper.then(function() {
        this.wait(1000, function() {
            test.assertField('console', '{\"data\":\"foo\"}');
        });
    });

    casper.run(function() {
        test.done();
    });
});
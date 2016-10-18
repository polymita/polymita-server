namespace('build', function () {
    desc('Build Server and GUI application for development.');
    task('dev', { async: true }, function () {
        jake.exec('python generate.py', { printStdout: true }, function () {
            jake.exec('python ../polymita-gui/generate.py', { printStdout: true }, function () {
                complete();
            });
        });
    });

    desc('Build Server and GUI applications for production.');
    task('prod', { async: true }, function () {
        jake.exec('python generate.py build', { printStdout: true }, function () {
            jake.exec('python ../polymita-gui/generate.py build', { printStdout: true }, function () {
                complete();
            });
        });
    });
});
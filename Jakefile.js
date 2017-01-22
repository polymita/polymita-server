var colors = require('colors'),
    fs = require('fs'),
    setup = function (module) {
        require(module);

        var resource = qx.util.ResourceManager.getInstance();
        require(resource.toUri('guaraiba/tasks/Jakefile.js'));
    },
    needBuid = function (err) {
        if (err) {
            console.log('');
            console.log('----------------------------------------------------------------------');
            console.error(('Error: ' + err.stack).error);
            log = 'error';
        } else {
            log = 'warn';
        }
        console[log]('----------------------------------------------------------------------'[log]);
        console[log]('* Please compile project by first time with ( python generate.py )'[log]);
        console[log]('* After this you can run more jake tasks.'[log]);
        console[log]('----------------------------------------------------------------------'[log]);
    };

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    choose: 'blue',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

if (fs.existsSync('./polymita-server.js')) {
    /**************** PRODUCTION PHASE. ****************/
    setup('./polymita-server');
} else if (fs.existsSync('./source/script/polymita-server.js')) {
    /**************** DEVELOPMENT PHASE. ***************/
    try {
        setup('./source/script/polymita-server');
    } catch (ex) {
        needBuid(ex);
    }
} else {
    /******** DEVELOPMENT PHASE BAD NEED BUILD. ********/
    needBuid();
}

/**************** OTHER COMMON TASKS. ***************/
task('default', { async: true }, function () {
    jake.run('--tasks');
    console.log('----------------------------------------------------------------------\n');
    complete();
});

task('xxx', { async: true }, function () {
    var dbSchema = qx.core.BaseInit.getApplication().getDBSchema('polymita'),
        i18nModel = dbSchema.getModel('polymita.models.I18n'),
        inflection = require('inflection');

    dbSchema.transaction(function (schema, commit, rollback) {
        i18nModel.all().where({ locale: 'en', sub_catalog: 'Colors' }).then(function (err, records) {
            var i=records.length;
            records.forEach(function (r) {
                var t = inflection.capitalize((r.getName()));
                console.log(r.getValue(), t);
                r.setValue(t);
                r.save(function (err) {
                    if (err) throw err;
                    console.log(i--);;
                    if (i == 1) {
                        console.log('fin');
                        commit()
                    }
                })
                console.log(t);
            })
        })
    }, complete, complete);


});
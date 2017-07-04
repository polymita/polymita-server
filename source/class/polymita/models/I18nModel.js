qx.Class.define("polymita.models.I18nModel", {
    extend: guaraiba.orm.Model,

    // override
    construct: function (recordClass, dbSchema) {
        this.base(arguments, recordClass, dbSchema);

        this.setFixtures({
            en: this.all().where({ locale: 'en' }).orderBy(this.getIdFieldName()),
            es: this.all().where({ locale: 'es' }).orderBy(this.getIdFieldName())
        })
    }
});

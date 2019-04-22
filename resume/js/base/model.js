window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'XOeDg1eXIEFmJsDlyiXc7Wbr-gzGzoHsz';
            var APP_KEY = 'vN1iojMYcBHwcuXH3gm8euVX';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find()
        },
        save: function (object) {
            var x1 = AV.Object.extend(resourceName);
            var testObject = new x1();
            return testObject.save(object)
        }
    }
}//LeanCioud的model
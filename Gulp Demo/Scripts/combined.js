var myClass1 = function () {
    var pub = {};

    pub.getNumber = function () {
        return -222222;
    }

    return pub;
}()

var myClass2 = function () {
    var pub = {};

    pub.getNumber = function () {
        return 200;
    }

    return pub;
}()

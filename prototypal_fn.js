var model = function () {
    var attrs = {};

    this.set = function (name, value) {
        attrs[name] = value;
    };

    this.get = function (name) {
        return attrs[name]
    }
};

var parent = {};
model.call(parent);

parent.set('name', 'Parent');
parent.get('name');

var childmodel = function () {
    model.call(this);
    this.set('child', true);

    this.more = function more() {
        return 'I do more';
    };
};

var child = {};
childmodel.call(child);

child.set('name', 'Child');
child.get('name');
child.get('child');

var model = {
    init: function init() {
        this.attrs = {};
    },
    set: function set(name, value) {
        this.attrs[name] = value;
    },
    get: function get(name) {
        return this.attrs[name];
    }
};

var parent = Object.create(model);
parent.init();

parent.set('name', 'Parent');
parent.get('name');

var childmodel = Object.create(model);
childmodel.init = function init() {
    model.init.call(this);
    this.attrs['child'] = true;
};

var child = Object.create(childmodel);
child.init();

child.set('name', 'Child');
child.get('name');
child.get('child');

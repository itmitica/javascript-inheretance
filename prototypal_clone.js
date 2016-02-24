var prt = {
    hello: function hello() {
        return 'Hello, my name is ' + this.name;
    },
    val: 42
};

var clnprt = _.clone(prt);

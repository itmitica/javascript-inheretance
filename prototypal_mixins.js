var prt = {
    hello: function hello() {
        return 'Hello, my name is ' + this.name;
    }
};

var george = _.extend( {}, prt, {name: 'George'} );

(function () {
    String.prototype.ensureStart = function(str){
        if (!this.startsWith(str)){
            return str + ' ' + this;
        }else{
            return this.toString();
        }
    };
    String.prototype.ensureEnd = function(str){
        if (!this.endsWith(str)){
            return this + ' ' + str;
        }else{
            return this.toString();
        }
    };
    String.prototype.isEmpty = function(str){
        if (this == ''){
            return true;
        }else{
            return false;
        }
    };

    String.prototype.truncate = function(n){
        if (this.length <= n) {
            return this.toString();
        }
        let value = this;
      while (value.length > n) {
        const index = value.lastIndexOf(" ");
        if (index > -1) {
          value = value.slice(0, index) + "...";
        } else {
          value = n >= 4 ? this.slice(0, n - 3) + "..." : ".".repeat(n);
        }
      }
      return value + "";

    };
    String.format = function (str, ...params){
        let regExp = /{([0-9]+)}/;
        let match = regExp.exec(str);
        while (match != null) {
            if (!params[match[1]]) {
              return str;
            }
            str = str.replace(match[0], params[match[1]]);
            match = regExp.exec(str);
          }
          return str;
        };
}())


let str = 'my string';
//console.log(str = str.ensureEnd('string'));
//console.log(str = str.ensureStart('my'));
//console.log(str = str.ensureStart('hello '));
//console.log(str = str.truncate(16));
//console.log(str = str.truncate(14));
//console.log(str = str.truncate(8));
//console.log(str = str.truncate(4));
//console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
  'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
  'dog'));
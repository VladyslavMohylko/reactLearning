class Header {
    constructor(img, h1, h2, h3) {
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
        this.h3 = h3;
    }

    renderH(x) {
        console.log(this);
        let out = '';
        out += `<img src="${this.src} alt="" class="logo"`;
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`;
        document.getElementById(x).innerHTML = out;

        let c = document.createElement('h3');
        c.innerText = this.h3;
        document.getElementById(x).appendChild(c);
    }

    static hello(a) {
        console.log('w w w w w w w' + a);
    }
}


const reactLogo = 'https://www.iconfinder.com/icons/4691292/react_native_react_icon';

const header = new Header(reactLogo, 'hello', 'world', 'kekw');


class Header2 extends Header {
    constructor(img, h1, h2, h3, hero) {
        super(img, h1, h2, h3)

        this._hero = hero;
    }

    get hero() {
        return this._hero;
    }

    set hero(x) {
        this._hero = x;
    }
}

const header2 = new Header2('', 'ky', 'hi', 'ouu', 'KEKWW');


console.log(header2);

console.log(header2.hero);

header2.hero = 'sds';

console.log(header2);
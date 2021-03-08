import './styles.css';
import loadScript from './js/scriptLoader';

const inputRef = document.querySelector('#input');
const loadLodashBtn  = document.querySelector('.load-script');
const foo = {
    a: 5
}

const changeBodyBg = (color) => {
    document.body.style.background = color;
}

inputRef.addEventListener('change', ({target}) => {
    changeBodyBg(target.value);
})

const loadApi = () => import('./js/api');

loadLodashBtn.addEventListener('click', async () => {
    // const url = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js'
    // await loadScript(url)
    // console.log( _.get(foo, 'a'));
    const userService = await loadApi();
    console.log(userService.default);
})


class Timer {
    constructor(date) {
        this.seconds = date.getSeconds();
        this.minutes;
        this.hours;
        this.days;
    }

    updateTimerTemplate() {}
    getSeconds() {}
    getMinutes() {}
    getHours() {}
    getDays() {}
    setTimerState() {}
}

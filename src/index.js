import Manager from './manager';
import './style/nipple.css';

const factory = new Manager();
export default {
    create: function (options) {
        return factory.create(options);
    },
    factory: factory
};

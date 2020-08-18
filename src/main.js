require('./css/default');
require('./css/code-monokai');
require('./css/codemirror');
require('./css/base');
import Vue from 'vue';
import navJson from './data/navList/navJson';
import titleJson from './data/titleList/titleJson';
import Index from './components/common/Index/Index'

// 实例对象，根组件
new Vue({
    el: '#vue',
    template: '<Index class="wrapper" :index-data="rootData"/>',
    data: {
        rootData: {
            'headerData': navJson,
            'contentData': titleJson
        },
        bus: new Vue(),
    },
    // 导航子组件
    components: {
        Index
    }
});

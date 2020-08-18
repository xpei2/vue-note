export default [{
        titleClassify: 'list1-basies',
        titleList: [{
                parTitleId: '1-experience',
                parTitle: 'vue体验',
                subTitleList: [{
                        titleId: '1-1-constant',
                        titleText: '常量',
                        titleImport: false
                    },
                    {
                        titleId: '1-2-list',
                        titleText: '列表',
                        titleImport: false
                    },
                    {
                        titleId: '1-3-counter',
                        titleText: '计数器',
                        titleImport: false
                    }
                ]
            },
            {
                parTitleId: '2-grammar',
                parTitle: 'vue语法',
                subTitleList: [{
                        titleId: '2-1-mustache',
                        titleText: ' 插值操作Mustache',
                        titleImport: false
                    },
                    {
                        titleId: '2-2-instructions',
                        titleText: '常用指令',
                        titleImport: true
                    },
                    {
                        titleId: '2-3-(v-bind)',
                        titleText: 'v-bind基本使用',
                        titleImport: false
                    },
                    {
                        titleId: '2-4-class-object',
                        titleText: '动态绑定class（对象）',
                        titleImport: true
                    },
                    {
                        titleId: '2-5-class-array',
                        titleText: '动态绑定class（数组）',
                        titleImport: false
                    },
                    {
                        titleId: '2-6-style-object',
                        titleText: '动态绑定style（对象）',
                        titleImport: true
                    },
                    {
                        titleId: '2-7-style-array',
                        titleText: '动态绑定style（数组）',
                        titleImport: false
                    }
                ]
            },
            {
                parTitleId: '3-calculation',
                parTitle: '计算属性',
                subTitleList: [{
                        titleId: '3-1-basics',
                        titleText: '计算属性基础操作',
                        titleImport: true
                    },
                    {
                        titleId: '3-2-complex',
                        titleText: '计算属性复杂操作',
                        titleImport: true
                    },
                    {
                        titleId: '3-3-getter-setter',
                        titleText: '计算属性的getter/setter',
                        titleImport: false
                    },
                    {
                        titleId: '3-4-computed-methods',
                        titleText: 'computed和methods对比',
                        titleImport: false
                    }
                ]
            },
            {
                parTitleId: '4-event',
                parTitle: '事件监听',
                subTitleList: [{
                        titleId: '4-1-parameter',
                        titleText: 'v-on的参数使用',
                        titleImport: true
                    },
                    {
                        titleId: '4-2-modifier',
                        titleText: 'v-on的修饰符',
                        titleImport: true
                    },
                    {
                        titleId: '4-3-(v-if+v-else)',
                        titleText: 'v-if/v-else结合',
                        titleImport: true
                    },
                    {
                        titleId: '4-4-(v-else-if)',
                        titleText: 'v-if/v-else/v-else-if结合',
                        titleImport: false
                    },
                    {
                        titleId: '4-5-login',
                        titleText: '用户登录切换案例练习',
                        titleImport: true
                    },
                    {
                        titleId: '4-6-v-show',
                        titleText: 'v-show的使用',
                        titleImport: true
                    }
                ]
            },
            {
                parTitleId: '5-ergodic',
                parTitle: '循环遍历',
                subTitleList: [{
                        titleId: '5-1-ergodic',
                        titleText: '遍历数组和对象',
                        titleImport: true
                    },
                    {
                        titleId: '5-2-key',
                        titleText: 'key属性',
                        titleImport: true
                    },
                    {
                        titleId: '5-3-responsive',
                        titleText: '数组操作响应式',
                        titleImport: true
                    }
                ]
            },
            {
                parTitleId: '6-form',
                parTitle: '表单绑定',
                subTitleList: [{
                        titleId: '6-1-(v-model)',
                        titleText: 'v-model基本使用',
                        titleImport: true
                    },
                    {
                        titleId: '6-2-radio',
                        titleText: 'v-model : radio',
                        titleImport: true
                    },
                    {
                        titleId: '6-3-checkbox',
                        titleText: 'v-model : checkbox',
                        titleImport: true
                    },
                    {
                        titleId: '6-4-select',
                        titleText: 'v-model : select',
                        titleImport: false
                    },
                    {
                        titleId: '6-5-value',
                        titleText: '表单值绑定',
                        titleImport: false
                    },
                    {
                        titleId: '6-6-modifier',
                        titleText: 'v-mode : 修饰符',
                        titleImport: true
                    }
                ]
            }
        ]
    },
    {
        titleClassify: 'list2-senior',
        titleList: [{
                parTitleId: '1-assembly',
                parTitle: '组件化开发',
                subTitleList: [{
                        titleId: '1-1-introduce',
                        titleText: '组件介绍',
                        titleImport: false
                    },
                    {
                        titleId: '1-2-classify',
                        titleText: '全局组件和局部组件',
                        titleImport: true
                    },
                    {
                        titleId: '1-3-relation',
                        titleText: '父组件和子组件',
                        titleImport: true
                    },
                    {
                        titleId: '1-4-grammar',
                        titleText: '组件语法糖',
                        titleImport: true
                    },
                    {
                        titleId: '1-5-template',
                        titleText: '组件模板分离',
                        titleImport: true
                    },
                    {
                        titleId: '1-6-data',
                        titleText: '组件数据存放',
                        titleImport: true
                    },
                    {
                        titleId: '1-7-inherit-father',
                        titleText: '组件通信：父传子props',
                        titleImport: true
                    },
                    {
                        titleId: '1-8-hump-idtifier',
                        titleText: '父传子：驼峰标识符',
                        titleImport: false
                    },
                    {
                        titleId: '1-9-inherit-son',
                        titleText: '组件通信：子传父$emit',
                        titleImport: true
                    },
                    {
                        titleId: '1-10-monitor',
                        titleText: '组件监听属性：watch',
                        titleImport: true
                    },
                    {
                        titleId: '1-11-visit-refs',
                        titleText: '组件访问：父访问子$children/$refs',
                        titleImport: true
                    },
                    {
                        titleId: '1-12-visit-parent',
                        titleText: '组件访问：子访问父$parent/$root',
                        titleImport: false
                    }
                ]
            },
            {
                parTitleId: '2-assembly-senior',
                parTitle: '组件化高级',
                subTitleList: [{
                        titleId: '2-1-slot',
                        titleText: '插槽基本使用：slot',
                        titleImport: true
                    },
                    {
                        titleId: '2-2-nameslot-old',
                        titleText: '具名插槽：旧版已弃用',
                        titleImport: false
                    },
                    {
                        titleId: '2-3-nameslot-new',
                        titleText: '具名插槽：新版v-slot:slotName',
                        titleImport: true
                    },
                    {
                        titleId: '2-4-scope',
                        titleText: '编译作用域',
                        titleImport: false
                    },
                    {
                        titleId: '2-5-slot-scope',
                        titleText: '作用域插槽-新版',
                        titleImport: true
                    }
                ]
            },
            {
                parTitleId: '3-module',
                parTitle: 'vue模块化',
                subTitleList: [{
                    titleId: '3-1-note-moudle',
                    titleText: '模块化',
                    titleImport: true
                }]
            }
        ]
    },
    {
        titleClassify: 'list3-webpack',
        titleList: [{
                parTitleId: '1-Webpack',
                parTitle: 'Webpack开发',
                subTitleList: [{
                        titleId: '1-1-webpack-itro',
                        titleText: 'webpack的安装',
                        titleImport: true
                    },
                    {
                        titleId: '1-2-webpack-start',
                        titleText: 'webpack的起步',
                        titleImport: true
                    },
                    {
                        titleId: '1-3-webpack-config',
                        titleText: 'webpack的配置',
                        titleImport: true
                    },
                    {
                        titleId: '1-1-webpack-loader',
                        titleText: 'loader的使用',
                        titleImport: true
                    },
                    {
                        titleId: '1-5-webpack-vue',
                        titleText: 'webpack配置Vue',
                        titleImport: true
                    },
                    {
                        titleId: '1-6-webpack-plugin',
                        titleText: 'plugin的使用',
                        titleImport: true
                    },
                    {
                        titleId: '1-7-local-server',
                        titleText: '搭建本地服务器',
                        titleImport: true
                    }
                ]
            },
            {
                parTitleId: '2-more',
                parTitle: '更多未知',
                subTitleList:[]
            }
        ]
    },
    {
        titleClassify: 'list4-promise',
        titleList: [{
                parTitleId: '1-basies',
                parTitle: 'Promise基本使用',
                subTitleList: [{
                        titleId: '1-1-instruct',
                        titleText: '指令的使用',
                        titleImport: false
                    },
                    {
                        titleId: '1-2-parameter',
                        titleText: 'v-for+computed传参',
                        titleImport: false
                    },
                    {
                        titleId: '1-3-(v-for+v-bind+v-on)',
                        titleText: 'v-for+v-bind+v-on',
                        titleImport: false
                    },
                    {
                        titleId: '1-4-click',
                        titleText: '点击改变内容、颜色、并计算总值',
                        titleImport: true
                    },
                    {
                        titleId: '1-5-shopping_cart',
                        titleText: '图书馆购物车',
                        titleImport: true
                    }
                ]
            }
        ]
    },
    {
        titleClassify: 'list7-practice',
        titleList: [{
                parTitleId: '1-practice',
                parTitle: '基础课后练习',
                subTitleList: [{
                        titleId: '1-1-instruct',
                        titleText: '指令的使用',
                        titleImport: false
                    },
                    {
                        titleId: '1-2-parameter',
                        titleText: 'v-for+computed传参',
                        titleImport: false
                    },
                    {
                        titleId: '1-3-(v-for+v-bind+v-on)',
                        titleText: 'v-for+v-bind+v-on',
                        titleImport: false
                    },
                    {
                        titleId: '1-4-click',
                        titleText: '点击改变内容、颜色、并计算总值',
                        titleImport: true
                    },
                    {
                        titleId: '1-5-shopping_cart',
                        titleText: '图书馆购物车',
                        titleImport: true
                    }
                ]
            },
            {
                parTitleId: '2-practice',
                parTitle: '组件课后练习',
                subTitleList: [{
                    titleId: '2-1-inherit-father',
                    titleText: '组件通信：父传子案例',
                    titleImport: true
                }]
            }
        ]
    }
];
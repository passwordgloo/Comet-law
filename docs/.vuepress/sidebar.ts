export const zhSidebar = {
    '/administrative/': [
        //可折叠侧边栏
        // collapsible: true,
        {text: '中华人民共和国人口与计划生育法',link: '1'},
        {text: '中华人民共和国突发事件应对法',link: '2'},
        {text: '中华人民共和国治安管理处罚法',link: '3'},
        {   
            text: '军人烈士',
            children: [
                {text: '中华人民共和国英雄烈士保护法',link: '4.1'},
                {text: '中华人民共和国军人地位和权益保障法',link: '4.2'},
                {text: '中华人民共和国兵役法',link: '4.3'},
                {text: '中华人民共和国退役军人保障法',link: '4.4'},
                {text: '中华人民共和国军人保险法',link: '4.5'},
            ]
        }
    ],
    '/civillaw/': [
        {    
            text: '民法典',
            //可折叠侧边栏
            // collapsible: true,
            children: [
                {text: '总则',link: '1'},
                {text: '物权',link: '2'},
                {text: '合同',link: '3'},
                {text: '人格权',link: '4'},
                {text: '婚姻家庭',link: '5'},
                {text: '继承',link: '6'},
                {text: '侵权责任',link: '7'}
            ],
        }
    ],
    '/constitution/': [
        {   
            text: '宪法相关法',
            children: [
                {text: '中华人民共和国宪法',link: '1'},
                {text: '中华人民共和国城市居民委员会组织法',link: '2'},
                {text: '中华人民共和国村民委员会组织法',link: '3'}
            ]
        }
    ],
    '/council/': [
        {   
            text: '社会救助',
            children: [
                {text: '社会救助暂行办法',link: '1.1'},
                {text: '自然灾害救助条例',link: '1.2'},
            ]
        },
        {   
            text: '就业保障',
            children: [
                {text: '工伤保险条例',link: '2.1'},
                {text: '失业保险条例',link: '2.2'},
                {text: '失业保险条例',link: '2.2'},
                {text: '劳动保障监察条例',link: '2.3'},
                {text: '残疾人就业条例',link: '2.4'},
                {text: '职工带薪年休假条例',link: '2.5'},
                {text: '国务院关于职工工作时间的规定',link: '2.6'},
                {text: '社会保险费征缴暂行条例',link: '2.7'},
                {text: '信访工作条例',link: '2.8'},
            ]
        },
        {   
            text: '军人英烈',
            children: [
                {text: '烈士褒扬条例',link: '3.1'},
                {text: '军人抚恤优待条例',link: '3.2'},
                {text: '退役士兵安置条例',link: '3.3'},
            ]  
        },
        {   
            text: '社会组织',
            children: [
                {text: '基金会管理条例',link: '4.1'},
                {text: '志愿服务条例',link: '4.2'},
                {text: '社会团体登记管理条例',link: '4.3'},
            ]  
        }
    ],
    '/criminal/': [
        {   
            text: '目录',
            children: [
                {text: '中华人民共和国刑法',link: '1'},
                {text: '中华人民共和国社区矫正法',link: '2'},
                {text: '中华人民共和国禁毒法',link: '3'}
            ]
        }
    ],
    '/department/': [
        {   
            text: '社会救助',
            children: [
                {text: '最低生活保障审核确认办法',link: '1.1.1'},
                {text: '最低生活保障审核审批办法（试行）',link: '1.1.2'},
                {text: '刚性支出困难家庭认定办法',link: '1.1.3'},
                {text: '特困人员认定办法',link: '1.2'},
                {text: '城乡医疗救助基金管理办法',link: '1.3.1'},
                {text: '城镇企业职工基本养老保险关系转移接续暂行办法',link: '1.3.2'},
            ]
        },
        {   
            text: '社会组织',
            children: [
                {text: '慈善组织认定办法',link: '2.1.1'},
                {text: '慈善组织公开募捐管理办法',link: '2.1.2'},
                {text: '民办非企业单位登记暂行办法',link: '2.2.1'},
                {text: '民办非企业单位年度检查办法',link: '2.2.2'},
                {text: '社会组织评估管理办法',link: '2.2.3'},
                {text: '志愿服务记录与证明出具办法（试行）',link: '2.2.4'},
            ]
        },
        {   
            text: '卫生医疗',
            children: [
                {text: '城市社区卫生服务中心基本标准',link: '3.1'},
                {text: '城市社区卫生服务站基本标准',link: '3.2'},
                {text: '乡镇卫生院管理办法(试行)',link: '3.3'},
            ]
        },
    ],
    '/explain/': [
        {   
            text: '司法解释',
            children: [
                {text: '婚姻家庭编的解释（一）',link: '1.1'},
                {text: '婚姻家庭编的解释（二）',link: '1.2'}
            ]
        }
    ],
    '/party/': [
        {   
            text: '党务会议',
            children: [
                {text: '二十大报告',link: '1'},
                {text: '党和国家机构改革',link: '2'},
                {text: '进一步全面深化改革',link: '3'},
                {text: '构建社会主义和谐社会',link: '4'}
            ]
        }
    ],
    '/policy/': [
        {   
            text: '人才队伍建设',
            children: [
                {text: '关于加强社会工作人才队伍建设意见',link: '1.1'},
                {text: '社会工作人才队伍建设中长期规划（2011-2020）',link: '1.2'},
                {text: '关于健全新时代志愿服务体系的意见',link: '1.3'}
            ]
        },
        {   
            text: '低保特困',
            children: [
                {text: '关于改革完善社会救助制度的意见',link: '2.1'},
                {text: '关于进一步做好最低生活保障等社会救助兜底工作的通知',link: '2.2'},
                {text: '关于加强低收入人口动态监测做好分层分类社会救助工作的意见',link: '2.3'}
            ]
        },
        {   
            text: '儿童权益',
            children: [
                {text: '关于进一步加强事实无人抚养儿童保障工作的意见',link: '3.1'},
                {text: '关于加强困境儿童保障工作的意见',link: '3.2'},
                {text: '关于加强农村留守儿童关爱保护工作的意见',link: '3.3'},
                {text: '关于加强和改进流浪未成年人救助保护工作的意见',link: '3.4'},
                {text: '办公厅关于加强孤儿保障工作的意见',link: '3.5'},
                {text: '关于建立残疾儿童康复救助制度的意见',link: '3.6'}
            ]
        },
        {   
            text: '基层治理',
            children: [
                {text: '关于深入推进农村社区建设试点工作的指导意见',link: '4.1'},
                {text: '关于加强基层治理体系和治理能力现代化建设的意见',link: '4.2'},
                {text: '关于加强和完善城乡社区治理的意见',link: '4.3'}
            ]
        },
        {   
            text: '社会组织',
            children: [
                {text: '关于探索建立社会组织第三方评估机制的指导意见',link: '5.1'},
                {text: '培育发展社区社会组织专项行动方案（2021-2023年）',link: '5.2'},
            ]
        },
        {   
            text: '就业',
            children: [
                {text: '关于推进全方位公共就业服务的指导意见',link: '6.1'},
                {text: '关于推行终身职业技能培训制度的意见',link: '6.2'}
            ]
        }
    ],
    '/proceeding/': [
        {   
            text: '诉讼法',
            children: [
                {text: '民事诉讼法',link: '1'},
                {text: '刑事诉讼法',link: '2'},
                {text: '行政诉讼法',link: '3'}
            ]
        },
        {   
            text: '非诉讼法',
            children: [
                {text: '人民调解法',link: '4'}
            ]
        }
    ],
    '/sociallaw/': [
        {text: '中华人民共和国法律援助法',link: '1'},
        {   
            text: '特定人群保护',
            children: [
                {text: '中华人民共和国老年人权益保障法',link: '2.1'},
                {text: '中华人民共和国妇女权益保障法',link: '2.2'},
                {text: '中华人民共和国反家庭暴力法',link: '2.3'},
                {text: '中华人民共和国未成年人保护法',link: '2.4'},
                {text: '中华人民共和国预防未成年人犯罪法',link: '2.5'},
                {text: '中华人民共和国家庭教育促进法',link: '2.6'},
                {text: '中华人民共和国残疾人保障法',link: '2.7'}
            ],
        },
        {   
            text: '社会组织',
            //可折叠侧边栏
            // collapsible: true,
            children: [
                {text: '中华人民共和国慈善法',link: '3.1'},
                {text: '中华人民共和国公益事业捐赠法',link: '3.2'}
            ],
        },
        {text: '中华人民共和国劳动合同法',link: '4'},
        {text: '中华人民共和国社会保险法',link: '5'},
    ]
}

export const enSidebar = {
    '/en/civillaw/': [
        {   
            text: 'Civil Code',
            //可折叠侧边栏
            // collapsible: true,
            children: [
                {text: 'General Part',link: '1'},
                {text: 'Real Rights',link: '2'},
                {text: 'Contracts',link: '3'},
                {text: 'Personality Rights',link: '4'},
                {text: 'Marriage and Family',link: '5'},
                {text: 'Succession',link: '6'},
                {text: 'Tort Liability',link: '7'}
            ]
        }
    ],
}
export const zhNavbar = [
    //单层
    {
        text: '主页',
        link: '/',
        // 该元素将一直处于激活状态
        // activeMatch: '/',
    },
    {
        text: '法律法规',
        children: [
            { text: '宪法相关法', link: 'constitution/' },
            { text: '民商法', link: 'civillaw/' },
            { text: '行政法', link: 'administrative/' },
            { text: '经济法', link: 'economic' },
            { text: '社会法', link: 'sociallaw/' },
            { text: '刑法', link: 'criminal/' },
            { text: '诉讼与非诉讼程序法', link: 'proceeding/' },
        ],
    },
    {
        text: '部门规章',
        link: 'regulate/1.1',
    },
    {
        text: '党务会议',
        link: 'party/1',
    },
    {
        text: '标签',
        link: '/tag/',
    },
    {
        text: '分类',
        link: '/category/',
    },
    {
        text: '归档',
        link: '/article/',
    },
    // 字符串 - 页面文件路径
    '/about'
]

// 英文导航栏
export const enNavbar = [
    //单层
    {
        text: 'Home',
        link: '/en/',
        // 该元素将一直处于激活状态
        activeMatch: '/',
    },
    //两层嵌套
    {
        text: 'Constitutional law',
        children: [
            { text: 'PRC Constitutional', link: '/en/constitution/1' },
        ],
    },
    {
        text: 'Civil Code',
        link:'/en/civillaw/1'
    },
    {
        text: 'Tag',
        link: '/en/tag/',
    },
    {
        text: 'Category',
        link: '/en/category/',
    },
    {
        text: 'Archive',
        link: '/en/article/',
    },
    // 字符串 - 页面文件路径
    '/en/about'
]
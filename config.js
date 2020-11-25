var config = {
    style: 'mapbox://styles/davidviry/cjkwsa3sq28i22robvnbc3mz3', // stylesheet location
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Roi & Queenie Epic Remarkable Historical Moment',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
            {
            id: 'Abstract',
            title: 'Abstract',
            image: '',
            description: '听说胡锦浩要搞个大新闻，个作为老父亲的小徐只能整活一波，为了凸显出徐哲然独一无二的第三人称视角，作为一个见证者，半个亲历者，个帮你们安排一下历史镜头，讲道理说不定以后真的有点用的，时间地点什么的都是经过严格的考据。reference：QQ空间，相册和说说。',
            location: {
                center: [121.95560, 36.51666],
				zoom: 3.49,
				pitch: 0.00,
				bearing: -0.00
            },
            onChapterEnter: [
                {
                    //layer: 'indego-stations',
                    //opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    //layer: 'indego-stations',
                    //opacity: 0
                }
            ]
        },
        {
            id: '2010',
            title: '那撇十年前了，高一2010年作为断代的开始',
            image: 'src/2010.jpg',
            description: '刚开学，班长和体育委员jo，军训完合唱比赛和运动会？还有足球赛迷路的我和吃完火锅夜自修翻墙...哦个那时候我啦不知道你们什么情况，反正么个开始混熟了，个我觉得这是一切的开始。居然已经是十年前的事情了，太恐怖了。反正这张图年度图片，我挑了好久。说起还做了一个100101的班级网页？笔记本电脑LQW得。哦个，没想到是十年后再给你们做个网页，也是毅种循环。恩，好好生活，保持优雅。> <',
            location: {
                center: [122.09749, 30.02114],
				zoom: 16.95,
				pitch: 41.00,
				bearing: 0.00,
            },
            onChapterEnter: [
                {
                    //layer: 'phl-city-limits',
                    //opacity: .45
                }
            ],
            onChapterExit: [
                {
                    //layer: 'phl-city-limits',
                    //opacity: 0
                }
            ]
        },
        {
            id: '2012',
            title: '新校区与高二下',
            image: 'src/201012.jpg',
            description: '很快2012年，你们开始搞上了？走进西澳，凯宏吃完唱K，比如很多陈奕迅的，然后后来感情踊跃，我和浩哥公交车回家好像说起了这个件事，具体时间点已经记不清了你们来复盘吧。（我可能出了点偏差',
            location: {
                center: [122.18046, 29.99932],
				zoom: 15.57,
				pitch: 0.00,
				bearing: -0.00
            },
            onChapterEnter: [
                {
                    //layer: 'phl-bike-network',
                    //opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: '2012',
            title: '下沙',
            image: 'src/xiasha.jpg',
            description: '随后就是2012年暑假.7月中旬去杭州下沙，浙江理工大学宿舍教室连坐，好像对你们来说是蜜月，somehow buildup了某种类似默契（hjh亲口说的，印象深刻，类似于出门的互相照顾），，对我来说是...（那时候小徐是中二 晚期患者...',
            location: {
                center: [120.34896, 30.31443],
				zoom: 16.00,
				pitch: 0.00,
				bearing: -0.00
            },
            onChapterEnter: [
                {
                    //layer: 'belmont',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'belmont',
                    //opacity: 0
                }
            ]
        },
        {
            id: '2013',
            title: '高三其实',
            image: 'src/2013.jpg',
            description: '在运动会篮球赛之前，一切都很好。后来，高考这种大型内卷现场，给爷整魔怔了...不知道你们当时怎么样，总之压力应该也蛮大的，',
            location: {
                center: [121.49838, 31.23632],
                zoom: 14.70,
                pitch: 1.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'wissahickon',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'wissahickon',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'Shengsi',
            title: 'Shengsi',
            image: 'src/shengsi.jpg',
            description: '高考之后去嵊泗玩，住在丽姐家的，嵊泗骏逸商务宾馆。 说起来基哥也自闭消失了，那天他买的拖鞋我现在还在...',
            location: {
                center: [122.45921, 30.72221],
				zoom: 13.81,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'pennypack',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'pennypack',
                    //opacity: 0
                }
            ]
        },
		{
            id: 'Daxue',
            title: '毕业之后啊',
            image: '',
            description: 'LQW和HJH开始了异地，14年LQW是不是去了US交换了阵子，总之小徐是自闭了整整四五年。14年暑假去了厦门，15年春季，借LQW的光来了次长沙，期间看了波电影，速度与激情7吧，和雷哥一起的。然后又产生了去杭州学托福，然后，妈的，三个人留美预备班，一个去了北大，一个去了澳洲，还有一个考了雅思，大家都有光明的未来。这几次稍微沾点阳气，随后没有出门又不行了',
            location: {
                center: [112.93095, 28.16383],
				zoom: 16.00,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'pennypack',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'pennypack',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'Daxue',
            title: '2017',
            image: 'src/nanjing.jpg',
            description: '小徐在2017年初开始活了过来，特别是setup了去英国的计划后。当时我们还有呵博，（呵博快毕业了也是猛）一起去了南京，然后折回上海为了给我办成绩单，哦个还和Yuqi Wu恰了饭。然后',
            location: {
                center: [118.79066, 31.97398],
				zoom: 13.31,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'pennypack',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'pennypack',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'Majiang',
            title: '他们改变了老钟',
            image: 'src/majiang.jpg',
            description: '语言都是苍白的',
            location: {
                center: [122.11964, 30.02083],
				zoom: 16.01,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'pennypack',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'pennypack',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'Now',
            title: '现在啊',
            image: 'src/lastpic.jpg',
            description: '我一直在想一个问题，我的记忆是否准确。我大概复盘了十年的碎片，穿起来肯定室友偏差的，但是我的视角肯定是一个局外人的维度，具体的心理活动，情绪记忆还有思想斗争肯定你们更清楚。所以啦...这就是个复盘的大致思路，但是为什么要复盘呢，其实没必要。若干年后我发现人与人的关系是流动的，而且是排列组合和社群高度相关的，因为我分别和HJH和LQW都高度相关，而HJH和LQW已经快要结婚了，所以我们三者的关系才会如此稳固。这么多年，将近十年我能系统性的复盘下来，从产生交集到更新认知并保持联络的，很少。特别是在我自闭的五六年里，我不知道如何与人去交流，因为多数情况下不是永恒的，那未来发生的也将成为过去的记忆，记忆就像伤疤和年轮一样变成历史包袱，就像西方世界为殖民历史所困(我在些什么...)场面话我不喜欢说，不太能准确的表达我的感受显得流于形式，不过我的话还是蛮期待下一个十年的？嘻嘻',
            location: {
                center: [122.11964, 30.02083],
				zoom: 16.01,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'pennypack',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'pennypack',
                    //opacity: 0
                }
            ]
        },
    ]
};
export default {
    loading:false,
    // 库存管理
    stockManage: {
        isButtonBox: true,
        isSearchBox: true,
        isSearchContent: true,
        catalogBox: false,
        whichComponents: 'stockList',
        outStockRecordLoad: false,
        storageId:'',
        id:'',
        codeBox:null,
        leaveWarehouseId:'',
        bigBoxPostData:'',
        midBoxPostData:'',
        littleBoxPostData:'',
        bigParentCode:'',
        bigParentStaticCode:'',
        midParentCode:'',
        firstCatalog:'',
        stockInfoLeaveRecordList:[
            {
                label: '序号'
                    },
            {
                label: '出库时间'
                    },
            {
                label: '出库数量'
                    },
            {
                label: '出库编号'
                    },
             {
                label: '出库负责人'
                    },
             {
                label: '收货方'
                    }
        ],
        catalog: [],
        stockTitleList: [
            {
                label: '序号'
                    },
            {
                label: '药品通用名称'
                    },
            {
                label: '产品批号'
                    },
            {
                label: '生产日期'
                    },
            {
                label: '药品规格'
                    },
            {
                label: '出库大包装数量'
                    },
            {
                label: '剩余库存'
                    },
            {
                label: '入库负责人'
                    }, 
            {
                label: '入库时间'
                    },
            {
                label: '操作'
                    }
                ],
    },
    // 出库管理
    leaveStorage: {
        isButtonBox:true,
        catalogBox:true,
        isSearchBox:true,
        catalogBox: false,
        whichComponents: 'outStockList',
        leaveWarehouseId:'',
        catalog:[],
        outStockRecordList:[
            {
                label: '序号'
                    },
            {
                label: '药品名称'
                    },
            {
                label: '最大包装数量'
                    }
            ],
        stockTitleList: [
            {
                label: '序号'
                    },
            {
                label: '收货方'
                    },
            {
                label: '出库类型'
                    },
            {
                label: '出库编号'
                    },
            {
                label: '出库负责人'
                    },
            {
                label: '出库时间'
                    },
            {
                label: '出库文件名称'
                    },
            {
                label: '出库单号'
                    },
            {
                label: '操作'
            },
                ],
    }
}

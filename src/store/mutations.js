export default {
    // 进入记录组件 隐藏菜单操作模块
    toStockRecord: (state, data) => {
        return state.stockManage.isButtonBox = state.stockManage.isSearchContent = state.stockManage.isSearchBox = false,
            state.stockManage.catalogBox = true,
            state.stockManage.whichComponents = 'stockRecord',
            state.stockManage.storageId = data.storageId,
            state.stockManage.catalog.push({
                label: '记录',
                path: 'stockRecord'
            })
    },
    // 进入出库记录组件
    toOutStockRecord: (state, data) => {
        return state.leaveStorage.isButtonBox = state.leaveStorage.isSearchBox = false,
            state.leaveStorage.catalogBox = true,
            state.leaveStorage.whichComponents = 'outStockRecord',
            state.leaveStorage.leaveWarehouseId = data.leaveWarehouseId,
            state.leaveStorage.catalog.push({
                label: '出库详情列表',
                path: 'outStockRecord'
            })
    },
    // 进入药品信息组件
    toMedicineInfo: (state, data) => {
        return state.stockManage.isButtonBox = state.stockManage.isSearchContent = state.stockManage.isSearchBox = false,
            state.stockManage.catalogBox = true,
            state.stockManage.whichComponents = 'medicineInfo',
            state.stockManage.id = data.id,
            state.stockManage.catalog.push({
                label: '药品信息',
                path: 'medicineInfo'
            })
    },
    // 返回库存管理首页
    backStockList: state => {
        return state.stockManage.isButtonBox = state.stockManage.isSearchContent = state.stockManage.isSearchBox = true,
            state.stockManage.catalogBox = false,
            state.stockManage.whichComponents = 'stockList',
            state.stockManage.catalog = []
    },
    // 返回出库列表
    backOutStockList: state => {
        return state.leaveStorage.isButtonBox = state.leaveStorage.isSearchBox = true,
            state.leaveStorage.catalogBox = false,
            state.leaveStorage.whichComponents = 'outStockList',
            state.leaveStorage.catalog = []
    },
    // 进入出库信息组件
    toOutStockInfo: (state, data) => {
        return state.stockManage.whichComponents = 'outStockInfo',
            state.stockManage.leaveWarehouseId = data.leaveWarehouseId,
            state.stockManage.catalog.push({
                label: '出库信息',
                path: 'outStockInfo'
            })
    },
    // 进入监管码库存组件
    showCodeType: (state, data) => {
        return state.stockManage.isButtonBox = state.stockManage.isSearchBox = false,
            state.stockManage.catalogBox = true,
            state.stockManage.catalog.push({
                label: data.type == 1 ? '剩余库存' : '出库大包装数量',
                path: ''
            })
    },
    // 进入大箱码组件
    toBigBox: (state, data) => {
        return state.stockManage.whichComponents = 'bigBox',
            state.stockManage.bigBoxPostData = data.list,
            state.stockManage.catalog.push({
                label: '大箱码',
                path: 'bigBox'
            })
    },
    // 进入中箱码组件
    toMidBox: (state, data) => {
        let length = state.stockManage.catalog.length;
        state.stockManage.whichComponents = 'midBox';
        if (data.parentCode) {
            state.stockManage.bigParentCode = state.stockManage.bigParentStaticCode = data.parentCode,
                state.stockManage.catalog[length - 1].label = '大箱码(' + data.parentCode.slice(0, 7) + '...' + ')';
        } else {
            state.stockManage.midBoxPostData = data.list
        }
        state.stockManage.catalog.push({
            label: '中箱码',
            path: 'midBox'
        })
    },
    // 进入小箱码组件
    toLittleBox: (state, data) => {
        let length = state.stockManage.catalog.length;
        state.stockManage.whichComponents = 'littleBox';
        if (data.parentCode) {
            state.stockManage.midParentCode = data.parentCode,
                state.stockManage.catalog[length - 1].label = '中箱码(' + data.parentCode.slice(0, 7) + '...' + ')';
        } else {
            state.stockManage.littleBoxPostData = data.list
        }

        state.stockManage.catalog.push({
            label: '小箱码',
            path: 'littleBox'
        })
    },
    // 显示loading
    showLoading: state => {
        return state.loading = true;
    },
    // 隐藏loadin
    hiddenLoading: state => {
        return state.loading = false;
    },
    // 清除小箱码父Code
    clearMidParentCode: state => {
        return state.stockManage.midParentCode = '';
    },
    // 更改面包屑默认第一个标签
    changeFirstCatalog: (state, data) => {
        return state.stockManage.firstCatalog = data.name;
    },
    // 库存管理面包屑跳转
    toSomewhere: (state, data) => {
        let length = state.stockManage.catalog.length;
        if (data.index == length - 1) {
            return
        } else {
            if (state.stockManage.catalog[data.index].path == '') {
                state.stockManage.whichComponents = state.stockManage.catalog[data.index + 1].path;
                state.stockManage.catalog = state.stockManage.catalog.slice(0, data.index + 2);
                state.stockManage.catalog[data.index + 1].label = state.stockManage.firstCatalog;
            } else {
                state.stockManage.whichComponents = state.stockManage.catalog[data.index].path;
                state.stockManage.catalog = state.stockManage.catalog.slice(0, data.index + 1);
                state.stockManage.catalog[data.index].label = state.stockManage.catalog[data.index].label.split('(')[0];
            }
        }
    },

}

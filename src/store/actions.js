/**
 * Created by LangK on 2016/12/20.
 */
import Vue from 'vue'
const beginLoading = commit => {
  console.log(commit+" start")
  return Date.now()
}


const stopLoading = commit => {
  console.log(commit+" stop")
  return Date.now()
}
export default {
  // 获取药品首页列表
getpilllist({commit},postdata){
      console.log(postdata)
    beginLoading('getpilllist--');
    return Vue.http.post('/V1.0.0/drugInfo/findPage',postdata).then(response => {
      stopLoading('getpilllist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 药品首页删除
pillSurelist({commit},postdata){
      console.log(postdata)
    beginLoading('pillSurelist--');
    return Vue.http.post('/V1.0.0/drugInfo/delete',postdata).then(response => {
      stopLoading('pillSurelist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 动态获取登录账号下的生产地址
getProduceAddresslist({commit},postdata){
      console.log(postdata)
    beginLoading('getProduceAddresslist--');
    return Vue.http.post('/V1.0.0/account/getProduceAddressByAccId',postdata).then(response => {
      stopLoading('getProduceAddresslist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
// 药品首页新增药品按钮
pilladdBtnlist({commit},postdata){
      console.log(postdata)
    beginLoading('pilladdBtnlist--');
    return Vue.http.post('/V1.0.0/drugInfo/save',postdata).then(response => {
      stopLoading('pilladdBtnlist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 药品首页修改药品按钮
pilleditBtnlist({commit},postdata){
      console.log(postdata)
    beginLoading('pilleditBtnlist--');
    return Vue.http.post('/V1.0.0/drugInfo/save',postdata).then(response => {
      stopLoading('pilleditBtnlist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
// 获取药品库存列表
getMedicineStockList({commit},postdata){
      console.log(postdata)
    beginLoading('getMedicineStockList--');
    return Vue.http.post('/V1.0.0/storageWarehouse/page',postdata).then(response => {
      stopLoading('getMedicineStockList--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 药品首页查询药品按钮
pillnameSearchlist({commit},postdata){
      console.log(postdata)
    beginLoading('pillnameSearchlist--');
    return Vue.http.post('/V1.0.0/drugInfo/findPage',postdata).then(response => {
      stopLoading('pillnameSearchlist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取监管码管理首页列表
getcodelist({commit},postdata){
      console.log(postdata)
    beginLoading('getcodelist--');
    return Vue.http.post('/V1.0.0/supervisionWrapper/findPage',postdata).then(response => {
      stopLoading('getcodelist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })

  },
// 入库文件上传
inStockFileUpload({commit},postdata){
      console.log(postdata)
    beginLoading('inStockFileUpload--');
    return Vue.http.post('/V1.0.0/storageWarehouse/file',postdata).then(response => {
      stopLoading('inStockFileUpload--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 监管码生产模糊搜索
fuzzySearchlist({commit},postdata){
      console.log(postdata)
    beginLoading('fuzzySearchlist--');
    return Vue.http.post('/V1.0.0/drugInfo/getArrayLikeDrugName',postdata).then(response => {
      stopLoading('fuzzySearchlist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
// 出库文件上传
outStockFileUpload({commit},postdata){
      console.log(postdata)
    beginLoading('outStockFileUpload--');
    return Vue.http.post('/V1.0.0/leaveWarehouse/file',postdata).then(response => {
      stopLoading('outStockFileUpload--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 新增监管码
codeaddBtnlist({commit},postdata){
      console.log(postdata)
    beginLoading('codeaddBtnlist--');
    return Vue.http.post('/V1.0.0/supervisionWrapper/save',postdata).then(response => {
       stopLoading('codeaddBtnlist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
// 出库管理列表
getOutStockList({commit},postdata){
      console.log(postdata)
    beginLoading('getOutStockList--');
    return Vue.http.post('/V1.0.0/leaveWarehouse/page',postdata).then(response => {
      stopLoading('getOutStockList--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取要编辑的监管码的详细信息
codeeditlist({commit},postdata){
      console.log(postdata)
    beginLoading('codeeditlist--');
    return Vue.http.post('/V1.0.0/supervisionWrapper/getSupervisionWrapperById',postdata).then(response => {
       stopLoading('codeeditlist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
// 查询所有经销商
getAllDistributor({commit}){
    beginLoading('getAllDistributor--');
    return Vue.http.get('/V1.0.0/distributor/findAll').then(response => {
      stopLoading('getAllDistributor--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
},
// 获取大包装监管码列表
getMaxPackingCodeList({commit},postdata){
      console.log(postdata)
    beginLoading('getMaxPackingCodeList--');
    return Vue.http.post('/V1.0.0/leaveWarehouse/findCodeList',postdata).then(response => {
      stopLoading('getMaxPackingCodeList--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 修改监管码
codeeditBtnlist({commit},postdata){
      console.log(postdata)
    beginLoading('codeeditBtnlist--');
    return Vue.http.post('/V1.0.0/supervisionWrapper/update',postdata).then(response => {
     stopLoading('codeeditBtnlist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
// 获取对应子监管码列表
getFindChildCodeList({commit},postdata){
      console.log(postdata)
    beginLoading('getFindChildCodeList--');
    return Vue.http.post('/V1.0.0/leaveWarehouse/findChildCodeList',postdata).then(response => {
      stopLoading('getFindChildCodeList--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
   // 监管码页面搜索
codenameSearchlist({commit},postdata){
      console.log(postdata)
    beginLoading('codenameSearchlist--');
    return Vue.http.post('/V1.0.0/supervisionWrapper/findPage',postdata).then(response => {
      stopLoading('codenameSearchlist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
// 获取出库详情列表
getOutStockDetailList({commit},postdata){
      console.log(postdata)
    beginLoading('getOutStockDetailList--');
    return Vue.http.post('/V1.0.0/leaveWarehouseDetail/findDetailList',postdata).then(response => {
      stopLoading('getOutStockDetailList--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
},
// 获取入库信息的出库详细记录列表
getStockInfoLeaveList({commit},postdata){
      console.log(postdata)
    beginLoading('getStockInfoLeaveList--');
    return Vue.http.post('/V1.0.0/storageWarehouse/findLeaveByStorageId',postdata).then(response => {
      stopLoading('getStockInfoLeaveList--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
},
// 获取入库信息的出库详细信息和收货方信息
getStockInfoLeaveDetailInfo({commit},postdata){
      console.log(postdata)
    beginLoading('getStockInfoLeaveDetailInfo--');
    return Vue.http.post('/V1.0.0/leaveWarehouse/findLeaveWarehouseInfo',postdata).then(response => {
      stopLoading('getStockInfoLeaveDetailInfo--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
},
// 获取药品详细信息
getMedicinelDetailInfo({commit},postdata){
      console.log(postdata)
    beginLoading('getMedicinelDetailInfo--');
    return Vue.http.post('/V1.0.0/drugInfo/getDrugInfoById',postdata).then(response => {
      stopLoading('getMedicinelDetailInfo--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
},
// 生成监管码
makelist({commit},postdata){
      console.log(postdata)
    beginLoading('makelist--');
    return Vue.http.post('/V1.0.0/supervisionWrapper/generatorSupervisionCorder',postdata).then(response => {
      stopLoading('makelist--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
},
getUserInfoList({commit},postdata){
         console.log(postdata)
       beginLoading('getUserInfoList--');
       return Vue.http.post('/admin/double/user/V0_0_1/getlist',postdata).then(response => {
         stopLoading('getUserInfoList--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   系统账号列表
    systemmanageList({commit},postdata){
         console.log(postdata)
       beginLoading('systemmanageList--');
       return Vue.http.post('/V1.0.0/account/findPage',postdata).then(response => {
         stopLoading('systemmanageList--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   经销商列表
     dealermanageList({commit},postdata){
         console.log(postdata)
       beginLoading('dealermanageList--');
       return Vue.http.post('/V1.0.0/distributor/findPage',postdata).then(response => {
         stopLoading('dealermanageList--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   新建账号
      Addsystem({commit},postdata){
         console.log(postdata)
       beginLoading('Addsystem--');
       return Vue.http.post('/V1.0.0/account/save',postdata).then(response => {
         stopLoading('Addsystem--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//  新建经销商
      dealermanageAdd({commit},postdata){
         console.log(postdata)
       beginLoading('dealermanageAdd--');
       return Vue.http.post('/V1.0.0/distributor/save',postdata).then(response => {
         stopLoading('dealermanageAdd--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   修改账号
       amendsystem({commit},postdata){
         console.log(postdata)
       beginLoading('amendsystem--');
       return Vue.http.post('/V1.0.0/account/update',postdata).then(response => {
         stopLoading('amendsystem--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   修改经销商
     dealeramend({commit},postdata){
         console.log(postdata)
       beginLoading('dealeramend--');
       return Vue.http.post('/V1.0.0/distributor/save',postdata).then(response => {
         stopLoading('dealeramend--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   删除账号
       deletesystem({commit},postdata){
         console.log(postdata)
       beginLoading('deletesystem--');
       return Vue.http.post('/V1.0.0/account/delete',postdata).then(response => {
         stopLoading('deletesystem--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   删除经销商
       dealermanagedel({commit},postdata){
         console.log(postdata)
       beginLoading('dealermanagedel--');
       return Vue.http.post('/V1.0.0/distributor/delete',postdata).then(response => {
         stopLoading('dealermanagedel--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   查看详情
       seesystem({commit},postdata){
         console.log(postdata)
       beginLoading('seesystem--');
       return Vue.http.post('/V1.0.0/account/getAccountById',postdata).then(response => {
         stopLoading('seesystem--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
       seedealer({commit},postdata){
         console.log(postdata)
       beginLoading('seedealer--');
       return Vue.http.post('/V1.0.0/distributor/save',postdata).then(response => {
         stopLoading('seedealer--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   设为常用
     favorite({commit},postdata){
         console.log(postdata)
       beginLoading(' favorite--');
       return Vue.http.post('/V1.0.0/distributor/modifyCommon',postdata).then(response => {
         stopLoading(' favorite--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   登录
     login({commit},postdata){
         console.log(postdata)
       beginLoading('login--');
       return Vue.http.post('/V1.0.0/account/login',postdata).then(response => {
         stopLoading('login--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
//   核对账号
       validataAccountIsExist({commit},postdata){
         console.log(postdata)
       beginLoading('validataAccountIsExist--');
       return Vue.http.post('/V1.0.0/account/validataAccountIsExist',postdata).then(response => {
         stopLoading('validataAccountIsExist--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
      deleteProduceAddress({commit},postdata){
         console.log(postdata)
       beginLoading('deleteProduceAddress--');
       return Vue.http.post('/V1.0.0/account/deleteProduceAddress',postdata).then(response => {
         stopLoading('deleteProduceAddress--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
     //  药品管理首页根据id获取修改数据的信息
       pilleditList({commit},postdata){
         console.log(postdata)
       beginLoading('pilleditList--');
       return Vue.http.post('/V1.0.0/drugInfo/getDrugInfoById',postdata).then(response => {
         stopLoading('pilleditList--')
         if (response.status === 200) {
           return Promise.resolve(response.body)
         } else {
           return Promise.reject(response.data.message)
         }
       })
     },
}

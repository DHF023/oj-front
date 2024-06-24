import request from '@/api/index'

// 发送的参数
export interface SendParam {
  page: number,
  itemsPerPage: number,
  sortBy: string[]
}

// 接收的参数
export interface ReceiveItems {
  status: string,
  id: number,
  name: string,
  count: number,
  pass: number,
}

// 获取用户信息
export function query(param: SendParam) {
  // 待完善
  return request({
    url: 'problems_info',
    method: 'post',
    data: param,
  })
}

const dessert = [
  {
    status: 'ac',
    id: 1,
    name: 'a+b',
    count: 1,
    pass: 1
  },
  {
    status: 'wa',
    id: 2,
    name: 'a-b',
    count: 2,
    pass: 1
  },
  {
    status: '',
    id: 3,
    name: 'a*b',
    count: 3,
    pass: 2
  },
];

export async function queryTest(param: SendParam) {
  const start = (param.page - 1) * param.itemsPerPage
  const end = start + param.itemsPerPage
  const items = dessert.slice()

  // if (param.sortBy.length) {
  //   const sortKey = param.sortBy[0].key
  //   const sortOrder = param.sortBy[0].order
  //   items.sort((a, b) => {
  //     const aValue = a[sortKey]
  //     const bValue = b[sortKey]
  //     return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
  //   })
  // }

  const paginated = items.slice(start, end)

  return { items: paginated, total: items.length };
};
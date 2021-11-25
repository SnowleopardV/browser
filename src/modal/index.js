function getPercent (num, total) {
  return  ' ' + (num * 100 / total).toFixed(2) + '%'
}

function getTotal(total, item) {
  return total + item.value;
}

function getChartList (data) {
  let total = data.reduce(getTotal, 0)
  return data.map(item => ({
    name: item.name + getPercent(item.value,total),
    value: item.value,
  }))
}

export const overview1 = getChartList([
  { name: 'Edge', value: 23},
  { name: 'Chrome', value: 8252},
  { name: 'Safari', value: 142},
  { name: 'FireFox', value: 219},
])


export const overview2 = getChartList([
  {value: 7855, name: '不需要升级'},
  {value: 794, name: '需要升级'}
])

export const overview3 = getChartList([
  {value: 0, name: 'Edge'},
  {value: 7, name: 'FireFox'},
  {value: 0, name: 'Safari'},
  {value: 787, name: 'Chrome'}
])

export const chrome = getChartList([
  {value: 82, name: '<50'},
  {value: 255, name: '50~59'},
  {value: 450, name: '60~69'},
  {value: 856, name: '70~79'},
  {value: 4613, name: '80~89'},
  {value: 1996, name: '90~94'}
])

export const safari = getChartList([
  {value: 16, name: '11'},
  {value: 5, name: '12'},
  {value: 29, name: '13'},
  {value: 66, name: '14'},
  {value: 23, name: '15'}
])

export const edge = getChartList([
  {value: 1, name: '16'},
  {value: 2, name: '17'},
  {value: 20, name: '18'}
])

export const fireFox = getChartList([
  {value: 7, name: '<50'},
  {value: 0, name: '70~80'},
  {value: 1, name: '80~90'},
  {value: 211, name: '90~100'},
])

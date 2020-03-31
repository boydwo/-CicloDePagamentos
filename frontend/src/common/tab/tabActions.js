export function selectTab(tabId) {
  return {
    type: 'TAB_SELECTED',
    payload: tabId
  }
}

export function showTabs(...tabIds) {
  //cria um objeto
  const tabsToShow = {}
  tabIds.forEach(e => tabsToShow[e] = true)
  return {
    type: 'TAB_SHOWED',
    payload: tabsToShow
  }
}